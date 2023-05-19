import HelpAsk from '../../../assets/img/Help/overview.webp';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Accordion } from 'flowbite-react';

export const Faq = () => {
    return (
        <>
            <main>
                <div id='hero-overview' className='mb-3 md:mb-5 lg:mb-8'>
                    <img
                        src={HelpAsk}
                        alt='ask-anything'
                        className='h-64 md:h-80 w-screen object-cover'
                    />
                </div>
                <section
                    id='help'
                    className='container max-h-full mx-auto my-3'
                >
                    <div className='flex flex-col md:flex lg:grid lg:grid-cols-8 px-4 mx-auto pb-2 mb-6'>
                        <div className='col-span-1'>
                            <Link
                                to={'/overview'}
                                className='mb-6 text-sm hover:underline'
                            >
                                &#8592; Return
                            </Link>
                        </div>
                        <div className='col-span-4 '>
                            <h2 className='m-5 mb-3 mt-10 lg:mt-0 text-2xl font-bold text-gray-900 dark:text-white'>
                                Frequently Asked Questions
                            </h2>
                            <div
                                id='accordion-collapse'
                                data-accordion='collapse'
                            >
                                <div>
                                    <h4 className='text-xl font-semibold ml-5'>
                                        Shipping
                                    </h4>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                Incorrect address and
                                                undelivered parcels
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    In case you ordered a parcel
                                                    to the wrong address, the
                                                    package will be returned to
                                                    us. Once received and
                                                    refunded, you can re-order
                                                    the item(s). Please note
                                                    that the shipping fee to
                                                    redirect is not refundable.
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                How long does it take for an
                                                order to be shipped
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    All orders placed before 5
                                                    pm (CET) will be dispatched
                                                    the same working day. For an
                                                    overview of estimated
                                                    delivery times, see the
                                                    diagrams on our
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                </div>
                                <div className='mt-10'>
                                    <h4 className='text-xl font-semibold ml-5'>
                                        Order process
                                    </h4>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                Does ETQ offer VAT
                                                discount/deduct?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    Yes, outside EU shipping
                                                    zones VAT will be deducted
                                                    automatically.
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                How long before I receive the
                                                exchange?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    An exchanged item usually
                                                    gets back to us in roughly
                                                    the same amount of days as
                                                    it is delivered. Processing
                                                    the exchange usually takes
                                                    1-5 calendar days, after
                                                    which the new product will
                                                    be sent to you. Once the
                                                    parcel passes on to the
                                                    delivery company, ETQ can’t
                                                    account for any delays in
                                                    the delivery. For questions,
                                                    it’s best you contact the
                                                    company that delivered your
                                                    package directly and provide
                                                    them with your tracking
                                                    reference.
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                Do I pay for tax and duties
                                                outside of the EU?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    Yes, the exact amount
                                                    depends on the country and
                                                    ordered goods. For more
                                                    information you can contact
                                                    your local customs office.
                                                    Please note that ETQ does
                                                    not determine the taxes and
                                                    import charges.
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                What payment methods does ETQ
                                                accept?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    We accept
                                                    <strong className='font-extrabold text-black ml-1'>
                                                        iDEAL
                                                    </strong>
                                                    ,
                                                    <strong className='font-extrabold text-black ml-1'>
                                                        MasterCard
                                                    </strong>
                                                    ,{' '}
                                                    <strong className='font-extrabold text-black ml-1'>
                                                        {' '}
                                                        Visa
                                                    </strong>
                                                    ,
                                                    <strong className='font-extrabold text-black ml-1'>
                                                        American Express
                                                    </strong>
                                                    ,{' '}
                                                    <strong className='font-extrabold text-black ml-1'>
                                                        PayPal
                                                    </strong>
                                                    ,
                                                    <strong className='font-extrabold text-black ml-1'>
                                                        Apple Pay
                                                    </strong>
                                                    and
                                                    <strong className='font-extrabold text-black ml-1'>
                                                        Bankcontact
                                                    </strong>
                                                    /
                                                    <strong className='font-extrabold text-black mr-1'>
                                                        Mister
                                                    </strong>
                                                    Cash. For orders originating
                                                    from The Netherlands,
                                                    Germany, Austria and Finland
                                                    we also accept
                                                    <strong className='font-extrabold text-black '>
                                                        Klarna
                                                    </strong>
                                                    .
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                How do I place an order?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    You can check on your order
                                                    anytime. To do so: <br />{' '}
                                                    <span>
                                                        Log in to your account.
                                                    </span>
                                                    <span>
                                                        Under ‘Orders’, select
                                                        your order.
                                                    </span>
                                                    <span>
                                                        From here, you can view
                                                        order details.
                                                    </span>
                                                    <br />
                                                    You can also access your
                                                    order info through your
                                                    confirmation e-mail. <br />
                                                    Additionally, you will
                                                    receive an e-mail with a
                                                    tracking link.
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                What is my order status?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    You can check on your order
                                                    anytime. To do so : <br />
                                                    <span>
                                                        Log in to your account.
                                                    </span>
                                                    <span>
                                                        Under{' '}
                                                        <strong className='font-extrabold text-black mr-1'>
                                                            ‘Orders’
                                                        </strong>
                                                        , select your order.
                                                    </span>
                                                    <span>
                                                        From here, you can view
                                                        order details
                                                    </span>
                                                    <br />
                                                    You can also access your
                                                    order info through your
                                                    confirmation e-mail. <br />
                                                    Additionally, you will
                                                    receive an e-mail with a
                                                    tracking link.
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                Does ETQ offer price adjustments
                                                on sale items?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    <em>
                                                        We offer price
                                                        adjustments on sale
                                                        items purchased up to 14
                                                        days prior to the start
                                                        of the sale. Orders
                                                        placed between 1 and 7
                                                        days prior to the start
                                                        of the sale will receive
                                                        restitution in form of a
                                                        refund while orders
                                                        placed between 8 and 14
                                                        days prior to the start
                                                        of the sale will receive
                                                        restitution in form of
                                                        store credit, valid for
                                                        1 year. Please note
                                                        that, at the time of
                                                        your request, the item
                                                        and size must be in
                                                        stock. Vouchers may not
                                                        be used on sale items.
                                                    </em>
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                </div>
                                <div className='mt-10'>
                                    <h4 className='text-xl font-semibold ml-5'>
                                        Account
                                    </h4>
                                    <Accordion
                                        flush={true}
                                        className='col-span-3  '
                                    >
                                        <Accordion.Panel className=' mb-6'>
                                            <Accordion.Title className='flex border-b border-slate-300 items-center justify-between w-full p-2 font-extrabold text-right text-slate-800 text-lg'>
                                                Do I need an account to place an
                                                order?
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                <p className='mb-2 text-base text-slate-500 dark:text-white '>
                                                    In the check-out menu you
                                                    can choose weather you’d
                                                    like to make an account or
                                                    not. Having an account makes
                                                    it easier to follow-up on
                                                    any completed orders as well
                                                    as making any future orders.
                                                </p>
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 col-start-7 mt-10 lg:mt-0'>
                            <h2 className='mb-3 text-md font-bold text-gray-900 dark:text-white'>
                                Cant't find an answer?
                            </h2>
                            <p className='text-sm font-base py-3 leading-tight text-justify'>
                                Can't find the answer you are looking for?
                                Contact us by sending an e-mail.
                                <br />
                                <br />
                                <Link
                                    to='#'
                                    className='border-b border-slate-400 font-base hover:font-bold'
                                >
                                    Email us
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
