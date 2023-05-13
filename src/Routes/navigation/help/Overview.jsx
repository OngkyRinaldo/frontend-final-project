import { Dropdown } from 'flowbite-react';
import overview from '../../../assets/img/Help/overview.webp';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';

export const Overview = () => {
    return (
        <>
            <div id='hero-overview' className='mb-3 md:mb-5'>
                <img src={overview}
                    alt='ask-anything'
                    className='h-64 md:h-80 w-screen object-cover' />
            </div>
            <section id='help' className='container max-h-full mx-auto mb-3'>
                <h1 className='px-4 mb-3 text-lg font-bold text-gray-900 dark:text-white'>
                    Ask us anything
                </h1>

                <div className='lg:grid lg:grid-cols-4'>
                    <div className='col-span-1'>
                        <div className='px-4 mx-auto pb-2 mb-6'>
                            <h2 className='mb-3 text-md font-bold text-gray-900 dark:text-white'>
                                Help topics
                            </h2>
                            <p className='text-sm font-base'>
                                Can't find answer you are looking for? You can
                                send an e-mail to
                                <Link to={'#'} className='underline'>
                                    service@fsd-kelompok9.com
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        {/* accordion start */}
                        <div className='px-4 mx-auto mb-6'>
                            {/* size guide */}
                            <div
                                id='accordion-collapse'
                                data-accordion='collapse'  >
                                <h2 id='accordion-collapse-heading-1'>
                                    <button
                                        type='button'
                                        className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-medium text-right text-slate-800'
                                        data-accordion-target='#accordion-collapse-body-1'
                                        aria-expanded='false'
                                        aria-controls='accordion-collapse-body-1' >
                                        <span>Size guide</span>
                                        <svg
                                            data-accordion-icon
                                            className='w-6 h-6 rotate-180 shrink-0'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg' >
                                            <path fill-rule='evenodd'
                                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                clip-rule='evenodd'></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id='accordion-collapse-body-1'
                                    className='hidden'
                                    aria-labelledby='accordion-collapse-heading-1'  >
                                    <div className='p-2'>
                                        <p className='mb-2 text-slate-800 dark:text-white'>
                                            Find out what size you need in our
                                            size guides.
                                        </p>
                                        <Link to={'sizeGuide'}
                                            className='underline' >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* shipping information */}
                            <div
                                id='accordion-collapse'
                                data-accordion='collapse'   >
                                <h2 id='accordion-collapse-heading-2'>
                                    <button
                                        type='button'
                                        className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-medium text-right text-slate-800'
                                        data-accordion-target='#accordion-collapse-body-2'
                                        aria-expanded='false'
                                        aria-controls='accordion-collapse-body-2'   >
                                        <span>Shipping infomation</span>
                                        <svg
                                            data-accordion-icon
                                            className='w-6 h-6 rotate-180 shrink-0'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg' >
                                            <path
                                                fill-rule='evenodd'
                                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                clip-rule='evenodd'></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id='accordion-collapse-body-2'
                                    className='hidden'
                                    aria-labelledby='accordion-collapse-heading-2' >
                                    <div className='p-2'>
                                        <p className='mb-2 text-slate-800 dark:text-white'>
                                            Shipping rates, estimated times and
                                            free shipping options.
                                        </p>
                                        <Link to={'shippingInfo'}
                                            className='underline'     >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* payment */}
                            <div id='accordion-collapse'
                                data-accordion='collapse'    >
                                <h2 id='accordion-collapse-heading-3'>
                                    <button
                                        type='button'
                                        className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-medium text-right text-slate-800'
                                        data-accordion-target='#accordion-collapse-body-3'
                                        aria-expanded='false'
                                        aria-controls='accordion-collapse-body-3'  >
                                        <span>Payment</span>
                                        <svg
                                            data-accordion-icon
                                            className='w-6 h-6 rotate-180 shrink-0'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'  >
                                            <path
                                                fill-rule='evenodd'
                                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                clip-rule='evenodd'
                                            ></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id='accordion-collapse-body-3'
                                    className='hidden'
                                    aria-labelledby='accordion-collapse-heading-3'  >
                                    <div className='p-2'>
                                        <p className='mb-2 text-slate-800 dark:text-white'>
                                            Available payment options and other
                                            frequently asked payment questions.
                                        </p>
                                        <Link
                                            to={'faq'}
                                            className='underline' >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* return */}
                            <div id='accordion-collapse'
                                data-accordion='collapse' >
                                <h2 id='accordion-collapse-heading-4'>
                                    <button
                                        type='button'
                                        className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-medium text-right text-slate-800'
                                        data-accordion-target='#accordion-collapse-body-4'
                                        aria-expanded='false'
                                        aria-controls='accordion-collapse-body-4' >
                                        <span>Return</span>
                                        <svg data-accordion-icon
                                            className='w-6 h-6 rotate-180 shrink-0'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'  >
                                            <path fill-rule='evenodd'
                                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                clip-rule='evenodd'></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id='accordion-collapse-body-4'
                                    className='hidden'
                                    aria-labelledby='accordion-collapse-heading-4'
                                >
                                    <div className='p-2'>
                                        <p className='mb-2 text-slate-800 dark:text-white'>
                                            Read how to return your item(s) and
                                            which rules apply.
                                        </p>
                                        <Link
                                            to={'returnExchangesInfo'}
                                            className='underline'
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* exchanges */}
                            <div
                                id='accordion-collapse'
                                data-accordion='collapse'
                            >
                                <h2 id='accordion-collapse-heading-5'>
                                    <button
                                        type='button'
                                        className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-medium text-right text-slate-800'
                                        data-accordion-target='#accordion-collapse-body-5'
                                        aria-expanded='false'
                                        aria-controls='accordion-collapse-body-5'
                                    >
                                        <span>Exhanges</span>
                                        <svg
                                            data-accordion-icon
                                            className='w-6 h-6 rotate-180 shrink-0'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fill-rule='evenodd'
                                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                clip-rule='evenodd'
                                            ></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id='accordion-collapse-body-5'
                                    className='hidden'
                                    aria-labelledby='accordion-collapse-heading-5'
                                >
                                    <div className='p-2'>
                                        <p className='mb-2 text-slate-800 dark:text-white'>
                                            Read how to easily apply your
                                            exchange and make sure your item is
                                            reserved.
                                        </p>
                                        <Link
                                            href={'ReturnExchangesInfo'}
                                            className='underline'
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Frequently Asked Questions */}
                            <div
                                id='accordion-collapse'
                                data-accordion='collapse'
                            >
                                <h2 id='accordion-collapse-heading-6'>
                                    <button
                                        type='button'
                                        className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-medium text-right text-slate-800'
                                        data-accordion-target='#accordion-collapse-body-6'
                                        aria-expanded='false'
                                        aria-controls='accordion-collapse-body-6'
                                    >
                                        <span>Frequently Asked Questions</span>
                                        <svg
                                            data-accordion-icon
                                            className='w-6 h-6 rotate-180 shrink-0'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fill-rule='evenodd'
                                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                clip-rule='evenodd'
                                            ></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id='accordion-collapse-body-6'
                                    className='hidden'
                                    aria-labelledby='accordion-collapse-heading-6'
                                >
                                    <div className='p-2'>
                                        <p className='mb-2 text-slate-800 dark:text-white'>
                                            Find your answer in our frequently
                                            asked questions section.
                                        </p>
                                        <Link
                                            to={'faq'}
                                            className='underline'
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
