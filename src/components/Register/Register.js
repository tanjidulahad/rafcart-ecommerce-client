import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import Topbar from '../shared/Topbar/Topbar';

const Register = () => {
    return (
        <>
            <Topbar></Topbar>
            <NavBar></NavBar>
            <div className="container py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium mb-1">
                        create an account
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm">
                        Register here if you don't have account
                    </p>
                    <form action="">
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Full Name <span className="text-primary">*</span>
                                </label>
                                <input type="email" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Email Address <span className="text-primary">*</span>
                                </label>
                                <input type="email" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="example@mail.com" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Password <span className="text-primary">*</span></label>
                                <input type="password" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="type password" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Confirm Password <span className="text-primary">*</span></label>
                                <input type="password" className="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" placeholder="confirm your password" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="submit"
                                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                                create account
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 flex justify-center relative">
                        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                        <div className="text-gray-600 uppercase px-3 bg-white relative z-10">
                            OR SIGNUP IN WITH
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                        <a href="#" className="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm">
                            Google
                        </a>
                    </div>

                    <p className="mt-4 text-gray-600 text-center">
                        Already have an account? <Link to="/login" className="text-primary">Login Now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;