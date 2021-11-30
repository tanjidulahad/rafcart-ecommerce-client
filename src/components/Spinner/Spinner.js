import React from 'react';

const Spinner = () => {
    return (
        <div class="flex justify-center items-center">
            <div
                class="
                animate-spin
                        rounded-full
                        h-32
                        w-32
                        border-t-2 border-b-2 border-primary
                        
                        "
            ></div>
        </div>
    );
};

export default Spinner;