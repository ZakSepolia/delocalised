import React from 'react';
import Hexagon from 'asset/img/hexagon-1.png';
import Hexagon1 from 'asset/img/hexagon-2.png';
import Hexagon2 from 'asset/img/hexagon-3.png';
import Benzene from 'asset/img/Benzene 1.png';
import Image from 'next/image';
const imgs = [Hexagon, Hexagon1, Hexagon2, Benzene];
const Chemical = () => {
    return (
        <section className='grid md:grid-cols-4 grid-cols-2 py-12 px-2 md:gap-6 gap-[12px]'>
            {imgs.map((img) => (
                <div
                    key={img.src}
                    className='rounded-secondary py-6 px-8 md:p-6 xl:px-[55px] xl:py-[43px] bg-primary'>
                    <Image
                        src={img}
                        alt='Chemical element'
                        className='w-[97px] h-[115px]  md:hidden block mx-auto'
                    />
                    <Image src={img} alt='Chemical element' className='hidden md:block mx-auto' />
                </div>
            ))}
        </section>
    );
};

export default Chemical;
