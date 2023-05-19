import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPages = () => {
    return (
        <>
            <div className='text-red-800 max-w-sm container mx-auto h-fit my-10 shadow-lg shadow-slate-500 rounded-lg py-16 px-16 text-center text-4xl font-extrabold'>
                404 not found
                <Link to='/' className='block text-blue-700 mt-10 underline'>
                    Back To Home
                </Link>
            </div>
        </>
    );
};
