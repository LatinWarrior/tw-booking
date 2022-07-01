import React from 'react';
import { Link } from 'react-router-dom';

import {
    Avatar,
    Button,
    Card,
    Dropdown,
    Modal,
    Steps,
    Tabs,
    Theme,
    Toggle,
} from 'react-daisyui';

import { getHotelList_6 } from '../../data/hotels_6';

// flex flex-col items-center lg:flex-col lg:flex-wrap: nowrap; lg:items-start

export const HotelList = () => {
    let hotelList = getHotelList_6();
    return (
        <div className='grid grid-cols-1 mx-auto gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-6 lg:gap-2 lg:pl-4 lg:mb-4 bg-green-500 md:bg-red-500 lg:bg-yellow-500 w-full overflow-x-visible'>
            {hotelList.map((hotel) => (
                <div className='rounded shadow-lg bg-slate-200 mx-auto mt-2 w-80 lg:mt-4  lg:w-72'>
                    <dir className='px-8 py-4'>
                        <img
                            class='w-80 h-40'
                            src='/assets/valeriia-bugaiova-unsplash.jpg'
                            alt='Mountain'
                        />
                    </dir>
                    <div className='px-6 py-4'>
                        <div class='font-bold text-xl mb-2'>{hotel.name}</div>
                        <p className='text-gray-700 text-base'>
                            {hotel.shortDescription}
                        </p>
                    </div>
                    <div className='px-6 pt-4 pb-2'>
                        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            #photography
                        </span>
                        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            #travel
                        </span>
                        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            #winter
                        </span>
                    </div>
                </div>
                // <Card className='shadow-2xl m-4 w-80 bg-yellow-700'>
                // <Card className='rounded overflow-hidden shadow-lg w-80'>
                //     <figure>
                //         <img
                //             src={hotel.imageUrl}
                //             alt='Hotel URL'
                //             w-
                //             className='p-2'
                //         />
                //     </figure>
                //     <Card.Body>
                //         <Card.Title>
                //             <p>{hotel.name}</p>
                //         </Card.Title>
                //         <p>{hotel.shortDescription}</p>
                //         <Link
                //             to={`/hotels/${hotel.hotelId}`}
                //             key={hotel.hotelId}>
                //             {hotel.name}
                //         </Link>
                //     </Card.Body>
                // </Card>
            ))}
        </div>
    );
};
