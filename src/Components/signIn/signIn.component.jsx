
import { Link } from "react-router-dom"

export const SignIn = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="container h-auto px-3 py-4 flex flex-col sm:flex-row mt-8">
          <div className="lg:w-1/4 md:1/4 sm:w-1/4 mb-3 sm:mb-1">
            <div className="grid grid-cols-1">
              <a href="#" className="text-xl font-semibold pb-5">My cccount</a>

              <Link
                to={"/signUp"}
                className="text-sm hover:underline mt-3 md:mt-10 lg:mt-10"
              >Create an account</Link >
            </div>
          </div>
          <div className="lg:w-3/4 sm:w-3/4 md:w-3/4 pb-3">
            <h2 className="text-xl font-semibold pb-1 md:pb-5 lg:pb-5">Login</h2>
            <form
              className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-1 md:gap-4 lg:gap-6 mt-3 md:mt-10 lg:mt-10"
            >
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                >Email</label
                >
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block lg:w-2/3 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="password"
                  className="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
                >Password</label
                >
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full lg:w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  required
                />
              </div>
              <hr className="border-t border-slate-300 py-3" />
              <div
                className="md:flex-row lg:flex-row md:flex justify-start md:justify-between mb-6 sm:grid sm:grid-cols-1 sm:gap-1"
              >
                <div>
                  <Link
                    to={"/lostPassword"}
                    className="text-sm font-normal hover:underline text-gray-900 dark:text-gray-300"
                  >Lost your password?
                  </Link>
                </div>
                <div className="md:mt-0 lg:md-0 mt-3">
                  <button
                    type="submit"
                    className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-600 font-normal text-sm px-5 py-2.5 lg:px-16 md:px-12 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 float-left"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
