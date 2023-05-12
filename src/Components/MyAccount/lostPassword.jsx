import { Link } from "react-router-dom"

export const LostPassword = () => {
    return (
        <>
            <section className="container mx-auto">
                <div className="container h-auto px-3 py-4 flex flex-col sm:flex-row mt-8">
                    <div className="lg:w-1/4 md:1/4 sm:w-1/4 mb-3 sm:mb-1">
                        <div className="grid grid-cols-1">
                            <a href="#" className="text-xl font-semibold pb-1 md:pb-5"
                            >My account</a
                            >

                            <Link
                                to={"/register"}
                                className="text-sm hover:underline mt-3 md:mt-10"
                            >Create an account</Link >
                        </div>
                    </div>
                    <div className="lg:w-3/4 sm:w-3/4 md:w-3/4 pb-3">
                        <h2 className="text-xl font-semibold pb-1 md:pb-5">Lost password</h2>
                        <p className="text-sm my-3 md:my-10 w-full md:w-2/3 text-justify">
                            Lost your password? Please enter your username or email address.
                            You will receive a link to create a new password via email.
                        </p>
                        <form
                            className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-1 md:gap-4 lg:gap-6 mt-3 md:mt-10"
                        >
                            <div className="mb-3 md:mb-6">
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                                >Email</label
                                >
                                <input
                                    type="text"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full md:w-2/3 lg:w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    placeholder="example@mail.com"
                                    required
                                />
                            </div>

                            <hr className="border-t border-slate-300 py-0 md:py-3" />
                            <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="flex justify-center md:justify-start">
                                    <Link
                                        to={"/login"}
                                        className="text-sm font-normal hover:underline text-gray-900 dark:text-gray-300 p-1.5 md:p-0"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                                <Link
                                    to={"/login"}
                                    type="submit"
                                    className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-600 font-normal text-sm px-16 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 md:float-right"
                                >
                                    Reset password
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}