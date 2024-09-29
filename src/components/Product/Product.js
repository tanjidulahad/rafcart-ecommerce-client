import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../context/useAuth/useAuth';
import { addToDb, getStoredCart } from '../../utilities/localStorage/localStorage';
import { useStoreActions } from 'easy-peasy';
// import product4 from '../../images/products/product4.jpg';
const Product = ({product,setCartCount}) => {
    const addToCart=useStoreActions((actions)=>actions.addToCart)
    const {_id,productTitle,productsubTitle,productImg,productPrice,rating,ratingGiven}=product;
    const {user}=useAuth();

    const addToWishList=()=>{
        if(!user.email){
            toast.error("Please Login First !", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        else{
        const data={email:user.email,productId:_id,productImg,productTitle,productPrice};
        fetch("https://rafcart-server.onrender.com/wishlists",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.matchedCount===1){
                toast.error("Already Added !", {
                    position: toast.POSITION.TOP_RIGHT
                  });                
            }
           else if(data.upsertedCount===1){
                toast.success("Added to Wishlist Successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                  });                
            }
        })
    }
    }

    // const handleAddToCart=id=>{
    //     addToDb(id);
    //     const cart=getStoredCart();
    //     var size = Object.values(cart).reduce((a, b) => a + b,0);
    //     setCartCount(size);
    // }


    return (        
        <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative ">
            <img src={productImg} alt='' className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-500">
                <a href="#" className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                    <i className="fas fa-search"></i>
                </a>
                <button onClick={addToWishList} className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                    <i className="fas fa-heart"></i>
                </button>
                
            </div>
            
        </div>
        <div className="pt-4 pb-3 px-4">
            <Link to={`/singleproductdetails/${_id}`}>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{productTitle}</h4>
                <p className="capitalize mb-2 text-sm text-gray-600">{productsubTitle}</p>
            </Link>
            <div className="mb-1 font-roboto">
                <p className="text-xl text-primary font-semibold">{productPrice}</p>
            </div>
            <div className="flex items-center">
                <div className=" text-sm text-yellow-400">
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                    />
                </div>
                <div className="text-xs text-gray-500 ml-3">({ratingGiven})</div>
                
            </div> 
                                 
        </div> 
        <button onClick={()=>addToCart(product)} className="uppercase bg-primary w-full block py-1 text-center text-white border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</button>
    </div>
    );
};

export default Product;