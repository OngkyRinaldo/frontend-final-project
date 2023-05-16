import { ProductsList } from './ProductsList';
import Products from '../../Products.json';

export const IndexProducts = () => {
    return (
        <main className='w-full min-h-full mt-12'>
            <section className='container mx-auto min-h-screen p-2'>
                <h2 className='text-2xl font-semibold mb-3 text-center'>
                    All Product
                </h2>

                <div className='grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4 mt-5 '>
                    {Products.map((product) => (
                        <ProductsList key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
};
