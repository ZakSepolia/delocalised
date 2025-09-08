import React, { ReactNode } from 'react';

const TheoryCard = ({ title, desc }: { title: string; desc: ReactNode }) => {
    return (
        <article className='rounded-secondary w-[588px] bg-primary p-6'>
            <p className='font-bold text-[18px]'>{title}</p>
            {desc}
        </article>
    );
};

export default TheoryCard;
