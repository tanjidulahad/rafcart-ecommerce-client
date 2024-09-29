import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { clearTheCart } from '../../utilities/localStorage/localStorage';
import NavBar from '../shared/NavBar/NavBar';
import Topbar from '../shared/Topbar/Topbar';
import { useStoreState } from 'easy-peasy';

const Checkout = () => {
    const navigate=useNavigate();
    const {price}=useParams();
    const [disable, setDisable] = useState(true);
    const buttonRef = useRef();
    const checkboxRef = useRef();
    const enableOrDisableButton = () => {
        const isChecked = checkboxRef.current.checked;
        if (isChecked) {
                buttonRef.current.classList.remove("cursor-not-allowed");
                setDisable(false)
        }
        else {
                buttonRef.current.classList.add("cursor-not-allowed");
                setDisable(true);
        }
    }
    const handleOrderSubmit=()=>{
        clearTheCart();
        navigate('/ordercomplete');
    }
    const {totalQuantity}=useStoreState((state)=>state)

    return (
        <>
            <Topbar cartLength={totalQuantity}></Topbar>
            <NavBar></NavBar>
            <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">

                <div className="lg:col-span-8 border border-gray-200 px-4 py-4 rounded">
                    <form action="">
                        <h3 className="text-lg font-medium capitalize mb-4">
                            checkout
                        </h3>

                        <div className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-gray-600 mb-2 block">
                                        First Name <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box border border-gray-400 focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="text-gray-600 mb-2 block">
                                        Last Name <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box border border-gray-400 focus:outline-none focus:border-primary" />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Company Name
                                </label>
                                <input type="text" className="w-full input-box border border-gray-400 focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    County/Region <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="w-full input-box border border-gray-400 focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Street Address <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="w-full input-box border border-gray-400 focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Town/City <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="w-full input-box border border-gray-400 focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Zip Code <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="w-full input-box border border-gray-400 focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Phone Number <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="w-full input-box border border-gray-400 focus:outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Email Address <span className="text-primary">*</span>
                                </label>
                                <input type="text" className="w-full input-box border border-gray-400 focus:outline-none focus:border-primary" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
                    <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
                    <div className="flex justify-between border-b border-gray-200 mt-1">
                        <h4 className="text-gray-800 font-medium my-3 uppercase">Subtotal</h4>
                        <h4 className="text-gray-800 font-medium my-3 uppercase">${price}</h4>
                    </div>
                    <div className="flex justify-between border-b border-gray-200">
                        <h4 className="text-gray-800 font-medium my-3 uppercase">Shipping</h4>
                        <h4 className="text-gray-800 font-medium my-3 uppercase">Free</h4>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="text-gray-800 font-semibold my-3 uppercase">Total</h4>
                        <h4 className="text-gray-800 font-semibold my-3 uppercase">${price}</h4>
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                        <input ref={checkboxRef} onChange={enableOrDisableButton} type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">
                            Agree to our
                            <a href="#" class="text-primary">terms & conditions</a>
                        </label>
                    </div>


                    <button
                        disabled={disable}
                        ref={buttonRef}
                        onClick={handleOrderSubmit}
                        className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
         hover:text-primary transition text-sm w-full block text-center cursor-not-allowed">
                        Place order
                    </button>

                </div>

            </div>

        </>
    );
};

export default Checkout;