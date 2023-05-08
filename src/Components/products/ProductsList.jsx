import React from 'react';
import { Link } from 'react-router-dom';

export const ProductsList = () => {
    return (
        <div className='grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4 mt-5'>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Link href='#'>
                    <img
                        className='rounded-t-lg h-52 object-cover sm:w-full md:rounded-lg'
                        src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
                        alt=''
                    />
                </Link>
                <div className='p-1 '>
                    <Link href='#'>
                        <h5 className='mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
                            LT 01 Premium Nappa White
                        </h5>
                    </Link>

                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        $249
                    </p>
                </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Link href='#'>
                    <img
                        className='rounded-t-lg h-52 object-cover sm:w-full md:rounded-lg'
                        src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
                        alt=''
                    />
                </Link>
                <div className='p-1 '>
                    <Link href='#'>
                        <h5 className='mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
                            LT 01 Premium Nappa White
                        </h5>
                    </Link>

                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        $249
                    </p>
                </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Link href='#'>
                    <img
                        className='rounded-t-lg h-52 object-cover sm:w-full md:rounded-lg'
                        src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
                        alt=''
                    />
                </Link>
                <div className='p-1 '>
                    <Link href='#'>
                        <h5 className='mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
                            LT 01 Premium Nappa White
                        </h5>
                    </Link>

                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        $249
                    </p>
                </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <Link href='#'>
                    <img
                        className='rounded-t-lg h-52 object-cover sm:w-full md:rounded-lg'
                        src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
                        alt=''
                    />
                </Link>
                <div className='p-1 '>
                    <Link href='#'>
                        <h5 className='mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
                            LT 01 Premium Nappa White
                        </h5>
                    </Link>

                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        $249
                    </p>
                </div>
            </div>
        </div>
    );
};
