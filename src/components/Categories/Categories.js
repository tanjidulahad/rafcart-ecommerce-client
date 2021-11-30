import React from 'react';
import category1 from '../../images/category/category-1.jpg';
import category2 from '../../images/category/category-2.jpg';
import category3 from '../../images/category/category-3.jpg';
import category4 from '../../images/category/category-4.jpg';
import category5 from '../../images/category/category-5.jpg';
import category6 from '../../images/category/category-6.jpg';
const Categories = () => {
    return (
        <div className="container py-16">
            <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid md:grid-cols-3 gap-3">
                <div className="relative rounded-sm overflow-hidden">
                    <img src={category1} alt='' />
                    <a href='#' className="capitalize absolute inset-0 flex items-center justify-center text-xl text-white font-roboto font-medium bg-black bg-opacity-40 hover:bg-opacity-50 transition">bedroom</a>
                </div>
                <div className="relative rounded-sm overflow-hidden">
                    <img src={category2} alt='' />
                    <a href='#' className="capitalize absolute inset-0 flex items-center justify-center text-xl text-white font-roboto font-medium bg-black bg-opacity-40 hover:bg-opacity-50 transition">mattress</a>
                </div>
                <div className="relative rounded-sm overflow-hidden">
                    <img src={category3} alt='' />
                    <a href='#' className="capitalize absolute inset-0 flex items-center justify-center text-xl text-white font-roboto font-medium bg-black bg-opacity-40 hover:bg-opacity-50 transition">office</a>
                </div>
                <div className="relative rounded-sm overflow-hidden">
                    <img src={category4} alt='' />
                    <a href='#' className="capitalize absolute inset-0 flex items-center justify-center text-xl text-white font-roboto font-medium bg-black bg-opacity-40 hover:bg-opacity-50 transition">outdoor</a>
                </div>
                <div className="relative rounded-sm overflow-hidden">
                    <img src={category5} alt='' />
                    <a href='#' className="capitalize absolute inset-0 flex items-center justify-center text-xl text-white font-roboto font-medium bg-black bg-opacity-40 hover:bg-opacity-50 transition">Lounges & Sofas</a>
                </div>
                <div className="relative rounded-sm overflow-hidden">
                    <img src={category6} alt='' />
                    <a href='#' className="capitalize absolute inset-0 flex items-center justify-center text-xl text-white font-roboto font-medium bg-black bg-opacity-40 hover:bg-opacity-50 transition">living & dining</a>
                </div>

            </div>
            
        </div>
    );
};

export default Categories;