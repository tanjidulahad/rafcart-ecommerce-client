import React from 'react';
import logo from '../../images/logo.svg';
import Copyright from '../Copyright/Copyright';
const Footer = () => {
    return (
        <>
        <div className="bg-white pt-16 pb-12 border-t border-gray-100">
            <div className="container grid lg:grid-cols-3">
                <div className="lg:col-span-1 space-y-8">
                    <img src={logo} alt="" className="w-30" />
                    <p className="text-gray-500">Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or web designs the passage.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-2 grid lg:grid-cols-2 gap-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Marketing</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Analytics</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Commerce</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Insights</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Pricing</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Documentation</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Commerce</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Insights</a>
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Marketing</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Analytics</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Commerce</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Insights</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                            <div className="mt-4 space-y-4">
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Pricing</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Documentation</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Commerce</a>
                                <a href="#" className="text-gray-500 hover:text-gray-800 block">Insights</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <Copyright/>
        </>
    );
};

export default Footer;