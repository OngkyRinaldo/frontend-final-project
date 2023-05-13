import { Link } from "react-router-dom"
import HelpAsk from "../../../assets/img/Help/overview.webp"

export const ReturnExchangesInfo = () => {
    return (
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
                        >&#8592; Return</Link  >
                    </div>
                    <div class="col-span-5">
                        <h2
                            class="mb-3 mt-10 lg:mt-0 text-lg font-bold text-gray-900 dark:text-white"
                        >
                            Return & Exchanges
                        </h2>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            Returning a product is always possible by sending the product(s)
                            back to us. When requesting a return or exchange, please make sure
                            to mind the following information.
                        </p>
                        <h3
                            class="mb-3 mt-2 text-md font-bold text-gray-900 dark:text-white"
                        >
                            Return address
                        </h3>
                        <ul class="text-sm font-base py-2 leading-relaxed text-justify">
                            <li>ETQ / Returns</li>
                            <li>Edisonweg 11</li>
                            <li>4207 HE Gorinchem</li>
                            <li>The Netherlands</li>
                        </ul>
                        <h3
                            class="mb-3 mt-3 text-md font-bold text-gray-900 dark:text-white"
                        >
                            Our policy
                        </h3>
                        <ul class="pl-5 list-disc dark:text-white">
                            <li>
                                Orders can be returned within a period of 14 days, starting from
                                the moment you receive your order.
                            </li>
                            <li>
                                Item(s) should be clean and unworn, all tags and dust bag(s)
                                must still be present;
                            </li>
                            <li>
                                The cost of a return is at your own expense, including import
                                duties.
                            </li>
                        </ul>
                        <h2
                            class="mb-2 py-5 mt-10 border-t border-slate-300 text-lg font-bold text-gray-900 dark:text-white"
                        >
                            How to return
                        </h2>
                        <h3
                            class="mb-3 mt-2 text-md font-bold text-gray-900 dark:text-white"
                        >
                            European Returns*
                        </h3>
                        <ul class="pl-5 list-disc dark:text-white">
                            <li>
                                Head to our online
                                <a href="#" class="border-b border-slate-500 hover:border-none"
                                >return portal</a
                                >
                                ;
                            </li>
                            <li>
                                Fill in your order number and the email address you used when
                                placing your order;
                            </li>
                            <li>
                                Select the item(s) you want to return along with the reason(s)
                                and tell us if you wish to receive a refund or an exchange</li>

                            <li>Fill out your address details and choose a return method;</li>
                            <li>Drop off your return at the nearest parcel shop.</li>
                        </ul>

                        <h3
                            class="mb-3 mt-5 text-md font-bold text-gray-900 dark:text-white"
                        >
                            United Kingdom & USA Returns
                        </h3>
                        <ul class="pl-5 list-disc dark:text-white">
                            <li>
                                Head to our online
                                <Link to={"#"} class="border-b border-slate-500 hover:border-none"
                                >return portal</Link
                                >
                                ;
                            </li>
                            <li>
                                Fill in your order number and the email address you used when
                                placing your order;
                            </li>
                            <li>
                                Select the item(s) you want to return along with the reason(s)
                                and tell us if you wish to receive a refund or an exchange</li>

                            <li>Fill out your address details and return with UPS</li>
                            <li>
                                You will receive an UPS return label and also the informations
                                for the customs. Please add this so you don't have to pay import
                                taxes because it is a return.
                            </li>
                            <li>Drop off your return at the nearest UPS point.</li>
                        </ul>

                        <h3
                            class="mb-3 mt-5 text-md font-bold text-gray-900 dark:text-white"
                        >
                            What's next?
                        </h3>
                        <p class="text-sm font-base py-2 leading-relaxed text-justify">
                            We aim to process all returns within 5 business days of receiving
                            them. You will receive a final confirmation when your refund has
                            been issued or when your exchange has been shipped. Please allow a
                            couple of days for the refund to be visible in your bank account.
                            <br />
                            <br />
                            If you have any questions, please contact us at +31 (0) 85 401 35
                            53 or email service@etq-amsterdam.com. Our Customer Service is
                            open from 10 AM to 6 PM on weekdays.
                            <br />
                            <br />
                            <em>
                                *European Returns: The Netherlands, Belgium, Luxembourg,
                                Germany, France, Ireland, Spain, Italy, Portugal, Denmark,
                                Sweden, Austria, Czech Republic, Bulgaria, Hungary, Estonia,
                                Croatia, Lithuania, Latvia, Poland, Romania, Slovenia, and
                                Slovakia.
                            </em>
                        </p>
                    </div>
                    <div class="col-span-1 col-start-8 mt-10 lg:mt-0"></div>
                </div>
            </section>
        </main >
    )
}