import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

const ChemicalCard = ({
    title,
    img,
    color,
    name,
}: {
    title?: ReactNode;
    img: StaticImageData;
    color?: boolean;
    name?: string;
}) => {
    return (
        <article
            className={`${
                color ? 'bg-primary' : 'bg-white border border-[#181818]/5'
            } rounded-secondary p-6`}>
            {title}
            <Image src={img} alt='BNZ chemical' />
            {name && (
                <p className='mt-3 font-medium text-sm text-[#181818]/45 text-center'>{name}</p>
            )}
        </article>
    );
};

export default ChemicalCard;
