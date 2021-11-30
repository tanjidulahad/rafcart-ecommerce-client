import React from 'react';
import van from '../../images/icons/delivery-van.svg';
import moneyBack from '../../images/icons/money-back.svg';
import serviceHour from '../../images/icons/service-hours.svg';
const Features = () => {
    return (
        <div className="container py-16">
            <div className="lg:w-10/12 grid md:grid-cols-3 gap-6 justify-center mx-auto ">
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <img className="w-12 h-12 object-contained" src={van} alt=''/>
                    <div>
                        <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
                        <p className='text-gray-500 text-sm'>order over $200</p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <img className="w-12 h-12 object-contained" src={moneyBack} alt=''/>
                    <div>
                        <h4 className="font-medium capitalize text-lg">Money Returns</h4>
                        <p className='text-gray-500 text-sm'>30 Days money return</p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <img className="w-12 h-12 object-contain" src={serviceHour} alt=''/>
                    <div>
                        <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                        <p className='text-gray-500 text-sm'>Customer support</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Features;