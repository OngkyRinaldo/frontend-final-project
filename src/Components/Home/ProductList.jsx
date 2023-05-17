import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const ProductList = () => {
    return (
        <>
            <section className=' shadow-lg rounded-lg container max-h-screen mx-auto mt-10 sm:mt-16 md:mt-48 lg:mt-16 px-4'>
                <div className='px-4'>
                    <h2 className=' text-2xl font-semibold text-center  '>
                        Product List
                    </h2>
                </div>

                <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 mt-5'>
                    <Carousel>
                        <Link to='#'>
                            <img
                                src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/etq_april-15_3efc11dc-c4c4-44b2-9beb-6af89e2b343d_2048x.jpg?v=1682752541'
                                alt='...'
                                className='w-full'
                            />
                        </Link>
                        <Link to='#'>
                            <img
                                src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ-Januari23-0166crob_1080x.jpg?v=1678371129'
                                alt='...'
                                className='w-full'
                            />
                        </Link>

                        <Link to='#'>
                            <img
                                src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Spain_55_3840x.jpg?v=1682368636'
                                alt='...'
                                className='w-full'
                            />
                        </Link>

                        <Link to='#'>
                            <img
                                src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ-Wagener-0834_v1LR_3840x.jpg?v=1679131034'
                                alt='...'
                                className='w-full'
                            />
                        </Link>

                        <Link to='#'>
                            <img
                                src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ-Wagener-0520crob_74a079aa-6873-4499-8f2c-5bb528d15903_3840x.jpg?v=1680187221'
                                alt='...'
                                className='w-full '
                            />
                        </Link>
                    </Carousel>
                </div>
                <div className='text-end cursor-pointer px-4'>
                    <Link
                        to='/products'
                        className='block text-lg font-bold hover:text-slate-700 hover:underline mt-5'
                    >
                        More Products
                    </Link>
                </div>
            </section>
        </>
    );
};
