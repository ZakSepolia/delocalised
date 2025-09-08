import React from 'react';
import PageTitle from '../components/PageTitle';
import { BUY_FEATURES } from '../constant';
import GreenCard from '../components/HowItWorks/GreenCard';

const BuyNow = () => {
    return (
        <>
            <PageTitle title='Buy BNZ' />
            <section className='section'>
                <h3 className='font-bold text-2xl md:text-[40px] leading-[48.1px] text-center mb-12'>
                    How to buy <span className='text-primary'>BNZ</span>
                </h3>
                <div className='flex flex-col gap-3'>
                    {BUY_FEATURES.map((item) => (
                        <GreenCard
                            img={item.img}
                            title={item.title}
                            content={item.content}
                            key={item.title}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default BuyNow;
