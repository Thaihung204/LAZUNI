import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AvatarImage from '../assets/images/avatar-default.jpg';
import { CiChat1 } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";
import { ListProductByidUse } from "./ListProductByidUser";
export const ShopVendors = () => {
    const { userId } = useParams();

    return (

        <>
            <div className="container mx-auto">


                <div className="flex my-[50px]">
                    <div className="w-2/5 bg-[#FAFAFA]">
                        <a href="#" title="User Profile" className="flex ml-[30px]  my-[20px] space-x-2 items-center ">
                            <img
                                className="w-[100px] h-[100px] rounded-full object-cover w-2/5"
                                src={AvatarImage}
                                alt="Profile"
                            />
                            <div className="">
                                <strong className="text-base font-[700px] text-primary">{'Guest'}</strong>
                                <div className="flex mt-2">
                                    <button className="flex items-center border p-2 mr-2"><CiChat1 className="mr-1" /><div className="text-[12px]">Chat ngay</div></button>
                                    <button className="flex items-center border p-2"><FaPlus className="mr-1 text-[10px]" /><div className="text-[12px]">Follow shop</div></button>
                                </div>
                            </div>

                        </a></div>
                    <div className="w-3/5 ml-12 flex mt-[10px]">
                        <div className="flex flex-col text-left mr-[150px]" >
                            <div className=" flex items-center mb-[30px] text-[18px]"><CiShop className="text-[18px]" /><div className="mx-[10px]">Sản phẩm:</div>..</div>
                            <div className=" flex items-center text-[18px]"><FaRegAddressBook className="text-[14px]" /><div className="mx-[10px]">Địa chỉ:</div>..</div>
                        </div>
                        <div className="flex flex-col text-left " >
                            <div className=" flex items-center mb-[30px] text-[18px]"><FiUserCheck className="text-[18px]" /><div className="mx-[10px]">Tham gia:</div>..</div>
                            <div className=" flex items-center text-[18px]"><FaRegAddressBook className="text-[14px]" /><div className="mx-[10px]">Địa chỉ:</div>..</div>
                        </div>


                    </div>
                </div>

                <div>
                    {/* <ListProductByidUse/> */}
                    <ListProductByidUse />
                </div>

            </div>





        </>



    )



}