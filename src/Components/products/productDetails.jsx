import { Link, useParams } from 'react-router-dom';
import Products from '../../Products.json';

export const ProductDetail = () => {
    const { id } = useParams();
    return (
        <main className='container w-screen mx-0 max-h-full min-h-full min-w-full mb-10'>
            <div className='grid grid-cols-1 md:gap-4 md:grid-cols-3 px-5 md:mt-5'>
                <div className='col-span-2 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                className='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src={Products[id - 1].image}
                                alt={Products[id - 1].title}
                            />
                        </div>
                        <div className='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                className='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
                                alt=''
                            />
                        </div>
                        <div className='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                className='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
                                alt=''
                            />
                        </div>
                        <div className='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                className='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='m-0.5 '>
                        <h2 className='font-bold text-slate-900 text-xl'>
                            {Products[id - 1].title}
                        </h2>
                        <span className='font-medium text-slate-500 text-base'>
                            {Products[id - 1].material}
                        </span>
                        <div className='flex items-center justify-between py-2'>
                            <h3 className='font-bold text-slate-400 text-lg'>
                                <span className='text-slate-900'>
                                    {Products[id - 1].price}
                                </span>
                            </h3>
                        </div>

                        <div className='flex items-center justify-center py-2'>
                            <button className='rounded-lg bg-slate-900 w-full py-3 text-white font-bold text-base hover:opacity-75'>
                                Add to bag
                            </button>
                        </div>
                        <div className='flex item-center justify-center'>
                            <Link
                                to='/sizeGuide'
                                className='text-slate-500 font-semibold text-sm border-b border-slate-800 hover:border-none'
                            >
                                How to find my ETQ
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <h2 className='font-medium text-lg text-slate-800'>
                                Description
                            </h2>
                            <p className='text-sm text-justify leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eius quaerat nobis blanditiis.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, reprehenderit. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Inventore laboriosam veniam laborum optio?
                            </p>
                            <h2 className='font-medium mt-2 text-base text-slate-800'>
                                Specification
                            </h2>
                            <p className='text-sm text-justify leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eius quaerat nobis blanditiis.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, reprehenderit. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
