import { Link } from "react-router-dom"

export const Shipping = () => {
    return (
        <section>
            <div className="container mx-auto  px-3 mt-3 mb-3">
                <h2 className="text-xl font-semibold pb-1 lg:pb-5">Shipping Confirmation</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="col-span-2">

                        <form
                            className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 md:gap-2"
                        >
                            <div className="mb-6">
                                <label
                                    for="firstName"
                                    className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                                >First name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    for="lastName"
                                    className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                                >Last name</label
                                >
                                <input
                                    type="text"
                                    id="lastName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    placeholder="Last name"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                                >Email</label
                                >
                                <input
                                    type="text"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    placeholder="example@mail.com"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    for="Phone"
                                    className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                                >Phone</label
                                >
                                <input
                                    type="text"
                                    id="contact"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    for="address"
                                    className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                                >Address</label
                                >
                                <input
                                    type="text"
                                    id="address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    for="postal-code"
                                    className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                                >Postal Code</label
                                >
                                <input
                                    type="postal-code"
                                    id="postal-code"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    required
                                />
                            </div>

                            <div className="col-span-2 border-t border-slate-300"></div>

                            <div
                                className="md:flex-row lg:flex-row md:flex justify-start md:justify-between mb-6 sm:grid sm:grid-cols-1 sm:gap-1"
                            >
                                <div className="col-span-1">
                                    <Link to={"/cart"} className="mb-6 text-sm hover:underline"
                                    >&#8592; Return to Cart</Link   >
                                </div>
                            </div>
                            <div className="md:mt-0 lg:md-0 mt-3 mb-6">
                                <button
                                    type="submit"
                                    className="text-white w-full bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-600 font-normal text-sm px-16 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 float-left md:float-right"
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="col-span-1">
                        <h1>CART TOTAL DETAIL</h1>
                    </div>

                </div>
            </div>
        </section>
    )
}