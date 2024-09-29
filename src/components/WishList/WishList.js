import React, { useEffect, useState } from 'react';
import useAuth from '../../context/useAuth/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SingleWishListProduct from '../SingleWishlistProduct/SingleWishListProduct';
import Spinner from '../Spinner/Spinner';
const WishList = () => {
    const [wishlistProduct, setWishListProduct] = useState([]);
    const { user } = useAuth();
    const email = user.email;
    useEffect(() => {
        fetch(`https://rafcart-server.onrender.com/wishlist/${email}`)
            .then(res => res.json())
            .then(data => setWishListProduct(data))
    }, [email]);

    const handleWishListProductDelete = (id) => {
        fetch(`https://rafcart-server.onrender.com/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Deleted Successfully !", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    let remainingWishlist = wishlistProduct.filter(product => product._id!==id);
                    setWishListProduct(remainingWishlist);
                }
            })
    }
    return (
        <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
            <ToastContainer />
            {wishlistProduct.length ?
                wishlistProduct.map(product => <SingleWishListProduct handleWishListProductDelete={handleWishListProductDelete} product={product}></SingleWishListProduct>)
                : <Spinner></Spinner>
            }

        </div>
    );
};

export default WishList;