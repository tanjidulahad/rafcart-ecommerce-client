import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { ToastContainer } from 'react-toastify';
import { getStoredCart } from '../../utilities/localStorage/localStorage';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';
const Products = () => {
    const cart=getStoredCart();
    var size = Object.values(cart).reduce((a, b) => a + b,0);
    const [cartCount,setCartCount]=useState(size)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rafcart-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.reverse().slice(0, 8)))
    }, [])

    

    return (
        <div className="container py-16">
            <ToastContainer /> 
            <h2 className="uppercase text-3xl font-medium text-gray-800 mb-6">top new arrival</h2>
            {products.length > 0 ? 
                <div className="grid md:grid-cols-4 gap-6">
                    {products.map(product => <Product product={product} setCartCount={setCartCount}></Product>)}
                </div>
                :<Spinner></Spinner>
            }
        </div>
    );
};

export default Products;