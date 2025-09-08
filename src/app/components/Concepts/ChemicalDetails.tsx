import React, { ReactNode } from 'react';
import Article from '../Article';
import Image, { StaticImageData } from 'next/image';

const ChemicalDetails = ({
    content1,
    content2,
    title,
    img1,
    img2,
    bg,
}: {
    title: ReactNode;
    content1: ReactNode;
    content2: ReactNode;
    img1: StaticImageData;
    img2: StaticImageData;
    bg?: boolean;
}) => {
    return (
        <section className='section'>
            <Article title={title} content1={content1} content2={content2} />
            <div
                className={`mt-12 flex xl:justify-between justify-center rounded-secondary items-center xl:flex-nowrap gap-6 flex-wrap ${
                    bg ? 'bg-primary' : ''
                }`}>
                <Image src={img1} alt='Chemistry' className='max-w-[588px] object-cover' />
                <Image src={img2} alt='Chemical Structure' className='max-w-[588px] object-cover' />
            </div>
        </section>
    );
};

export default ChemicalDetails;
