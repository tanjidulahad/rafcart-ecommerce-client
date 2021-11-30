import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth/useAuth';
import logo from '../../../images/logo.svg';
import './Topbar.css';
const Topbar = ({ cartLength }) => {
    const [wishlistCount, setWishListCount] = useState(0);
    const { user } = useAuth();
    const email = user.email;
    useEffect(() => {
        fetch(`https://rafcart.herokuapp.com/wishlist/${email}`)
            .then(res => res.json())
            .then(data => setWishListCount(data.length))
    }, [email])

    const openMobileMenu=()=>{
        const sideBar=document.getElementById("mobileMenu")
        sideBar.classList.remove("goleft");
        sideBar.classList.add("goright");
        console.log(sideBar);
    }
    const closeMobileMenu=()=>{
        const sideBar=document.getElementById("mobileMenu")
        sideBar.classList.add("goleft");
        sideBar.classList.remove("goright");
        console.log(sideBar);
    }


    return (
        <>
        <header className='py-4 shadow-sm bg-white'>
            <div className="container flex items-center justify-between">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                    <span className="absolute left-4 top-3 text-lg text-gray-400">
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="text" className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder='search' />
                    <button className="bg-primary border border-primary text-white px-8 rounder-r-md hover:bg-transparent hover:text-primary transition">Search</button>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/myaccount/wishlist" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="text-xs leading-3">Wish List</div>
                        {wishlistCount > 0 && <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{wishlistCount}</span>}
                    </Link>
                    <Link to='/cart' className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="text-xs leading-3">Cart</div>
                        {cartLength>0&&<span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{cartLength}</span>}
                    </Link>
                    <Link to="/myaccount" className="text-center text-gray-700 hover:text-primary transition relative hidden lg:block">
                        <div className="text-2xl">
                            <i className="far fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </Link>
                    <button onClick={openMobileMenu} className="block text-center text-gray-700 hover:text-primary transition relative lg:hidden">
                    <div className="text-2xl" id="menuBar">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="text-xs leading-3">Menu</div>
                </button>
                </div>

            </div>

        </header>
        {/* <!-- mobile sidebar menu --> */}
        <div className="fixed goleft top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow " id="mobileMenu">
                <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
                    <div onClick={closeMobileMenu} id="closeMenu"
                        className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer">
                        <i className="fas fa-times"></i>
                    </div>
                    {/* <!-- navlink --> */}
                    <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">Menu</h3>
                    <div className="">
                        <Link to='/' className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                            Home
                        </Link>
                        <Link to='/shop' className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                            Shop
                        </Link>
                        <a href="#" className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                            About Us
                        </a>
                        <a href="#" className="block px-4 py-2 font-medium transition hover:bg-gray-100">
                            Contact Us
                        </a>
                        <Link to="/myaccount" className="block px-4 py-2 font-medium transition hover:bg-gray-100">Account
                    </Link>
                    </div>
                    {/* <!-- navlinks end --> */}
                </div>
            </div>
            {/* <!-- mobile sidebar menu end --> */}
        </>
    );
};

export default Topbar;