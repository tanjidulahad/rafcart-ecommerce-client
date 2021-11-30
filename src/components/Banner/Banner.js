import React from 'react';
import bg from '../../images/banner-bg.jpg';

const Banner = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat py-36" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container">
                <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4 capitalize">best collection for<br /> home decoration</h1>
                <p>There are many variations of passages of Lorem Ipsum available<br/> but the majority have suffered alteration in some form, by inject.</p>
                <div className="mt-12">
                    <a href='#' className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition">Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;