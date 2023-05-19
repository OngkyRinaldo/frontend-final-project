import { Link, useNavigate, useParams } from 'react-router-dom';
import Products from '../../Products.json';

export const Cart = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <section
            id='checkout'
            className='container max-h-full w-full min-w-full px-4 lg:px-12 mb-3 mt-2 lg:mt-10'
        >
            <h1 className='px-4 mb-3 text-lg font-bold text-gray-900 dark:text-white hidden lg:flex'>
                Your bag
            </h1>

            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-1 hidden lg:block'>
                    <div className='px-4 mx-auto pb-2 mb-2 lg:mb-6'>
                        <Link
                            to={'/'}
                            className='lg:mb-6 text-base hover:underline'
                        >
                            &#8592; Keep shopping
                        </Link>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='relative overflow-x-auto  mb-12'>
                        <table
                            id='table-guide-size'
                            className='w-full text-sm text-left text-gray-500 dark:text-gray-400'
                        >
                            <thead className='text-xs border-b-4 border-slate-800 text-gray-900 uppercase dark:text-gray-400'>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-1 py-4 lg:w-3/4'
                                    >
                                        Product
                                    </th>

                                    <th
                                        scope='col'
                                        className='hidden md:block lg:py-4 lg:text-end '
                                    >
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-slate-800'>
                                <tr className='bg-white dark:bg-gray-800 border-b border-slate-300 hover:bg-slate-200'>
                                    <td
                                        scope='row'
                                        className='px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                    >
                                        <div className='flex py-3'>
                                            <img
                                                src={Products[id - 1].image}
                                                alt={Products[id - 1].title}
                                                className='w-1/4 h-20 lg:h-36 object-cover'
                                            />
                                            <div className=' w-3/5 ml-5'>
                                                <h3 className='block font-semibold  text-slate-800 text-lg mb-1 truncate'>
                                                    {Products[id - 1].title}
                                                </h3>
                                                <span className='block text-slate-600 font-normal mb-1 text-sm '>
                                                    {Products[id - 1].material}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <th className=' text-end font-semibold text-base '>
                                        <p className='block lg:mb-16'>
                                            {Products[id - 1].price}
                                        </p>

                                        <Link to='#' className='underline '>
                                            Delete
                                        </Link>
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                        <div className='flex items-center justify-between md:justify-end  my-4'>
                            <h3 className='md:mr-20 font-bold  text-lg'>
                                Subtotal
                            </h3>
                            <span className='ml-20 text-lg font-semibold'>
                                {Products[id - 1].price}
                            </span>
                        </div>
                        <div className='flex items-center border-b  border-slate-300 text-center justify-center md:justify-end'>
                            <button
                                onClick={() =>
                                    navigate(`/shipping/${Products[id - 1].id}`)
                                }
                                className=' bg-slate-900 text-white rounded-lg font-semibold text-base  py-3 w-full md:w-1/3 md:px-28 hover:opacity-75'
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
