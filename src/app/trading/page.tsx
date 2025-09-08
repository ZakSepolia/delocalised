import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import { TRADING_QUESTIONS } from '../constant';

const Trading = () => {
    return (
        <>
            <PageTitle title='Trading' />
            <section className='section'>
                <h3 className='text-center text-2xl md:text-[40px] font-bold mb-12'>
                    <span className='text-primary'>BNZ</span> has the most transparent
                    <br />
                    trading in the world.
                </h3>
                <div className='flex flex-col gap-4'>
                    {TRADING_QUESTIONS.map((item) => (
                        <Card {...item} key={item.title} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Trading;
