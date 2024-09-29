import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import NavBar from '../../components/shared/NavBar/NavBar';
import Topbar from '../../components/shared/Topbar/Topbar';
import product1 from '../../images/products/product1.jpg';
import product2 from '../../images/products/product2.jpg';
import product3 from '../../images/products/product3.jpg';
import product4 from '../../images/products/product4.jpg';
import product5 from '../../images/products/product5.jpg';
import { useStoreActions, useStoreState } from 'easy-peasy';

const productImages=[product1,product2,product3,product4,product5]

const SingleProductDetails = () => {
    window.scrollTo({top:0});
    const {id}=useParams();
    const [quantity, setQuantity] = useState(1);
    const [product,setProduct]=useState({});
    const [activeImg,setActiveImg]=useState("")
    useEffect(()=>{
        fetch(`https://rafcart-server.onrender.com/product/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
            setActiveImg(data.productImg)

        })
    },[])

    const {totalQuantity}=useStoreState((state)=>state)
    const {addToCart}=useStoreActions(actions=>actions)
    return (
        <>
            <Topbar cartLength={totalQuantity}></Topbar>
            <NavBar></NavBar>
            <div className="container grid md:grid-cols-2 gap-6 mt-4 mb-12">
                <div>
                    <img src={activeImg} alt="" className="w-full"></img>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {
                            productImages?.map((image,idx)=>(
                                <img src={image} onClick={()=>setActiveImg(image)} className={`w-full cursor pointer border ${activeImg==image && "border border-primary"}`}></img>
                            ))
                        }

                        {/* <img src={product1} className="w-full cursor pointer border border-primary"></img>
                        <img src={product2} className="w-full cursor pointer border"></img>
                        <img src={product3} className="w-full cursor pointer border"></img>
                        <img src={product4} className="w-full cursor pointer border"></img>
                        <img src={product5} className="w-full cursor pointer border"></img> */}

                    </div>
                </div>

                <div>
                    <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2 text-gray-700">{product.productTitle}</h2>
                    <div className="flex items-center">
                        <div className=" text-sm text-yellow-400">
                            <Rating
                                initialRating={product.rating}
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                            />
                        </div>
                        <div className="text-xs text-gray-500 ml-3">({product.ratingGiven})</div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-green-600">{product.availability}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand: </span>
                            <span className="text-gray-600">{product.brand}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">{product.category}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">SKU: </span>
                            <span className="text-gray-600">{product.SKU}</span>
                        </p>
                    </div>
                    <div className="mb-1 mt-4 font-roboto">
                        <p className="text-2xl text-primary font-semibold">{product.productPrice}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-500">{product.shortDescription}</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-sm text-gray-800 mb-1 uppercase">Quantity</h3>
                        <div className="flex border border-gray-400 text-gray-600 divide-x divide-gray-300 w-max">
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer" onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}>-</div>
                            <div className="h-8 w-8 text-base flex items-center justify-center">{quantity}</div>
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</div>
                        </div>
                    </div>
                    <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                        <a onClick={()=>addToCart(product)} class="cursor-pointer bg-primary border border-primary text-white md:px-8 py-2 px-6 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                            <span class="mr-2"><i class="fas fa-shopping-bag"></i></span> Add to cart
                        </a>
                        <a href="#" class="border border-gray-300 text-gray-600 md:px-8 py-2 px-6 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm">
                            <span class="mr-2"><i class="far fa-heart"></i></span> Wishlist
                        </a>
                    </div>

                    <div class="flex space-x-3 mt-4">
                        <a href="#" class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div class="container pb-16">

                <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                    Product Details
                </h3>

                <div class="lg:w-4/5 xl:w-3/5 pt-6">
                    <div class="space-y-3 text-gray-600">
                        <p>
                            {product.description}
                        </p>
                    </div>

                    <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                        <tr>
                            <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                            <td class="py-2 px-4 border border-gray-300">{product.color}</td>
                        </tr>
                        <tr>
                            <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                            <td class="py-2 px-4 border border-gray-300">{product.material}</td>
                        </tr>
                        <tr>
                            <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                            <td class="py-2 px-4 border border-gray-300">{product.weight}</td>
                        </tr>
                    </table>

                </div>

            </div>
        </>
    );
};

export default SingleProductDetails;