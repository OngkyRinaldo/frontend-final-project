import { Link, useNavigate } from 'react-router-dom';

export const ProductsList = ({ product }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`/productDetails/${product.id}`)}>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center'>
                <img
                    className='rounded-t-lg h-52 object-cover sm:w-full md:rounded-lg'
                    src={product.image}
                    alt={product.title}
                />
                <div className='p-1 '>
                    <h5 className='mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
                        {product.title}
                    </h5>

                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        $249
                    </p>
                </div>
            </div>
        </button>
    );
};
