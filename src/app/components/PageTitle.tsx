import React from 'react';

const PageTitle = ({ title }: { title: string }) => {
    return (
        <section className=' py-10 md:py-[112px] bg-linear'>
            <h2 className='text-center font-bold text-3xl md:text-[40px] lg:text-[60px] xl:text-[88px] text-white'>
                {title}
            </h2>
        </section>
    );
};

export default PageTitle;
