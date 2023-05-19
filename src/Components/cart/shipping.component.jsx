import { Link, useParams } from 'react-router-dom';
import Products from '../../Products.json';

export const Shipping = () => {
    const { id } = useParams();
    return (
        <section>
            <div className='container mx-auto  px-3 mt-3 mb-3'>
                <h2 className='mb-5 text-xl font-semibold pb-1 lg:pb-5'>
                    Shipping Confirmation
                </h2>
                <div className='flex  '>
                    <div className='w-full lg:w-3/5  '>
                        <form className='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 md:gap-2'>
                            <div className='mb-6'>
                                <label
                                    htmlFor='firstName'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    First name
                                </label>
                                <input
                                    type='text'
                                    id='firstName'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    placeholder='First name'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='lastName'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Last name
                                </label>
                                <input
                                    type='text'
                                    id='lastName'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    placeholder='Last name'
                                    required
                                />
                            </div>

                            <div className='mb-6'>
                                <label
                                    htmlFor='email'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Email
                                </label>
                                <input
                                    type='text'
                                    id='email'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    placeholder='example@mail.com'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='Phone'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Phone
                                </label>
                                <input
                                    type='text'
                                    id='contact'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='address'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Address
                                </label>
                                <input
                                    type='text'
                                    id='address'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='postal-code'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Postal Code
                                </label>
                                <input
                                    type='postal-code'
                                    id='postal-code'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    required
                                />
                            </div>

                            <div className='col-span-2 border-t border-slate-300'></div>

                            <div className='md:flex-row lg:flex-row md:flex justify-start md:justify-between mb-6 sm:grid sm:grid-cols-1 sm:gap-1'>
                                <div className='col-span-1'>
                                    <Link
                                        to={'/cart'}
                                        className='mb-6 text-sm hover:underline'
                                    >
                                        &#8592; Return to Cart
                                    </Link>
                                </div>
                            </div>
                            <div className='md:mt-0 lg:md-0 mt-3 mb-6'>
                                <button
                                    type='submit'
                                    className='text-white w-full rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-600 font-normal text-sm px-16 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 float-left md:float-right'
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='hidden lg:inline lg:w-2/5 lg:ml-5 '>
                        <div className='flex py-3 justify-center lg:border-b-4 lg:border-black'>
                            <img
                                src={Products[id - 1].image}
                                alt={Products[id - 1].title}
                                className='w-1/4 lg:h-36 object-cover'
                            />
                            <div className=' w-3/5 ml-2'>
                                <h3 className='block font-semibold text-slate-800 text-lg mb-1 truncate'>
                                    {Products[id - 1].title}
                                </h3>
                            </div>
                            <div className='   text-end font-semibold text-base'>
                                <p className='block'>
                                    {Products[id - 1].price}
                                </p>

                                <Link to='#' className='underline '>
                                    Delete
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-between py-2'>
                            <input
                                type='text'
                                className='w-3/6  rounded-sm '
                                placeholder='Gift card or discount code'
                            />
                            <button className='  py-2 px-2 bg-black text-white w-2/5 rounded-md'>
                                Apply
                            </button>
                        </div>
                        <div className='flex justify-between border-t-2 mt-3 py-3'>
                            <p>Subtotal</p>
                            <p> {Products[id - 1].price}</p>
                        </div>
                        <div className='flex justify-between border-t-2 mt-3 py-3'>
                            <p>Subtotal</p>
                            <p>Calculated at next step</p>
                        </div>
                        <div className='flex justify-between border-t-2 mt-3 py-3'>
                            <p>total : </p>
                            <p> {Products[id - 1].price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
