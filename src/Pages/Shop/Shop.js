import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Product from '../../components/Product/Product';
import NavBar from '../../components/shared/NavBar/NavBar';
import Topbar from '../../components/shared/Topbar/Topbar';
import Spinner from '../../components/Spinner/Spinner';
import product1 from '../../images/products/product1.jpg';
import product2 from '../../images/products/product2.jpg';
import product3 from '../../images/products/product3.jpg';
import product4 from '../../images/products/product4.jpg';
import { getStoredCart } from '../../utilities/localStorage/localStorage';
import { useStoreState } from 'easy-peasy';

const Shop = () => {
    // const cart=getStoredCart();
    // var size = Object.values(cart).reduce((a, b) => a + b,0);
    // const [cartCount,setCartCount]=useState(size)
    const [allproducts, setallProducts] = useState([]);
    const [filteredProduct,setFilteredProduct]=useState([]);
    const [filterBy, setFilterBy] = useState([]);
    useEffect(() => {
        fetch('https://rafcart-server.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                setallProducts(data);
                setFilteredProduct(data);
            })
    }, [])

    const filterProduct = (e) => {
        if (e.target.checked) {
            const filterName = [...filterBy, e.target.name]
            setFilterBy(filterName);
        }
        else {
            const remove = filterBy.filter(name => name !== e.target.name);
            setFilterBy(remove);
        }

    }

    useEffect(() => {
        if (filterBy.length > 0) {
            const filteredResult = allproducts.filter(product => filterBy.includes(product.category));
            setFilteredProduct(filteredResult);            
        }
        else{setFilteredProduct(allproducts)}
    }, [filterBy])

    const cartCount=useStoreState((state)=>state.totalQuantity)


    return (
        <>
            <Topbar cartLength={cartCount}></Topbar>
            <NavBar></NavBar>
            <ToastContainer />
            <div className="container py-4 flex items-center gap-3">
                <Link to='/' className="text-primary text-base">
                    <i className="fas fa-home"></i>
                </Link>
                <span className="text-gray-400 text-sm">
                    <i className="fas fa-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">Shop</p>
            </div>
            <div className="container grid md:grid-cols-4 gap-6 pt-4 pb-16">
                <div className="col-span-1 md:block hidden bg-white px-4 pb-6 shadow rounded overflow-hidden">
                    <div className="divide-y divide-gray-200 space-y-5">
                        {/* category filter */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">categories</h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input onChange={filterProduct} className="text-primary" type="checkbox" id="cat-1" name="bedroom"></input>
                                    <label for="cat-1" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                    <div className=" ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input onChange={filterProduct} className="text-primary" type="checkbox" id="cat-2" name="sofa"></input>
                                    <label for="cat-2" className="text-gray-600 ml-3 cursor-pointer">Sofa</label>
                                    <div className=" ml-auto text-gray-600 text-sm">(05)</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input onChange={filterProduct} className="text-primary" type="checkbox" id="cat-3" name="office"></input>
                                    <label for="cat-3" className="text-gray-600 ml-3 cursor-pointer">Office</label>
                                    <div className=" ml-auto text-gray-600 text-sm">(09)</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input onChange={filterProduct} className="text-primary" type="checkbox" id="cat-4" name="outdoor"></input>
                                    <label for="cat-4" className="text-gray-600 ml-3 cursor-pointer">Outdoor</label>
                                    <div className=" ml-auto text-gray-600 text-sm">(19)</div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">brands</h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input className="text-primary" type="checkbox" id="addidas"></input>
                                    <label for="addidas" className="text-gray-600 ml-3 cursor-pointer">Adidas</label>

                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input className="text-primary" type="checkbox" id="nike"></input>
                                    <label for="nike" className="text-gray-600 ml-3 cursor-pointer">Nike</label>

                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input className="text-primary" type="checkbox" id="easy"></input>
                                    <label for="easy" className="text-gray-600 ml-3 cursor-pointer">Easy</label>

                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input className="text-primary" type="checkbox" id="arong"></input>
                                    <label for="arong" className="text-gray-600 ml-3 cursor-pointer">Arong</label>

                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">price</h3>
                            <div className="mt-4 flex items-center">
                                <input className="w-full border-gray-500 border focus:border-primary focus:outline-none text-sm px-3 py-1 text-gray-600 shadow-sm rounded" placeholder="min"></input>
                                <span className="mx-3 text-gray-500">-</span>
                                <input className="w-full border-gray-500 border focus:border-primary focus:outline-none text-sm px-3 py-1 text-gray-600 shadow-sm rounded" placeholder="max"></input>

                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
                            <div className="flex items-center gap-2">
                                <div className="size-selector">
                                    <input name="size" type="radio" id="size-xs" className="hidden"></input>
                                    <label for="size-xs" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow">XS</label>
                                </div>
                                <div className="size-selector">
                                    <input name="size" type="radio" id="size-s" className="hidden"></input>
                                    <label for="size-s" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow">S</label>
                                </div>
                                <div className="size-selector">
                                    <input name="size" type="radio" id="size-m" className="hidden"></input>
                                    <label for="size-m" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow">M</label>
                                </div>
                                <div className="size-selector">
                                    <input name="size" type="radio" id="size-l" className="hidden"></input>
                                    <label for="size-l" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow">L</label>
                                </div>
                                <div className="size-selector">
                                    <input name="size" type="radio" id="size-xl" className="hidden"></input>
                                    <label for="size-xl" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow">XL</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    {allproducts.length > 0 ?
                        <div className="grid md:grid-cols-3 gap-6">
                            {filteredProduct.map(product => <Product product={product} ></Product>)}
                        </div>
                        : <Spinner></Spinner>
                    }
                    
                </div>

            </div>
        </>
    );
};

export default Shop;