import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Video = ({ img1, img2 }: { img1: StaticImageData; img2: StaticImageData }) => {
    return (
        <div className='relative'>
            <Image className='my-12' src={img1} alt='Benzene video' />
            <Image
                className='my-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                src={img2}
                alt='Benzene video'
            />
        </div>
    );
};

export default Video;
