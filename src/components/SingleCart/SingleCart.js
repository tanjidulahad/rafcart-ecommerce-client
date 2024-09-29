import React from 'react';
import product9 from '../../images/products/product9.jpg';
import { action, useStoreActions } from 'easy-peasy';

const SingleCart = ({cartItem,handleCartDelete}) => {

    const {_id,productTitle,productImg,productPrice,quantity}=cartItem;
    const {addToCart,removeFromCart,deleteFromCart}=useStoreActions(actions=>actions)
    const polishedPrice=parseInt(productPrice.replace("$", ""));

    const decreaseQuantity=(e)=>{
        // const next=e.target.nextSibling;
        // if(next.innerText>1){
        //     next.innerText=parseInt(next.innerText)-1
        // }
        if(quantity==1) {
            e.stopPropagation()
            e.preventDefault()
        }else{
            
            removeFromCart(cartItem)
        }
    }
    const increseQuantity=(e)=>{
        // const previous=e.target.previousSibling;
        // previous.innerText=parseInt(previous.innerText)+1
        addToCart(cartItem)
    }

    return (
        <div
            class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            {/* <!-- cart image --> */}
            <div class="w-32 flex-shrink-0">
                <img src={productImg} class="w-full" alt="" />
            </div>
            {/* <!-- cart image end --> */}
            {/* <!-- cart content --> */}
            <div class="md:w-1/3 w-full">
                <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                    {productTitle}
                </h2>
                <p class="text-primary font-semibold">{productPrice}</p>
            </div>
            {/* <!-- cart content end --> */}
            {/* <!-- cart quantity --> */}
            <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                <div class={`h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none ${quantity==1 && "cursor-not-allowed bg-gray-100"}`} onClick={decreaseQuantity} >-</div>
                <div class="h-8 w-10 flex items-center justify-center">{quantity}</div>
                <div class={`h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none`} onClick={increseQuantity}>+</div>
            </div>
            {/* <!-- cart quantity end --> */}
            <div class="ml-auto md:ml-0">
                <p class="text-primary text-lg font-semibold">${parseInt(quantity*polishedPrice)}</p>
            </div>
            <div onClick={()=>deleteFromCart(_id)} class="text-gray-600 hover:text-primary cursor-pointer">
                <i class="fas fa-trash"></i>
            </div>
        </div>
    );
};

export default SingleCart;