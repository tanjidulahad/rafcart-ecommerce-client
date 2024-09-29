import { useStoreActions } from 'easy-peasy';
import React from 'react';


const SingleWishListProduct = ({product,handleWishListProductDelete}) => {
    const {_id,productImg,productPrice,productTitle}=product;
    const {addToCart}=useStoreActions(actions=>actions)
    return (
        <div class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            <div class="w-28 flex-shrink-0">
                <img src={productImg} class="w-full" alt=""/>
            </div>
            <div class="md:w-1/3 w-full">
                <h2 class="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
                    {productTitle}
                </h2>
                <p class="text-gray-500 text-sm">Availability: <span class="text-green-600">In Stock</span></p>
            </div>
            <div class="">
                <p class="text-primary text-lg font-semibold">{productPrice}</p>
            </div>
            <a onClick={()=>addToCart(product)}
                class="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium cursor-pointer">
                Add to cart
            </a>
            <div onClick={()=>handleWishListProductDelete(_id)} class="text-gray-600 hover:text-primary cursor-pointer">
                <i class="fas fa-trash"></i>
            </div>
        </div>

    );
};

export default SingleWishListProduct;