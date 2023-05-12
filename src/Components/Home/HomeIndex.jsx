import { Hero } from './Hero';
import { ProductList } from './ProductList';
import { GiftCard } from './GiftCard';

export const HomeIndex = () => {
    return (
        <>
            <main className='w-full min-h-full  '>
                {/* hero section start */}
                <Hero />
                {/* hero section end  */}

                {/* Product List start */}
                <ProductList />
                {/* Product List end  */}

                {/* GiftCard start */}
                <GiftCard />
                {/* GiftCard End */}
            </main>
        </>
    );
};
