import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Range } from "react-range";

export const ListProductManager = (status) => {
  const [products, setProducts] = useState([]); // Store the list of products
  const [displayedProducts, setDisplayedProducts] = useState([]); // Store the displayed products after filtering and sorting
  const [searchTerm, setSearchTerm] = useState(''); // Store the search term
  const [sortType, setSortType] = useState(''); // Store the sort type
  const [isLoading, setIsLoading] = useState(true); // Loading state for the product list
  const [priceRange, setPriceRange] = useState([0, 1000]); // Store the price range filter
  const [maxPrice, setMaxPrice] = useState(1000); // Store the maximum price dynamically

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://dummyjson.com/products');
        const productsList = data.products;

        // Find the maximum price from the fetched products
        const maxProductPrice = Math.max(...productsList.map(product => product.price));

        setProducts(productsList); // Set the fetched products
        setDisplayedProducts(productsList); // Initially show all products
        setMaxPrice(maxProductPrice); // Update the maximum price based on products
        setPriceRange([0, maxProductPrice]); // Set the initial price range
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Apply filtering and sorting whenever search term, sort type, or price range changes
  useEffect(() => {
    let filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );

    if (sortType === 'asc') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'desc') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(filteredProducts);
  }, [searchTerm, sortType, priceRange, products]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price); // Format price for VND
  };

  return (
    <>
      <div className='mb-4 flex mx-auto'>
        {/* Filter Section */}
        <div className='w-[550px] flex flex-col p-4'>
          <div className='border-b text-[26px] mb-4'>Filter</div>
          
          {/* Price Range Filter */}
          <div>
            <label className='block mb-2'>Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}</label>
            <Range
              step={10}
              min={0}
              max={maxPrice} // Use dynamic max price
              values={priceRange}
              onChange={(values) => setPriceRange(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '6px',
                    width: '100%',
                    backgroundColor: '#ccc'
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '12px',
                    width: '12px',
                    borderRadius: '12px',
                    backgroundColor: '#999',
                  }}
                />
              )}
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="w-[1000xp] ">
          {/* Search and Sort Header */}
          <div className="flex justify-between items-center mb-4">
            {/* Search Form */}
            <div className="flex items-center space-x-2">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="border p-2 rounded-lg w-[400px] text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sort Dropdown */}
            <select
              className="border p-2 rounded-lg"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort by Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          {/* Products List */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <span>Loading products...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 border border-gray-100">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <div key={product.id} className="border border-gray-100 p-[10px]">
                    <Link
                      to={`/products/${product.id}`}
                      className="flex flex-col items-center justify-center transition-transform transform hover:scale-105 relative"
                    >
                      <div className="w-full text-left">
                        <img
                          src={product.images[0] || '/default-image.png'}
                          alt={product.title}
                          className="w-full h-[190px] object-cover"
                          onError={(e) => { e.target.src = '/default-image.png'; }}
                        />
                      </div>
                      <div className="mb-4 mt-2 w-full text-left flex justify-between p-2">
                        <div className="w-9/12 text-ellipsis overflow-hidden line-clamp-2">
                          {product.title}
                        </div>
                      </div>
                      <div className="text-red-500 font-semibold w-full text-left flex ml-[20px]">
                        <span className="font-[2px] mr-[2px]">đ </span>{formatPrice(product.price)}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-64">
                  <span>No products found.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
