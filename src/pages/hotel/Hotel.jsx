import React from 'react';
import { useParams } from 'react-router-dom';

export const Hotel = () => {
    let params = useParams();

    return (
        <div className='flex flex-col'>
            <div className='mt-4'>Left</div>
            <div>
                Hotel Id: {params.HotelId}
                <button className='col-span-6'>Click Me</button>
            </div>
        </div>
    );
};
