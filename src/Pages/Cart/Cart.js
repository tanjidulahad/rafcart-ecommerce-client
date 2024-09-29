import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import product9 from '../../images/products/product9.jpg';
import product10 from '../../images/products/product10.jpg';
import Topbar from '../../components/shared/Topbar/Topbar';
import NavBar from '../../components/shared/NavBar/NavBar';
import { getStoredCart, removeFromDb } from '../../utilities/localStorage/localStorage';
import SingleCart from '../../components/SingleCart/SingleCart';
import useCart from '../../hooks/useCart';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
const Cart = () => {
    // const carts = getStoredCart();
    // var size = Object.values(carts).reduce((a, b) => a + b, 0);
    // const [cartCount, setCartCount] = useState(size)
    // const [cart, setCart] = useCart();
    const handleCartDelete = (id) => {
        //     removeFromDb(id);
        //     const carts = cart.filter(cart=>cart._id!==id);
        //     setCart(carts);
        //     const storedcart = getStoredCart();
        //     var size = Object.values(storedcart).reduce((a, b) => a + b, 0);
        //     setCartCount(size);
        //     toast.success("Item Removed From Cart!", {
        //         position: toast.POSITION.TOP_RIGHT
        //       });
    }


    const cartCount = useStoreState((state) => state.totalQuantity)
    const grandTotal = useStoreState((state) => state.grandTotal)
    const cart = useStoreState((state) => state.cart)

    return (
        <>
            <Topbar cartLength={cartCount}></Topbar>
            <NavBar></NavBar>
            <ToastContainer></ToastContainer>
            {/* < !--cart wrapper-- > */}
            <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
                {/* <!-- product cart --> */}
                <div class="xl:col-span-9 lg:col-span-8">
                    {/* <!-- cart title --> */}
                    <div class="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
                        <p class="text-gray-600 text-center">Product</p>
                        <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24">Quantity</p>
                        <p class="text-gray-600 text-center">Total</p>
                    </div>
                    {/* <!-- cart title end --> */}

                    {/* <!-- shipping carts --> */}
                    {cartCount ? <div class="space-y-4">
                        {/* <!-- single cart --> */}
                        {cart.map(cartitem => <SingleCart handleCartDelete={handleCartDelete} cartItem={cartitem}></SingleCart>)}
                        {/* <!-- single cart end --> */}
                    </div>
                        : <>
                            {/* <Spinner></Spinner> */}
                            <p className="text-center mt-4 font-medium text-xl text-red-800">Your Cart is Empty</p>
                            <div className='text-center mt-4'>
                                <Link to={`/shop`} class="bg-primary border border-primary text-white px-4 py-2 font-medium rounded-md hover:bg-transparent hover:text-primary transition text-sm text-center">
                                    Go to Shop
                                </Link>

                            </div>
                        </>
                    }
                    {/* <!-- shipping carts end --> */}
                </div>
                {/* <!-- product cart end --> */}
                {/* <!-- order summary --> */}
                <div class="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
                    <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
                    <div class="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                        <div class="flex justify-between font-medium">
                            <p>Subtotal</p>
                            <p id="subtotal">${grandTotal}</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Delivery</p>
                            <p>Free</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Tax</p>
                            <p>Free</p>
                        </div>
                    </div>
                    <div class="flex justify-between my-3 text-gray-800 font-semibold uppercase">
                        <h4>Total</h4>
                        <h4 id="totalprice">${grandTotal}</h4>
                    </div>

                    {/* <!-- searchbar --> */}
                    <div class="flex mb-5">
                        <input type="text"
                            class="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
                            placeholder="Coupon" />
                        <button type="submit"
                            class="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto">
                            Apply
                        </button>
                    </div>
                    {/* <!-- searchbar end --> */}

                    {/* <!-- checkout --> */}
                    <Link to={`/checkout/${grandTotal}`} class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
                 hover:text-primary transition text-sm w-full block text-center">
                        Process to checkout
                    </Link>
                    {/* <!-- checkout end --> */}
                </div>
                {/* <!-- order summary end --> */}
            </div>
        </>
    );
};

export default Cart;