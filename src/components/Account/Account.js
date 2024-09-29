import React from 'react';
// import avatar from '../../images/avatar.png';
import Topbar from '../shared/Topbar/Topbar';
import NavBar from '../shared/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import ProfileInformation from '../ProfileInformation/ProfileInformation';
import { Link } from 'react-router-dom';
import ManageAccount from '../ManageAccount/ManageAccount';
import WishList from '../WishList/WishList';
import useAuth from '../../context/useAuth/useAuth';
import { useStoreState } from 'easy-peasy';
import { useLocation } from 'react-router-dom';
const Account = () => {
    // let { path, url } = useRouteMatch();
    const {user,logOut}=useAuth();
    const avatar=user.photoURL;
    const location = useLocation()
    console.log(location)

    // const addActiveClass = e => {
    //     const div = document.getElementById('sidebarlinkdiv');
    //     const alinks = div.getElementsByTagName('a');
    //     Object.entries(alinks).map(link => {
    //         if(link[1].classList.contains("text-primary")){
    //             link[1].classList.remove("text-primary");
    //         }
    //         });
    //     e.target.classList.add("text-primary");
    // }
    const {totalQuantity}=useStoreState((state)=>state)

    return (
        <>
            <Topbar cartLength={totalQuantity}></Topbar>
            <NavBar></NavBar>
            <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">

                <div className="col-span-3">

                    <div className="px-4 py-3 shadow flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img src={avatar} className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" alt="" />
                        </div>
                        <div>
                            <p className="text-gray-600">Hello,</p>
                            <h4 className="text-gray-800 capitalize font-medium">{user.displayName}</h4>
                        </div>
                    </div>

                    <div id="sidebarlinkdiv" className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">

                        <div className="space-y-1 pl-8">
                            <Link to=""
                                className={`relative text-base font-medium capitalize hover:text-primary transition block ${location.pathname=="/myaccount" && "text-primary"}`}>
                                Manage account
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="far fa-address-card"></i>
                                </span>
                            </Link>
                            <Link to="profileinfo" className={`hover:text-primary transition capitalize block ${location.pathname=="/myaccount/profileinfo" && "text-primary"}`}>Profile information</Link>
                            <a href="#" className="hover:text-primary transition capitalize block">Manage address</a>
                            <a href="#" className="hover:text-primary transition capitalize block">change password</a>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <a href="#" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                                My order history
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fas fa-gift"></i>
                                </span>
                            </a>
                            <a href="#" className="hover:text-primary transition block capitalize">my returns</a>
                            <a href="#" className="hover:text-primary transition block capitalize">my cancellations</a>
                            <a href="#" className="hover:text-primary transition block capitalize">my reviews</a>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <a href="#" className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                                Payment methods
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="far fa-credit-card"></i>
                                </span>
                            </a>
                            <a href="#" className="hover:text-primary transition block capitalize">Voucher</a>
                        </div>

                        <div className="pl-8 pt-4">
                            <Link to="wishlist" className={`relative medium capitalize text-gray-800 font-medium hover:text-primary transition block ${location.pathname=="/myaccount/wishlist" && "text-primary"}`}>
                                my wishlist
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="far fa-heart"></i>
                                </span>
                            </Link>
                        </div>

                        <div className="pl-8 pt-4">
                            <button onClick={logOut} className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                                logout
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fas fa-sign-out-alt"></i>
                                </span>
                            </button>
                        </div>

                    </div>

                </div>


                <Routes>
                    <Route path="" element={<ManageAccount />} />
                    <Route path="profileinfo" element={<ProfileInformation />} />
                    <Route path="wishlist" element={<WishList />} />
                </Routes>


            </div>
        </>

    );
};

export default Account;