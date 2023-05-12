import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/img/Home/etq-amsterdam-logo-svg-vector.png';
import React from 'react';

export const Navigation = () => {
    return (
        <>
            <Navbar fluid={true} rounded={true} className='text-center'>
                <Link to='/'>
                    <img
                        src={logo}
                        className='mr-3 h-6 sm:h-9'
                        alt='Flowbite Logo'
                    />
                </Link>

                <div className='flex md:order-2'>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                alt='User settings'
                                img='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
                                rounded={true}
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className='block text-sm'>username</span>
                            <span className='block truncate text-sm font-medium'>
                                username@email.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item className='font-bold'>
                            <Link to={"signIn"}>Login/Sign up</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>Profile</Dropdown.Item>

                        <Dropdown.Item>
                            <Link to='#' className='flex font-bold'>
                                Cart
                                <div className='pl-2'>
                                    <span className=' bg-slate-800 text-white text-sm font-medium px-2.5 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                                        7
                                    </span>
                                </div>

                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item></Dropdown.Item>
                        <Dropdown.Item>Sign Out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link
                        to='/'
                        className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                        Home
                    </Link>
                    <Link
                        to='products'
                        className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                        Shop All
                    </Link>
                    <Link
                        to='newestProduct'
                        className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                        New In
                    </Link>
                    <Link
                        to='#'
                        id='search-trigger'
                        className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                        Search
                    </Link>
                    <div className='flex md:order-2 items-center justify-center ml-2'>
                        <Dropdown arrowIcon={true} inline={true} label='Help '>
                            <Dropdown.Item>
                                <Link
                                    to='overview'
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                >
                                    Overview
                                </Link>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <Outlet />
        </>
    );
};
