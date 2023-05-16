import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export const Search = ({ placehoder, Products }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const handleFilter = (e) => {
        const search = e.target.value;
        setWordEntered(search);
        const newFilter = Products.filter((value) => {
            return value.title.toLowerCase().includes(search.toLowerCase());
        });
        search === '' ? setFilteredData('') : setFilteredData(newFilter);
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    };
    return (
        <div className=''>
            <div className=''>
                <input
                    type='text'
                    className='py-1 rounded-lg bg-white  text-lg p-[15px] h-7 w-72'
                    placeholder={placehoder}
                    onChange={handleFilter}
                    value={wordEntered}
                />
                <div className='inline -ml-7  '>
                    {filteredData.length === 0 ? (
                        <SearchOutlinedIcon />
                    ) : (
                        <CloseIcon
                            className='cursor-pointer'
                            onClick={clearInput}
                        />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className='shadow-lg rounded-lg  w-96 h-fit bg-white absolute mt-3'>
                    {filteredData.slice(0, 3).map((product) => {
                        return (
                            <Link
                                to={`/productDetails/${product.id}`}
                                key={product.id}
                                className='text-xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                            >
                                <p> {product.title}</p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
