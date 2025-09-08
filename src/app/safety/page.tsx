import React from 'react';
import GreenCard from '../components/HowItWorks/GreenCard';
import { SAFETY_FEATURES } from '../constant';
import PageTitle from '../components/PageTitle';

const Safety = () => {
    return (
        <>
            <PageTitle title='Safety' />
            <section className='section flex flex-col gap-3'>
                {SAFETY_FEATURES.map((item) => (
                    <GreenCard
                        img={item.img}
                        title={item.title}
                        content={item.content}
                        className={item.className}
                        key={item.title}
                    />
                ))}
            </section>
        </>
    );
};

export default Safety;
