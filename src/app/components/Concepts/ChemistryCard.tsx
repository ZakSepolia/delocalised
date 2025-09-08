import Image, { StaticImageData } from 'next/image';
import React from 'react';

const ChemistryCard = ({
    title,
    desc,
    img,
}: {
    title: string;
    desc: string;
    img: StaticImageData;
}) => {
    return (
        <article className='p-6 bg-linear h-[470px] md:h-[553px] w-[588px] rounded-secondary flex flex-col'>
            <div className='flex-1'>
                <p className='font-bold text-2xl text-white mb-4'>{title}</p>
                <p className='text-white text-base font-semibold'>{desc}</p>
            </div>
            <Image src={img} alt={title} width={540} height={337} />
        </article>
    );
};

export default ChemistryCard;
