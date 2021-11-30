import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Features/Features';
import Products from '../../components/Products/Products';
import NavBar from '../../components/shared/NavBar/NavBar';
import Topbar from '../../components/shared/Topbar/Topbar';
import { getStoredCart } from '../../utilities/localStorage/localStorage';

const Home = () => {
    const cart=getStoredCart();
    var size = Object.values(cart).reduce((a, b) => a + b,0);
    const [cartCount,setCartCount]=useState(size)
    return (
        <div>
            <Topbar cartLength={cartCount}></Topbar>
            <NavBar></NavBar>
            <Banner></Banner>
            <Features></Features>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;