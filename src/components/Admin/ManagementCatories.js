import { useState, useEffect } from "react";

export const ManagementCatories = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({ name: "", image: "" });
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingImage, setEditingImage] = useState("");
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => {
                const formattedData = data.map(cat => ({
                    name: cat,
                    image: `https://via.placeholder.com/150?text=${cat}`
                }));
                setCategories(formattedData);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleAddCategory = () => {
        if (newCategory.name) {
            // Cập nhật URL hình ảnh tạm thời
            const newCatWithImage = {
                ...newCategory,
                image: imageFile ? URL.createObjectURL(imageFile) : newCategory.image,
            };
            setCategories([...categories, newCatWithImage]);
            setNewCategory({ name: "", image: "" });
            setImageFile(null); // Reset file hình ảnh
        }
    };

    const handleDeleteCategory = (name) => {
        setCategories(categories.filter((cat) => cat.name !== name));
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category.name);
        setEditingImage(category.image);
    };

    const handleUpdateCategory = () => {
        if (editingCategory) {
            const updatedCategories = categories.map((cat) =>
                cat.name === editingCategory
                    ? { ...cat, name: editingCategory, image: editingImage }
                    : cat
            );
            setCategories(updatedCategories);
            setEditingCategory(null);
            setEditingImage("");
        }
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    return (
        <div className="p-6 ">
            <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>

            {/* Hiển thị danh sách categories */}
            <div className="grid grid-cols-8 gap-2">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="border rounded-lg p-1 flex flex-col items-center text-center" 
                    >
                        <img src={category.image} alt={category.name} className="mb-2 w-16 h-16 object-cover" />
                        <h3 className="text-lg font-semibold">{category.name}</h3>

                        <div className="flex mt-2">
                            <button
                                onClick={() => handleEditCategory(category)}
                                className="bg-blue-500 text-white px-2 py-1 text-xs mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteCategory(category.name)}
                                className="bg-red-500 text-white px-2 py-1 text-xs"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-2 mt-4">
                <div>
                    <h3 className="text-lg font-bold">Add New Category</h3>
                    <input
                        type="text"
                        placeholder="Category Name"
                        value={newCategory.name}
                        onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                        className="border p-1 mr-1 text-sm"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="border p-1 mr-1 text-sm"
                    />
                    <button
                        onClick={handleAddCategory}
                        className="bg-green-500 text-white mt-2 px-2 py-1 text-sm"
                    >
                        Add Category
                    </button>
                </div>

                {/* Form chỉnh sửa danh mục */}
                {editingCategory && (
                    <div>
                        <h3 className="text-lg font-bold">Edit Category</h3>
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={editingCategory}
                            onChange={(e) => setEditingCategory(e.target.value)}
                            className="border p-1 mr-1 text-sm"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border p-1 mr-1 text-sm"
                        />
                        <button
                            onClick={handleUpdateCategory}
                            className="bg-yellow-500 text-white mt-2 px-2 py-1 text-sm"
                        >
                            Update Category
                        </button>
                    </div>
                )}
            </div>

            {/* Thêm danh mục mới */}



        </div>
    );
};
