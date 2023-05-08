import { Navbar, Dropdown, Avatar, Modal } from 'flowbite-react';
import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
    return (
        <>
            <Navbar fluid={true} rounded={true} className='text-center'>
                <Link to='/'>
                    <img
                        src='https://flowbite.com/docs/images/logo.svg'
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
                            <span className='block text-sm'>Bonnie Green</span>
                            <span className='block truncate text-sm font-medium'>
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='#'>
                                <span className='bg-slate-800 text-white text-sm font-medium px-2.5 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                                    7
                                </span>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign Out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to='/'>Home</Link>
                    <Link to='products'>Shop All</Link>
                    <Link to='newestProduct'>New In</Link>
                    <Link to='#'>Search</Link>
                    <div className='flex md:order-2 items-center justify-center ml-2'>
                        <Dropdown arrowIcon={true} inline={true} label='Help '>
                            <Dropdown.Item>
                                <Link to='overview'>Overview</Link>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <Outlet />
        </>
    );
};
