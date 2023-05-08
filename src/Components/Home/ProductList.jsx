import { Carousel } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const ProductList = () => {
    return (
        <>
            <section className=' shadow-lg rounded-lg container max-h-screen mx-auto mt-10 sm:mt-16 md:mt-48 lg:mt-16 px-4'>
                <div className='px-4'>
                    <h2 className=' text-2xl font-semibold '>Product List</h2>
                </div>

                <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
                    <Carousel>
                        <img
                            src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
                            alt='...'
                        />
                        <img
                            src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
                            alt='...'
                        />
                        <img
                            src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
                            alt='...'
                        />
                        <img
                            src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
                            alt='...'
                        />
                        <img
                            src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
                            alt='...'
                        />
                    </Carousel>
                </div>
                <div className='text-end cursor-pointer px-4'>
                    <Link
                        to='/'
                        className='block text-lg font-bold hover:text-slate-700 hover:underline mt-5'
                    >
                        More Products
                    </Link>
                </div>
            </section>
        </>
    );
};
