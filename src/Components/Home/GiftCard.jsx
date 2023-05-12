export const GiftCard = () => {
    return (
        <section className=' shadow-lg  rounded-lg container max-h-full mx-auto mt-200 sm:mt-16 px-4 pb-30 mt-5'>
            <div className='md:flex md:gap-4 md:mt-16 '>
                <div className='md:w-1/2 '>
                    <img
                        src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ---Amsterdam---Gift-Card-0599_v3_2_1200x.jpg?v=1668095564'
                        alt='gift card'
                        className='rounded-lg shadow-lg md:h-3/4 md:object-cover '
                    />
                    <h2 className='text-xl font-semibold my-2 w-fit hover:border-b-2 hover:border-slate-600'>
                        ETQ Gift Card
                    </h2>
                    <p className='text-sm text-left text-slate-600'>
                        Give the give of choice
                    </p>
                </div>
                <div className='mt-5 md:mt-0 md:w-1/2'>
                    <img
                        src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-OfficeOktober-0414_crob_220_b557e12e-a522-4654-b267-96e959e9a767_1200x.png?v=1678007584'
                        alt='New in'
                        className='rounded-lg shadow-lg md:h-3/4 md:object-cover'
                    />
                    <h2 className='text-xl  font-semibold my-2 w-fit hover:border-b-2 hover:border-slate-600'>
                        New In
                    </h2>
                    <p className='text-sm text-left text-slate-600'>
                        Discover the latest additions.
                    </p>
                </div>
            </div>
        </section>
    );
};
