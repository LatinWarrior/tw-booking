import React from 'react';
import { Carousel, Button } from 'react-daisyui';
// import CustomCarousel from './../../components/custom-carousel/CustomCarousel';

export const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                voluptate earum quidem ullam nam! Totam expedita eum asperiores
                quos obcaecati? Consequuntur ipsum architecto officiis, alias
                unde possimus nulla quam, voluptatem accusantium tempore
                recusandae rem optio odit porro nemo maxime ab, nihil inventore
                illum temporibus atque nesciunt fugiat. Fugit, minus vitae. Sunt
                ratione recusandae magni facere dolores ad fuga modi praesentium
                libero perferendis quam nemo velit officiis repellendus sint
                labore vero quas dolorem atque ipsa distinctio, doloremque ullam
                maxime! Alias fugit nam temporibus quae impedit exercitationem
                molestiae, assumenda doloribus cumque sequi deleniti, dolore,
                tempore sapiente adipisci. Eum provident explicabo alias earum?
            </p>
            <div className='mt-12 mx-auto h-[10rem] w-[30rem] lg:min-w-[50%] max-h-72 min-h-72'>
                <Carousel display='sequential' className='rounded-box'>
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_8.jpg'
                        alt='Construction 8'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_2.jpg'
                        alt='Construction 2'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_3.jpg'
                        alt='Construction 3'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_4.jpg'
                        alt='Construction 4'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_7.jpg'
                        alt='Construction 7'
                    />
                    <Carousel.Item
                        className='w-full h-full'
                        src='/assets/unsplash_8.jpg'
                        alt='Construction 8'
                    />
                </Carousel>
            </div>
        </div>
    );
};
