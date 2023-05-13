
export const Footer = () => {
    return (
        <>
            <footer className="bg-white container max-h-full mx-auto border-t border-black-300 mt-18 md:mt-28" >
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="px-4 py-3 lg:py-6">
                            <div className="">
                                <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase dark:text-white">
                                    About
                                </h2>
                                <p className="text-sm text-justify">
                                    We design wardrobe essentials with a strong silhouette, in tonal
                                    colorways. Our style never changes. It evolves. Continuously.
                                    <a className="hover:underline"
                                        href="about.html"
                                        rel="noopener noreferrer">Read more</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="px-4 py-3 lg:py-6">
                            <div>
                                <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase dark:text-white"
                                >
                                    Address
                                </h2>
                                <p className="text-sm text-justify">
                                    Duinkerkenstraat 3A 9723 BN Groningen The Netherland
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="px-4 py-3 lg:py-6">
                            <div>
                                <h2
                                    className="mb-3 text-sm font-bold text-gray-900 uppercase dark:text-white"

                                >
                                    Contact
                                </h2>
                                <p className="text-sm">
                                    <a className="hover:underline" href="http://">Email us here</a>
                                    <br />
                                    <a
                                        className="hover:underline"
                                        href="http://"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >0854013553 (mon-fri)</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="px-4 py-3 lg:py-6">
                            <div>
                                <h2
                                    className="mb-3 text-sm font-bold text-gray-900 uppercase dark:text-white"

                                >
                                    Info
                                </h2>
                                <ul className="text-sm">
                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">Shipping</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">Wholesale</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">Product Care</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">Store Locator</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:underline">Term of Service</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-4">
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="grid grid-rows-2 px-4 py-3">
                            <div className="flex">
                                <form className="">

                                    <div className="flex-col md:flex">
                                        <div className="flex">
                                            <label htmlFor="langganan" className="text-sm mt-2 lg:mr-6">
                                                Join our newsletter.
                                            </label>
                                        </div>

                                        <div className="flex">
                                            <input
                                                id="langganan"
                                                className="border-slate-200  shadow rounded w-full block mt-2"
                                                type="text"
                                                placeholder="Enter your email"
                                            />
                                            <button
                                                type="button"
                                                className="bg-slate-200 font-semibold hover:uderline py-3 px-3 rounded-md mt-2 ml-4 border border-slate-600 hover:bg-slate-500"
                                            >
                                                Submit
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="py-3">
                                <p className="text-slate-500 text-sm">
                                    This site is protected by reCAPTCHA and the Google
                                    <a className="hover:underline" href="http://"> Privacy Policy </a>
                                    and
                                    <a className="hover:underline" href="http://"
                                    > Terms of Service apply.</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="grid grid-rows-2 px-3 py-2 lg:flex md:content-justify">
                            <div className="flex py-8">
                                <img
                                    className="w-auto h-8 rounded-lg bg-slate-100 px-2 py-2 mr-2 md:mr-1"
                                    src="/src/assets/img/Footer/bca.png"
                                    alt="bca"
                                />
                                <img
                                    className="w-auto h-8 rounded-lg bg-slate-100 px-2 py-2 mr-2 md:mr-1"
                                    src="/src/assets/img/Footer/bri.png"
                                    alt="bri"
                                />
                                <img
                                    className="w-auto h-8 rounded-lg bg-slate-100 px-2 py-2 mr-2 md:mr-1"
                                    src="/src/assets/img/Footer/dana.png"
                                    alt="dana"
                                />
                                <img
                                    className="w-auto h-8 rounded-lg bg-slate-100 px-2 py-2 mr-2 md:mr-1"
                                    src="/src/assets/img/Footer/ovo.png"
                                    alt="ovo"
                                />
                                <img
                                    className="w-auto h-8 object-cover rounded-lg bg-slate-100 px-2 py-2 mr-2"
                                    src="/src/assets/img/Footer/google-pay.png"
                                    alt="gpay"
                                />
                            </div>

                            <div className="py-3 border-t lg:border-none lg:p-8 border-black-300">
                                <a className="text-sm text-slate-800 hover:underline" href="#"
                                >Term and condition.</a
                                >
                                <br />
                                <a className="text-sm text-slate-800 hover:underline" href="#"
                                >Privay statements.</a
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        className="px-4 py-3 mb-12 flex justify-center md:block md:justify-start"
                    >
                        <select className="bg-slate-200 hover:uderline py-3 px-3 rounded-md">
                            <option disabled >Pilih Mata Uang</option>
                            <option>AUD - Dolar Australia</option>
                            <option>BGN - Lev Bulgaria</option>
                            <option>BRL - Real Brasil</option>
                            <option>CAD - Dolar Kanada</option>
                            <option>CHF - Franc Swiss</option>
                            <option>CNY - Yuan China</option>
                            <option>EUR - Euro</option>
                            <option>GBP - Poundsterling Inggris</option>
                            <option>HKD - Dolar Hong Kong</option>
                            <option>IDR - Rupiah Indonesia</option>
                            <option>INR - Rupee India</option>
                            <option>JPY - Yen Jepang</option>
                            <option>KRW - Won Korea Selatan</option>
                            <option>MXN - Peso Meksiko</option>
                            <option>MYR - Ringgit Malaysia</option>
                            <option>NZD - Dolar New Zealand</option>
                            <option>PHP - Peso Filipina</option>
                            <option>PLN - Zloty Polandia</option>
                            <option>RUB - Rubel Rusia</option>
                            <option>SEK - Krona Swedia</option>
                            <option>SGD - Dolar Singapura</option>
                            <option>THB - Baht Thailand</option>
                            <option>TRY - Lira Turki</option>
                            <option>USD - Dolar Amerika Serikat</option>
                            <option>ZAR - Rand Afrika Selatan</option>
                        </select>

                    </div>
                </div>
            </footer>
        </>
    );
};
