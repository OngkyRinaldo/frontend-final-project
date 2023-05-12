import { ProductsList } from './ProductsList';

export const IndexProducts = () => {
    return (
        <main className='w-full min-h-full mt-12'>
            <section className='container mx-auto min-h-screen p-2'>
                <h2 className='text-2xl font-semibold mb-3 text-center'>
                    All Product
                </h2>
                <ProductsList />
            </section>
        </main>
    );
};
