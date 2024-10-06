import React, { useState } from 'react';
import AvatarImage from '../assets/images/avatar-default.jpg';
import { ListProductManager } from '../components/ListProductManager';

export const ManageProducts = () => {
  // State to keep track of the selected area (Published, Stock, Under Review)
  const [selectedArea, setSelectedArea] = useState('published');

  // Function to handle the click on each area (to set the background color and status)
  const handleAreaClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <>
      <div className="container mx-auto mt-[50px]">
        <div className="flex ">
          <div className="w-full bg-[#FAFAFA]">
            <a href="#" title="User Profile" className="flex ml-[30px] my-[20px] space-x-2 items-center">
              <img className="w-[100px] h-[100px] rounded-full object-cover w-2/5" src={AvatarImage} alt="Profile" />
              <div>
                <strong className="text-base font-[700px] text-primary">Cửa hàng của bạn</strong>
                <div className="flex mt-2"></div>
              </div>
            </a>
          </div>

          
        </div>
        <div className='my-[50px]  p-4 bg-[#FAFAFA]'>
            {/* Input Fields for different areas */}
            <input
              type="button"
              value="Đã public"
              className={` p-3 w-1/6 border-primary border   ${selectedArea === 'published' ? 'bg-primary text-white' : 'bg-white text-primary'} rounded`}
              onClick={() => handleAreaClick('published')}
            />
            <input
              type="button"
              value="Kho"
              className={`mx-4 p-3 border-primary border   w-1/6 ${selectedArea === 'stock' ? 'bg-primary text-white' : 'bg-white text-primary'} rounded`}
              onClick={() => handleAreaClick('stock')}
            />
            <input
              type="button"
              value="Chờ duyệt"
              className={`p-3 w-1/6 border-primary border ${selectedArea === 'underReview' ? 'bg-primary text-white' : 'bg-white text-primary'} rounded`}
              onClick={() => handleAreaClick('underReview')}
            />
          </div>
        <div>
          {/* Pass the selected area status to ListProductManager */}
          <ListProductManager status={selectedArea} />
        </div>
      </div>
    </>
  );
};
