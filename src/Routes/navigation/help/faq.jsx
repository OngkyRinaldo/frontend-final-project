import HelpAsk from "../../../assets/img/Help/overview.webp"
import { Link } from "react-router-dom"
import { Footer } from '../footer/Footer';

export const Faq = () => {

    return (
        <>
            <main>
                <div id="hero-overview" class="mb-3 md:mb-5 lg:mb-8">
                    <img
                        src={HelpAsk}
                        alt="ask-anything"
                        class="h-64 md:h-80 w-screen object-cover"
                    />
                </div>
                <section id="help" class="container max-h-full mx-auto my-3">
                    <div
                        class="flex flex-col md:flex lg:grid lg:grid-cols-8 px-4 mx-auto pb-2 mb-6"
                    >
                        <div class="col-span-1">
                            <Link to={"/overview"} class="mb-6 text-sm hover:underline"
                            >&#8592; Return</Link
                            >
                        </div>
                        <div class="col-span-4">
                            <h2
                                class="mb-3 mt-10 lg:mt-0 text-md font-bold text-gray-900 dark:text-white"
                            >
                                Frequently Asked Questions
                            </h2>
                            <div id="accordion-collapse" data-accordion="collapse">
                                <h4 class="text-base font-semibold">Shipping</h4>
                                <h6 id="accordion-collapse-heading-2">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-2"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-2"
                                    >
                                        <span>Incorrect address and undelivered parcels</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-2"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-2"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            In case you ordered a parcel to the wrong address, the
                                            package will be returned to us. Once received and refunded,
                                            you can re-order the item(s). Please note that the shipping
                                            fee to redirect is not refundable.
                                        </p>
                                    </div>
                                </div>
                                <h6 id="accordion-collapse-heading-3">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-3"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-3"
                                    >
                                        <span>How long does it take for an order to be shipped</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-3"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-3"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            All orders placed before 5 pm (CET) will be dispatched the
                                            same working day. For an overview of estimated delivery
                                            times, see the diagrams on our
                                            <Link
                                                to={"shippingInfo"}
                                                target="_blank"
                                                class="border-b border-slate-400 font-normal hover:font-bold"
                                            >shipping page.</Link>
                                            Once you’ve placed an order, more accurate delivery
                                            information will be communicated at the checkout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="accordion-collapse"
                                data-accordion="collapse"
                                class="mt-10"
                            >
                                <h4 class="text-base font-semibold">Order process</h4>
                                <h6 id="accordion-collapse-heading-4">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-4"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-4"
                                    >
                                        <span>Does ETQ offer VAT discount/deduct?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-4"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-4"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            Yes, outside EU shipping zones VAT will be deducted
                                            automatically.
                                        </p>
                                    </div>
                                </div>
                                <h6 id="accordion-collapse-heading-5">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-5"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-5"
                                    >
                                        <span>How long before I receive the exchange?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-5"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-5"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            An exchanged item usually gets back to us in roughly the
                                            same amount of days as it is delivered. Processing the
                                            exchange usually takes 1-5 calendar days, after which the
                                            new product will be sent to you. Once the parcel passes on
                                            to the delivery company, ETQ can’t account for any delays in
                                            the delivery. For questions, it’s best you contact the
                                            company that delivered your package directly and provide
                                            them with your tracking reference.
                                        </p>
                                    </div>
                                </div>
                                <h6 id="accordion-collapse-heading-6">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-6"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-6"
                                    >
                                        <span>Do I pay for tax and duties outside of the EU?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-6"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-6"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            Yes, the exact amount depends on the country and ordered
                                            goods. For more information you can contact your local
                                            customs office. Please note that ETQ does not determine the
                                            taxes and import charges.
                                        </p>
                                    </div>
                                </div>
                                <h6 id="accordion-collapse-heading-7">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-7"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-7"
                                    >
                                        <span>What payment methods does ETQ accept?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-7"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-7"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            We accept <strong> iDEAL</strong>,
                                            <strong>MasterCard</strong>, <strong> Visa</strong>,
                                            <strong>American Express</strong>, <strong>PayPal</strong>,
                                            <strong> Apple Pay</strong> and
                                            <strong> Bankcontact</strong>/<strong>Mister</strong> Cash.
                                            For orders originating from The Netherlands, Germany,
                                            Austria and Finland we also accept <strong> Klarna</strong>.
                                        </p>
                                    </div>
                                </div>
                                <h6 id="accordion-collapse-heading-8">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-8"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-8"
                                    >
                                        <span>How do I place an order?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-8"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-8"
                                >
                                    <div class="p-6">
                                        <ol type="1" class="mb-2 text-slate-800 dark:text-white">
                                            <li>
                                                Place the product(s) you want to purchase in the basket;
                                            </li>
                                            <li>Proceed to the check-out to complete your purchase;</li>
                                            <li>
                                                Once at the check-out page, fill in all the required
                                                information;
                                            </li>
                                            <li>Choose a payment method;</li>
                                            <li>
                                                Confirm your purchase by completing the payment in the
                                                payment service provider portal, after which a
                                                confirmation e-mail will follow.
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <h6 id="accordion-collapse-heading-9">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-9"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-9"
                                    >
                                        <span>What is my order status?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-9"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-9"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">You can check on your order anytime. To do so: <br />
                                            <ol type="1">
                                                <li>Log in to your account;</li>
                                                <li>Under ‘Orders’, select your order;</li>
                                                <li>From here, you can view order details</li>
                                            </ol>
                                            <br />
                                            You can also access your order info through your confirmation e-mail. <br />
                                            Additionally, you will receive an e-mail with a tracking link.
                                        </p>
                                    </div>
                                </div>
                                <h6 id="accordion-collapse-heading-10">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-10"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-10"
                                    >
                                        <span>Does ETQ offer price adjustments on sale items?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180\ shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-10"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-10"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            <em>
                                                We offer price adjustments on sale items purchased up to 14 days prior to the start of the sale. Orders placed between 1 and 7 days prior to the start of the sale will receive restitution in form of a refund while orders placed between 8 and 14 days prior to the start of the sale will receive restitution in form of store credit, valid for 1 year. Please note that, at the time of your request, the item and size must be in stock. Vouchers may not be used on sale items.
                                            </em>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion-collapse" data-accordion="collapse" class="mt-10">
                                <h4 class="text-base font-semibold">Account</h4>
                                <h6 id="accordion-collapse-heading-1">
                                    <button
                                        type="button"
                                        class="flex items-center border-b border-slate-300 justify-between w-full py-2 text-sm text-right text-slate-800"
                                        data-accordion-target="#accordion-collapse-body-1"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-1"
                                    >
                                        <span>Do I need an account to place an order?</span>
                                        <svg
                                            data-accordion-icon
                                            class="w-6 h-6 rotate-180 shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </h6>
                                <div
                                    id="accordion-collapse-body-1"
                                    class="hidden"
                                    aria-labelledby="accordion-collapse-heading-1"
                                >
                                    <div class="p-6">
                                        <p class="mb-2 text-slate-800 dark:text-white">
                                            In the check-out menu you can choose weather you’d like to make an account or not. Having an account makes it easier to follow-up on any completed orders as well as making any future orders.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-span-2 col-start-7 mt-10 lg:mt-0">
                            <h2 class="mb-3 text-md font-bold text-gray-900 dark:text-white">
                                Cant't find an answer?
                            </h2>
                            <p class="text-sm font-base py-3 leading-tight text-justify">
                                Can't find the answer you are looking for? Contact us by sending
                                an e-mail.
                                <br />
                                <br />
                                <Link
                                    to={"#"}
                                    class="border-b border-slate-400 font-base hover:font-bold"
                                >Email us</Link  >
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}