import { cn } from 'lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

const GreenCard = ({
    img,
    title,
    content,
    className,
}: {
    img: StaticImageData;
    title: string;
    content: ReactNode;
    className?: string;
}) => {
    return (
        <article className={cn('rounded-secondary bg-linear p-6', className)}>
            <Image src={img} alt='Bnz details' className='mb-6' />
            <p className='font-bold text-2xl text-white mb-4'>{title}</p>
            {content}
        </article>
    );
};

export default GreenCard;
