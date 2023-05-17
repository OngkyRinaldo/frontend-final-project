export const Cart = () => {
    return (
        <section
            id="checkout"
            className="container max-h-full w-full min-w-full px-4 lg:px-12 mb-3 mt-2 lg:mt-10"
        >
            <h1
                className="px-4 mb-3 text-lg font-bold text-gray-900 dark:text-white hidden lg:flex"
            >
                Your bag
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1">
                    <div className="px-4 mx-auto pb-2 mb-2 lg:mb-6">
                        <a href="overview.html" className="lg:mb-6 text-base hover:underline"
                        >&#8592; Keep shopping</a
                        >
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="relative overflow-x-auto mb-12">
                        <table
                            id="table-guide-size"
                            className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                        >
                            <thead
                                className="text-xs border-b-4 border-slate-800 text-gray-900 uppercase dark:text-gray-400"
                            >
                                <tr>
                                    <th scope="col" className="px-1 py-4">Product</th>

                                    <th scope="col" className="px-1 py-4">Color</th>
                                    <th scope="col" className="px-1 py-4">Size</th>
                                    <th scope="col" className="px-1 py-4">QTY</th>
                                    <th scope="col" className="px-1 py-4"></th>
                                    <th scope="col" className="px-1 py-4 text-end">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-800">
                                <tr
                                    className="bg-white dark:bg-gray-800 border-b border-slate-300 hover:bg-slate-200"
                                >
                                    <th
                                        scope="row"
                                        className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        <div
                                            className="flex items-start md:items-center justify-start"
                                        >
                                            <div className="flex flex-col">
                                                <img
                                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                                                    alt="item1"
                                                    className="w-20 h-24 object-cover"
                                                />
                                                <div className="md:hidden">
                                                    <select name="qty" id="qty" className="border-slate-200">
                                                        {Array.from({ length: 100 }, (_, i) => (
                                                            <option key={i + 1} value={i + 1}>
                                                                {i + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="flex flex-col pl-3 w-full">
                                                <h3
                                                    className="font-semibold text-slate-800 font-lg mb-1 truncate"
                                                >
                                                    Air Jordan 1 Mid Reverse Bred Kids
                                                </h3>
                                                <span
                                                    className="text-slate-800 font-semibold text-normal mb-1 md:hidden"
                                                >
                                                    $207</span
                                                >
                                                <span
                                                    className="text-slate-600 font-normal mb-1 text-sm md:hidden"
                                                >
                                                    Pri White</span
                                                >
                                                <span
                                                    className="text-slate-600 font-normal mb-1 text-sm md:hidden"
                                                >
                                                    EU 45| US 12| UK 11</span
                                                >
                                                <span className="flex item-center justify-end">
                                                    <a
                                                        href="#"
                                                        className="border-b border-slate-800 hover:border-none md:hidden"
                                                    >
                                                        Delete
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-1 py-4">Pri White</td>
                                    <td className="px-1 py-4">EU 45| US 12| UK 11</td>
                                    <td className="px-0 py-2 md:py-4">
                                        <div className="md:hidden">
                                            <select name="qty" id="qty" className="border-slate-200">
                                                {Array.from({ length: 100 }, (_, i) => (
                                                    <option key={i + 1} value={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </td>
                                    <td className="px-1 py-4">
                                        <a
                                            href="#"
                                            className="border-b border-slate-800 hover:border-none"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                    <td className="px-1 py-4 text-end font-semibold">$207</td>
                                </tr>
                                <tr
                                    className="bg-white dark:bg-gray-800 border-b border-slate-300 hover:bg-slate-200"
                                >
                                    <th
                                        scope="row"
                                        className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        <div
                                            className="flex items-start md:items-center justify-start"
                                        >
                                            <div className="flex flex-col">
                                                <img
                                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                                                    alt="item1"
                                                    className="w-20 h-24 object-cover"
                                                />
                                                <div className="md:hidden">
                                                    <select name="qty" id="qty" className="border-slate-200">
                                                        {Array.from({ length: 100 }, (_, i) => (
                                                            <option key={i + 1} value={i + 1}>
                                                                {i + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex flex-col pl-3 w-full">
                                                <h3
                                                    className="font-semibold text-slate-800 font-lg mb-1 truncate"
                                                >
                                                    Air Jordan 1 Mid Reverse Bred Kids
                                                </h3>
                                                <span
                                                    className="text-slate-800 font-semibold text-normal mb-1 md:hidden"
                                                >
                                                    $207</span
                                                >
                                                <span
                                                    className="text-slate-600 font-normal mb-1 text-sm md:hidden"
                                                >
                                                    Pri White</span
                                                >
                                                <span
                                                    className="text-slate-600 font-normal mb-1 text-sm md:hidden"
                                                >
                                                    EU 45| US 12| UK 11</span
                                                >
                                                <span className="flex item-center justify-end">
                                                    <a
                                                        href="#"
                                                        className="border-b border-slate-800 hover:border-none md:hidden"
                                                    >
                                                        Delete
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-1 py-4">Pri White</td>
                                    <td className="px-1 py-4">EU 45| US 12| UK 11</td>
                                    <td className="px-0 py-2 md:py-4">
                                        <div className="md:hidden">
                                            <select name="qty" id="qty" className="border-slate-200">
                                                {Array.from({ length: 100 }, (_, i) => (
                                                    <option key={i + 1} value={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </td>
                                    <td className="px-1 py-4">
                                        <a
                                            href="#"
                                            className="border-b border-slate-800 hover:border-none"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                    <td className="px-1 py-4 text-end font-semibold">$207</td>
                                </tr>
                                <tr
                                    className="bg-white dark:bg-gray-800 border-b border-slate-300 hover:bg-slate-200"
                                >
                                    <th
                                        scope="row"
                                        className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        <div
                                            className="flex items-start md:items-center justify-start"
                                        >
                                            <div className="flex flex-col">
                                                <img
                                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                                                    alt="item1"
                                                    className="w-20 h-24 object-cover"
                                                />
                                                <div className="md:hidden">
                                                    <select name="qty" id="qty" className="border-slate-200">
                                                        {Array.from({ length: 100 }, (_, i) => (
                                                            <option key={i + 1} value={i + 1}>
                                                                {i + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex flex-col pl-3 w-full">
                                                <h3
                                                    className="font-semibold text-slate-800 font-lg mb-1 truncate"
                                                >
                                                    Air Jordan 1 Mid Reverse Bred Kids
                                                </h3>
                                                <span
                                                    className="text-slate-800 font-semibold text-normal mb-1 md:hidden"
                                                >
                                                    $207</span
                                                >
                                                <span
                                                    className="text-slate-600 font-normal mb-1 text-sm md:hidden"
                                                >
                                                    Pri White</span
                                                >
                                                <span
                                                    className="text-slate-600 font-normal mb-1 text-sm md:hidden"
                                                >
                                                    EU 45| US 12| UK 11</span
                                                >
                                                <span className="flex item-center justify-end">
                                                    <a
                                                        href="#"
                                                        className="border-b border-slate-800 hover:border-none md:hidden"
                                                    >
                                                        Delete
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-1 py-4">Pri White</td>
                                    <td className="px-1 py-4">EU 45| US 12| UK 11</td>
                                    <td className="px-0 py-2 md:py-4">
                                        <div className="md:hidden">
                                            <select name="qty" id="qty" className="border-slate-200">
                                                {Array.from({ length: 100 }, (_, i) => (
                                                    <option key={i + 1} value={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </td>
                                    <td className="px-1 py-4">
                                        <a
                                            href="#"
                                            className="border-b border-slate-800 hover:border-none"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                    <td className="px-1 py-4 text-end font-semibold">$207</td>
                                </tr>
                            </tbody>
                        </table>

                        <div
                            className="flex items-center justify-between md:justify-end mt-2 mb-4"
                        >
                            <h3 className="md:mr-20 font-bold text-lg">Subtotal</h3>
                            <span className="ml-20 text-lg font-semibold">$1071</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-end">
                            <a
                                href="payment.html"
                                className="bg-slate-900 text-white font-semibold text-base text-center py-3 w-full md:w-1/3 md:px-28 hover:opacity-75"
                            >Checkout</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}