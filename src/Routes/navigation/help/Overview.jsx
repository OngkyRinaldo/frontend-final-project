import { Accordion } from 'flowbite-react';
import HelpAsk from '../../../assets/img/Help/overview.webp';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';

export const Overview = () => {
    return (
        <>
            <main>
                {/* hero image ask anything start */}
                <div id='hero-overview' className='mb-3 md:mb-5'>
                    <img
                        src={HelpAsk}
                        alt='ask-anything'
                        className='h-64 md:h-80 w-screen object-cover'
                    />
                </div>
                {/* hero image ask anything end  */}

                {/* section help topics start */}
                <section
                    id='help'
                    className='container max-h-full mx-auto mb-3'
                >
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
                                    Can't find answer you are looking for? You
                                    can send an e-mail to
                                    <a href='#' className='underline ml-1'>
                                        service@fsd-kelompok9.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <Accordion flush={true} className='col-span-3 px-2'>
                            <Accordion.Panel className='px-4 mx-auto mb-6'>
                                <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                    Size guide
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='mb-2 text-slate-500 dark:text-white text-base'>
                                        Find out what size you need in our size
                                        guides.
                                    </p>
                                    <Link
                                        to='/sizeGuide'
                                        className='hover:underline text-slate-600'
                                    >
                                        Read more
                                    </Link>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel className='px-4 mx-auto mb-6'>
                                <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                    Shipping infomation
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='mb-2 text-slate-500 dark:text-white text-base'>
                                        Shipping rates, estimated times and free
                                        shipping options.
                                    </p>
                                    <Link
                                        to='/shippingInformation'
                                        className='hover:underline text-slate-600'
                                    >
                                        Read more
                                    </Link>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel className='px-4 mx-auto mb-6'>
                                <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg '>
                                    Return
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='mb-2 text-slate-500 dark:text-white text-base'>
                                        Read how to return your item(s) and
                                        which rules apply.
                                    </p>
                                    <Link
                                        to='/returnExchange'
                                        className='hover:underline text-slate-600'
                                    >
                                        Read more
                                    </Link>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel className='px-4 mx-auto mb-6'>
                                <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                    Exchange
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='mb-2 text-slate-500 dark:text-white text-base'>
                                        Read how to easily apply your exchange
                                        and make sure your item is reserved.
                                    </p>
                                    <Link
                                        to='/returnExchange'
                                        className='hover:underline text-slate-600'
                                    >
                                        Read more
                                    </Link>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel className='px-4 mx-auto mb-6'>
                                <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg '>
                                    Frequently Asked Questions
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='mb-2 text-slate-500 dark:text-white text-base'>
                                        Find your answer in our frequently asked
                                        questions section.
                                    </p>
                                    <Link
                                        to='/faq'
                                        className='hover:underline text-slate-600'
                                    >
                                        Read more
                                    </Link>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                    {/* accordion end */}
                </section>
                {/* section hel topics end */}
            </main>

            <Footer />
        </>
    );
};
