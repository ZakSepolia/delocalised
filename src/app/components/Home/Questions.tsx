import React from 'react';
import { CARDS } from '../../constant';
import Card from '../Card';

const Questions = () => {
    return (
        <section className='section'>
            <h3 className='text-center text-[32px] leading-10 md:text-[40px] font-bold mb-6'>
                Any Questions? <br className='md:hidden inline'/><span className='text-primary'>Look Here</span>
            </h3>
            <p className='max-w-[551px] mx-auto mb-12 font-normal text-sm md:text-base'>
                Find out key information about Benzene you didn&apos;t know like how it&apos;s found
                in forest fires, volcanoes, crude oil, gasoline, and cigarette smoke.
            </p>
            <div className='flex flex-col gap-4'>
                {CARDS.map((card) => (
                    <Card {...card} key={card.title} />
                ))}
            </div>
        </section>
    );
};

export default Questions;
