import { NewProductList } from './NewProductList';

export const IndexNewProduct = () => {
    return (
        <main className='w-full min-h-full mt-12'>
            <section className='container mx-auto min-h-screen p-2'>
                <h2 className='text-2xl font-semibold mb-3 text-center'>
                    Latest Products
                </h2>
                <NewProductList />
            </section>
        </main>
    );
};
