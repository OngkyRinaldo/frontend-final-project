import { Link } from 'react-router-dom';

export const ProductDetail = () => {
    return (
        <main class='container w-screen mx-0 max-h-full min-h-full min-w-full mb-10'>
            <div class='grid grid-cols-1 md:gap-4 md:grid-cols-3 px-5'>
                <div class='col-span-2 '>
                    <div class='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div class='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                class='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
                                alt=''
                            />
                        </div>
                        <div class='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                class='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
                                alt=''
                            />
                        </div>
                        <div class='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                class='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
                                alt=''
                            />
                        </div>
                        <div class='group overflow-hidden hover:scale-95 transition duration-500 ease-in-out'>
                            <img
                                class='h-auto max-w-full rounded-lg group-hover:scale-125 group-hover:rotate-6 transition duration-500 ease-in-out'
                                src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div class='col-span-1'>
                    <div class='m-0.5 md:m-10'>
                        <h2 class='font-bold text-slate-900 text-xl'>
                            Produk Name
                        </h2>
                        <span class='font-medium text-slate-500 text-base'>
                            Produk Material
                        </span>
                        <div class='flex items-center justify-between py-2'>
                            <h3 class='font-bold text-slate-400 text-lg'>
                                <span class='line-through pr-3'>$208</span>
                                <span class='text-slate-900'>$159</span>
                            </h3>
                            <h3 class='font-medium text-orange-500 text-lg'>
                                Sale <span> 15%</span>
                            </h3>
                        </div>
                        <div class='flex items-center justify-between'>
                            <div class='w-full pr-2'>
                                <select
                                    id='color'
                                    class='bg-slate-50 font-medium border border-slate-300 text-slate-800 text-base focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                >
                                    <option selected>Select Color</option>
                                    <option value='White'>White</option>
                                    <option value='Black'>Black</option>
                                    <option value='Brown'>Brown</option>
                                    <option value='Maroon'>Maroon</option>
                                </select>
                            </div>
                            <div class='w-full pl-2'>
                                <select
                                    id='size'
                                    class='bg-slate-50 font-medium border border-slate-300 text-slate-800 text-base focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500'
                                >
                                    <option selected>Select Size</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                    <option value='XXL'>XXL</option>
                                </select>
                            </div>
                        </div>
                        <div class='flex items-center justify-center py-2'>
                            <button class='rounded-lg bg-slate-900 w-full py-3 text-white font-bold text-base hover:opacity-75'>
                                Add to bag
                            </button>
                        </div>
                        <div class='flex item-center justify-center'>
                            <Link
                                to='/sizeGuide'
                                class='text-slate-500 font-semibold text-sm border-b border-slate-800 hover:border-none'
                            >
                                How to find my ETQ
                            </Link>
                        </div>
                        <div class='mt-2'>
                            <h2 class='font-medium text-lg text-slate-800'>
                                Description
                            </h2>
                            <p class='text-sm text-justify leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eius quaerat nobis blanditiis.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, reprehenderit. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Inventore laboriosam veniam laborum optio?
                            </p>
                            <h2 class='font-medium mt-2 text-base text-slate-800'>
                                Specification
                            </h2>
                            <p class='text-sm text-justify leading-relaxed'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eius quaerat nobis blanditiis.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, reprehenderit. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
