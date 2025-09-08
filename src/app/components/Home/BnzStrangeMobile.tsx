import React from 'react';
import BnzImg from 'asset/img/bnz-strange-mobile.png';
import Image from 'next/image';
const BnzStrangeMobile = () => {
    return (
        <section className='block md:hidden relative py-3'>
            <div className='absolute top-3 left-5 right-5 p-6'>
                <h3 className='text-white text-[32px] font-bold mb-6 leading-10'>
                    Delocalised seem strange.
                </h3>
                <p className='text-base font-semibold text-white'>
                    The illustrations before of Benzene is a Ben exclusive. Benzene is usually
                    represented like this.
                </p>
            </div>
                <Image
                    src={BnzImg}
                    alt='BNZ image'
                    className='w-full object-cover'
                />
        </section>
    );
};

export default BnzStrangeMobile;
