import React, { ReactNode } from 'react';

const Article = ({
    title,
    content1,
    content2,
    center,
}: {
    title: string | ReactNode;
    content1: string | ReactNode;
    content2: string | ReactNode;
    center?: boolean;
}) => {
    return (
        <div>
            <h3 className='font-bold text-[32px] md:text-[40px] leading-10'>{title}</h3>
            <div className='my-4 md:my-12 w-full h-[2px] bg-linear'></div>
            <div
                className={`flex gap-6 ${
                    center ? 'items-center' : 'items-start'
                } flex-wrap xl:flex-nowrap flex-row`}>
                {content1}
                {content2}
            </div>
        </div>
    );
};

export default Article;
