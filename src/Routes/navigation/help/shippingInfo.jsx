import { Link } from "react-router-dom"
import HelpAsk from "../../../assets/img/Help/overview.webp"
import { Footer } from '../footer/Footer';

export const ShippingInfo = () => {
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
                        <Link to={"overview"} class="mb-6 text-sm hover:underline"
                        >&#8592; Return</Link
                        >
                    </div>
                    <div class="col-span-5">
                        <h2
                            class="mb-3 mt-10 lg:mt-0 text-lg font-bold text-gray-900 dark:text-white"
                        >
                            Shipping information
                        </h2>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            Orders placed before 11:30PM will be shipped the same day with
                            Post NL for The Netherlands and Belgium (Monday-Friday, excluding
                            holidays). Other orders will be shipped within one business day.
                            If you have any questions about your order, you can reach out to
                            our
                            <a href="#" class="border-b border-slate-500">Customer Service</a>
                            and we will be happy to help.
                            <br />
                            <br />
                            We ship to the following countries: Austria, Belgium, Bulgaria,
                            Canada, Croatia, Cyprus, Czech Republic, Denmark, Estonia,
                            Finland, France, Germany, Greece, Hungary, Iceland, Ireland,
                            Italy, Latvia, Lithuania, Luxembourg, Netherlands, Norway, Poland,
                            Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland,
                            United Kingdom, and the United States.
                            <br />
                            <br />
                            For inquiries regarding countries not listed above, please contact
                            our
                            <a href="#" class="border-b border-slate-500">Customer Service</a
                            >.
                        </p>

                        <div class="relative w-full overflow-x-auto mb-5">
                            <table
                                id="table-guide-size"
                                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                            >
                                <thead
                                    class="text-xs border-b border-slate-300 text-gray-900 uppercase dark:text-gray-400"
                                >
                                    <tr>
                                        <th scope="col" class="px-1 py-4">Region</th>
                                        <th scope="col" class="px-1 py-4">Method</th>
                                        <th scope="col" class="px-1 py-4">Price</th>
                                        <th scope="col" class="px-1 py-4">Delivery windows</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                    >
                                        <th
                                            scope="row"
                                            class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Benelux
                                        </th>
                                        <td class="px-1 py-4">PostNL – Standard shipping</td>
                                        <td class="px-1 py-4">Free from €150</td>
                                        <td class="px-1 py-4">1 – 2 business day(s)</td>
                                    </tr>
                                    <tr
                                        class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                    >
                                        <th
                                            scope="row"
                                            class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Europe
                                        </th>
                                        <td class="px-1 py-4">DHL / DPD – Standard shipping</td>
                                        <td class="px-1 py-4">Free from €150</td>
                                        <td class="px-1 py-4">2 – 5 business days</td>
                                    </tr>
                                    <tr
                                        class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                    >
                                        <th
                                            scope="row"
                                            class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            UK
                                        </th>
                                        <td class="px-1 py-4">UPS – Standard shipping</td>
                                        <td class="px-1 py-4">Free from £130</td>
                                        <td class="px-1 py-4">2 – 5 business days</td>
                                    </tr>
                                    <tr
                                        class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                    >
                                        <th
                                            scope="row"
                                            class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            United States, Canada
                                        </th>
                                        <td class="px-1 py-4">UPS – Standard shipping</td>
                                        <td class="px-1 py-4">€ 20</td>
                                        <td class="px-1 py-4">3 – 5 business days</td>
                                    </tr>
                                    <tr
                                        class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                    >
                                        <th
                                            scope="row"
                                            class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            New Zealand
                                        </th>
                                        <td class="px-1 py-4">UPS – Standard shipping</td>
                                        <td class="px-1 py-4">€ 30</td>
                                        <td class="px-1 py-4">3 – 5 business days</td>
                                    </tr>
                                    <tr
                                        class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                    >
                                        <th
                                            scope="row"
                                            class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Hong Kong & Singapore
                                        </th>
                                        <td class="px-1 py-4">UPS – Standard shipping</td>
                                        <td class="px-1 py-4">€ 40</td>
                                        <td class="px-1 py-4">3 – 5 business days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            *Please note that we are currently not able to ship to Russia due
                            to carrier reasons.
                        </p>
                        <h3
                            class="mb-3 mt-3 text-md font-bold text-gray-900 dark:text-white"
                        >
                            Importand information
                        </h3>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            Delivery times are provided as guidelines only and do not take
                            into account possible delays caused by payment authorization
                            and/or stock availability. We are unable to deliver to post office
                            boxes.
                        </p>
                        <h3
                            class="mb-3 mt-3 text-md font-bold text-gray-900 dark:text-white"
                        >
                            Shipping Holidays 2023
                        </h3>
                        <p
                            class="text-sm tracking-wider font-base py-2 leading-relaxed text-justify"
                        >
                            We do not ship orders on the following public holidays: <br />
                            <em>
                                New Year’s Day (January 1st) <br />
                                King’s Day (April 27th) <br />
                                Christmas Day (December 25th) <br />
                                Boxing Day (December 26th)</em
                            >
                        </p>
                        <h3
                            class="mb-3 mt-3 text-md font-bold text-gray-900 dark:text-white"
                        >
                            Sale
                        </h3>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            Please note that during Sale it may take a little longer to
                            process your order. We do our best to ship your order as soon as
                            possible.
                        </p>
                        <h3
                            class="mb-3 mt-3 text-md font-bold text-gray-900 dark:text-white"
                        >
                            Insurance
                        </h3>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            ETQ insures each purchase during time in transit until it is
                            delivered to you. Orders may require signature upon delivery, at
                            which point responsibility for the shipment passes to you. If you
                            have specified a recipient other than yourself for delivery
                            purposes, you also accept that signature by the third party is
                            sufficient proof of delivery and fulfillment by ETQ Amsterdam.
                        </p>
                        <h3
                            class="mb-3 mt-3 text-md font-bold text-gray-900 dark:text-white"
                        >
                            VAT discount
                        </h3>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            Customers ordering from outside the European Union (except
                            customers from the UK) will receive a VAT discount of 21% on their
                            order. This is applied at checkout once you have entered your
                            delivery details or when you switch country/currency while
                            browsing on our website.
                        </p>
                        <h3
                            class="mb-3 mt-3 text-md font-bold text-gray-900 dark:text-white"
                        >
                            Customs, duties and taxes
                        </h3>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            All orders shipped to countries outside the European Union (except
                            the UK) are shipped Delivery Duties Unpaid (DDU). Customs, duties
                            and taxes are not included in the item price or shipping cost.
                            When you place an international order, you agree to pay any
                            applicable customs, duties or taxes levied by your destination
                            country.
                            <br />
                            <br />
                            Unfortunately we cannot calculate these charges prior to your
                            order being placed and are unable to cover them for customers. Any
                            applicable fees will be collected from you by the carrier upon
                            delivery. Please check with your local customs office to determine
                            what these additional costs will be prior to purchase.
                        </p>
                    </div>
                    <div class="col-span-1 col-start-8 mt-10 lg:mt-0"></div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}