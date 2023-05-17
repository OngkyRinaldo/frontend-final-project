import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className='md:shadow-lg md:rounded-lg w-full max-h-screen '>
            <div className='  h-full lg:flex'>
                <img
                    src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/etq_april-15_3efc11dc-c4c4-44b2-9beb-6af89e2b343d_2048x.jpg?v=1682752541'
                    alt='shoes.webp'
                    className='h-[575px] sm:h-full lg:h-screen lg:w-3/4 object-cover '
                />
                <div className='text-center lg:text-left  text-white lg:text-black p-5 -mt-36 sm:-mt-52 lg:mt-0 lg:py-36 lg:w-1/4 xl:w-1/5'>
                    <h2 className='text-base font-medium'>
                        LT 01 Essence White
                    </h2>

                    <p className='text-2xl font-light sm:py-2 md:tracking-widest'>
                        Our style never
                        <span className='block'> changes. It evolves. </span>
                    </p>
                    <p className='hidden md:block md:py-2 text-base md:tracking-widest'>
                        A thick layer of style and
                        <span className='lg:block'>
                            quality, a thin layer of logos.
                        </span>
                    </p>
                    <Link
                        to='/products'
                        className='w-fit border-b-2 border-white lg:border-black  hover:border-none md:tracking-widest'
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    );
};
