import { Link } from "react-router-dom"
import HelpAsk from "../../../assets/img/Help/overview.webp"
import { Footer } from '../footer/Footer';

export const SizeGuide = () => {
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
                        class="flex flex-wrap md:flex lg:grid lg:grid-cols-8 px-4 mx-auto pb-2 mb-6"
                    >
                        <div class="col-span-1">
                            <Link to={"/overview"} class="mb-6 text-sm hover:underline"
                            >&#8592; Return</Link >
                        </div>
                        <div class="col-span-4">
                            <h2
                                class="mb-3 mt-10 lg:mt-0 text-md font-bold text-gray-900 dark:text-white"
                            >
                                Size guide
                            </h2>
                            <div class="relative w-full overflow-x-auto mb-12">
                                <table
                                    id="table-guide-size"
                                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                                >
                                    <thead
                                        class="text-xs border-b border-slate-300 text-gray-900 uppercase dark:text-gray-400"
                                    >
                                        <tr>
                                            <th scope="col" class="px-1 py-4">EU</th>
                                            <th scope="col" class="px-1 py-4 text-end">36</th>
                                            <th scope="col" class="px-1 py-4 text-end">37</th>
                                            <th scope="col" class="px-1 py-4 text-end">38</th>
                                            <th scope="col" class="px-1 py-4 text-end">39</th>
                                            <th scope="col" class="px-1 py-4 text-end">40</th>
                                            <th scope="col" class="px-1 py-4 text-end">41</th>
                                            <th scope="col" class="px-1 py-4 text-end">42</th>
                                            <th scope="col" class="px-1 py-4 text-end">43</th>
                                            <th scope="col" class="px-1 py-4 text-end">44</th>
                                            <th scope="col" class="px-1 py-4 text-end">45</th>
                                            <th scope="col" class="px-1 py-4 text-end">46</th>
                                            <th scope="col" class="px-1 py-4 text-end">47</th>
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
                                                US M
                                            </th>
                                            <td class="px-1 py-4 text-end">3</td>
                                            <td class="px-1 py-4 text-end">4</td>
                                            <td class="px-1 py-4 text-end">5</td>
                                            <td class="px-1 py-4 text-end">6</td>
                                            <td class="px-1 py-4 text-end">7</td>
                                            <td class="px-1 py-4 text-end">8</td>
                                            <td class="px-1 py-4 text-end">9</td>
                                            <td class="px-1 py-4 text-end">10</td>
                                            <td class="px-1 py-4 text-end">11</td>
                                            <td class="px-1 py-4 text-end">12</td>
                                            <td class="px-1 py-4 text-end">13</td>
                                            <td class="px-1 py-4 text-end">14</td>
                                        </tr>
                                        <tr
                                            class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                        >
                                            <th
                                                scope="row"
                                                class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                UK M
                                            </th>
                                            <td class="px-1 py-4 text-end">2</td>
                                            <td class="px-1 py-4 text-end">3</td>
                                            <td class="px-1 py-4 text-end">4</td>
                                            <td class="px-1 py-4 text-end">5</td>
                                            <td class="px-1 py-4 text-end">6</td>
                                            <td class="px-1 py-4 text-end">7</td>
                                            <td class="px-1 py-4 text-end">8</td>
                                            <td class="px-1 py-4 text-end">9</td>
                                            <td class="px-1 py-4 text-end">10</td>
                                            <td class="px-1 py-4 text-end">11</td>
                                            <td class="px-1 py-4 text-end">12</td>
                                            <td class="px-1 py-4 text-end">13</td>
                                        </tr>
                                        <tr
                                            class="bg-white dark:bg-gray-800 border-b border-slate-300"
                                        >
                                            <th
                                                scope="row"
                                                class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                CM
                                            </th>
                                            <td class="px-1 py-4 text-end">23,8</td>
                                            <td class="px-1 py-4 text-end">24,4</td>
                                            <td class="px-1 py-4 text-end">25,1</td>
                                            <td class="px-1 py-4 text-end">23,8</td>
                                            <td class="px-1 py-4 text-end">24,4</td>
                                            <td class="px-1 py-4 text-end">25,1</td>
                                            <td class="px-1 py-4 text-end">25,7</td>
                                            <td class="px-1 py-4 text-end">26,4</td>
                                            <td class="px-1 py-4 text-end">27</td>
                                            <td class="px-1 py-4 text-end">27,7</td>
                                            <td class="px-1 py-4 text-end">28,3</td>
                                            <td class="px-1 py-4 text-end">28,9</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-span-2 col-start-7">
                            <h2 class="mb-3 text-md font-bold text-gray-900 dark:text-white">
                                How to measure
                            </h2>
                            <p class="text-sm font-base text-justify">
                                Let’s find your perfect fit. Place a sheet of paper on the floor
                                against the wall and put your feet (with socks) on it, heels
                                against the wall. Make sure you lean on your feet with full power
                                when measuring. Now you simply draw a line at the end of the
                                biggest foot. Measure the distance with a ruler and find the size
                                that matches it: see size table. Are you in between sizes? In that
                                case, we suggest taking the bigger size.
                                <Link to={"#"} class="underline">service@fsd-kelompok9.com</Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}