import React from 'react';
import BnzImg from 'asset/img/bnz-img.png';
import Image from 'next/image';
const BnzStrange = () => {
    return (
        <section className='px-6 py-10 lg:px-[20px] lg:py-40 md:block hidden'>
            <div className='bg-linear lg:h-[320px] rounded-primary w-full relative px-12 py-12 lg:py-24 lg:px-24'>
                <h3 className='text-white  text-2xl md:text-2xl lg:text-3xl xl:text-[40px] font-bold mb-8'>
                    Delocalised seem strange.
                </h3>
                <p className='text-base font-semibold md:max-w-[400px] xl:max-w-[591px] text-white'>
                    The illustrations before of Benzene is a Ben exclusive. Benzene is usually
                    represented like this.
                </p>
                <Image
                    src={BnzImg}
                    alt='BNZ image'
                    className='absolute lg:w-[500px] md:w-[300px] md:-top-[20px] lg:-top-[50px] xl:-top-[90px] right-0 hidden md:block'
                />
            </div>
        </section>
    );
};

export default BnzStrange;
