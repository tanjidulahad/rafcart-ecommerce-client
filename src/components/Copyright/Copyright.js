import React from 'react';
import methods from '../../images/methods.png';

const Copyright = () => {
    return (
        <div className="bg-gray-800 py-4">
            <div className="container flex justify-between flex-wrap">
                <p className="text-white">© TANJIDUL AHAD - All Rights Reserved</p>
                <img src={methods} alt="" className="h-5" />
            </div>
            
        </div>
    );
};

export default Copyright;