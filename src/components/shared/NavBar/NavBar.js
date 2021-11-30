import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import sofa from '../../../images/icons/sofa.svg';
import bed from '../../../images/icons/bed.svg';
import office from '../../../images/icons/office.svg';
import outdoor from '../../../images/icons/terrace.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="bg-gray-800 hidden lg:block">
                <div className="container flex">
                    {/* allcatagory */}
                    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                        <span className='text-white'>
                            <i className="fas fa-bars"></i>
                        </span>
                        <span className="text-white ml-2">All categories</span>
                        <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                            <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src={bed} alt="" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                            </a>
                            <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src={sofa} alt="" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                            </a>
                            <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src={office} alt="" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Office</span>
                            </a>
                            <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src={outdoor} alt="" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                            </a>
                            <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src={sofa} alt="" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                            </a>
                            <a href="" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src={sofa} alt="" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                            </a>

                        </div>
                    </div>
                    <div className="flex items-center justify-between flex-grow pl-12">
                        <div className="flex items-center space-x-6">
                            <Link to="/" className="text-gray-200 hover:text-white transition" >Home</Link>
                            <Link to="/shop" className="text-gray-200 hover:text-white transition" >Shop</Link>
                            <Link to="/about" className="text-gray-200 hover:text-white transition" >About Us</Link>
                            <Link to="/contact" className="text-gray-200 hover:text-white transition" >Contact Us</Link>
                        </div>
                        <Link to="/login" className="text-gray-200 hover:text-white transition">Login/Register</Link>
                    </div>
                </div>
            </div>

            {/* <!-- mobile menubar --> */}
            {/* <div
                class="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 z-99 lg:hidden">
                <a href="javascript:void(0)" class="block text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl" id="menuBar">
                        <i class="fas fa-bars"></i>
                    </div>
                    <div class="text-xs leading-3">Menu</div>
                </a>
                <a href="#" class="block text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fas fa-list-ul"></i>
                    </div>
                    <div class="text-xs leading-3">Category</div>
                </a>
                <a href="#" class="block text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="text-xs leading-3">Search</div>
                </a>
                <Link to="/myaccount" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i class="far fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </Link>
            </div> */}
            {/* <!-- mobile menu end --> */}


        </>
    );
};

export default NavBar;