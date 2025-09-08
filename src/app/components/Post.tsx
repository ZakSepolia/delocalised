import React, { ReactNode } from 'react';

const Post = ({ title, desc }: { title?: string; desc: string | ReactNode }) => {
    return (
        <article>
            {title && <h5 className='font-bold text-2xl md:text-[40px] mb-8'>{title}</h5>}
            {desc}
        </article>
    );
};

export default Post;
