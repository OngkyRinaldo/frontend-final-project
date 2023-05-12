import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <main className='w-full min-h-full mx-auto'>
            {/* my account section start */}
            <section className='container mx-auto'>
                <div className='container h-auto px-3 py-4 flex flex-col sm:flex-row mt-8'>
                    <div className='lg:w-1/4 md:1/4 sm:w-1/4 mb-3 sm:mb-1'>
                        <div className='grid grid-cols-1'>
                            <h2 className='text-xl font-semibold pb-5'>
                                My Account
                            </h2>

                            <Link
                                to='/Login'
                                className='text-sm hover:underline mt-3 md:mt-10 lg:mt-10'
                            >
                                I already have an account
                            </Link>
                        </div>
                    </div>
                    <div className='w-full lg:w-3/4 md:w-full pb-3'>
                        <h2 className='text-xl font-semibold pb-5'>
                            Create Account
                        </h2>
                        <form className='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 md:gap-4 lg:gap-6 mt-3 md:mt-10 lg:mt-10'>
                            <div className='mb-6'>
                                <label
                                    htmlFor='firstName'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    First name
                                </label>
                                <input
                                    type='text'
                                    id='firstName'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    placeholder='First name'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='lastName'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Last name
                                </label>
                                <input
                                    type='text'
                                    id='lastName'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    placeholder='Last name'
                                    required
                                />
                            </div>

                            <div className='relative'>
                                <label
                                    htmlFor='lastName'
                                    className=' block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Birthday
                                </label>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pt-3 pointer-events-none'></div>
                                <input
                                    type='date'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='gender-group'
                                    className='block mb-4 mt-6 md:mt-0 lg:mt-0 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Gender
                                </label>
                                <div className='flex justify-start items-center my-auto'>
                                    <div className='mr-8'>
                                        <input
                                            id='male'
                                            type='radio'
                                            value=''
                                            name='gender-group'
                                            className='w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                        />
                                        <label
                                            htmlFor='male'
                                            className='ml-2 text-sm font-normal text-gray-900 dark:text-gray-300'
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            id='female'
                                            type='radio'
                                            value=''
                                            name='gender-group'
                                            className='w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                        />
                                        <label
                                            htmlFor='female'
                                            className='ml-2 text-sm font-normal text-gray-900 dark:text-gray-300'
                                        >
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-6'>
                                <label
                                    htmlFor='email'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Email
                                </label>
                                <input
                                    type='text'
                                    id='email'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    placeholder='example@mail.com'
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor='password'
                                    className='block mb-2 text-sm font-normal text-gray-900 dark:text-white'
                                >
                                    Password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                    required
                                />
                            </div>

                            <div className='col-span-2 border-t border-slate-300'></div>

                            <div className='md:flex-row lg:flex-row md:flex justify-start md:justify-between mb-6 sm:grid sm:grid-cols-1 sm:gap-1'>
                                <div className='flex items-center'>
                                    <input
                                        id='subscribe'
                                        type='checkbox'
                                        value=''
                                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slate-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-white dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                                        required
                                    />
                                    <label
                                        htmlFor='subscribe'
                                        className='ml-2 mt-3 text-sm font-normal text-gray-900 dark:text-gray-300'
                                    >
                                        Subscribe to newsletter
                                    </label>
                                </div>
                            </div>
                            <div className='md:mt-0 lg:md-0 mt-3 mb-6'>
                                <button
                                    type='submit'
                                    className='rounded-lg text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-600 font-normal text-sm px-16 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 float-left md:float-right'
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* batas form  */}
            </section>

            {/* section end */}
        </main>
    );
};
