'use client';
import { Button } from 'components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import ArrowWhite from 'asset/img/arrow-white.png';
const FeatureBtn = ({ title }: { title: string }) => {
    const [hover, setHover] = useState(false);
    return (
        <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='bg-transparent border border-white flex gap-[10px] items-center text-white font-bold text-base rounded-primary px-8 py-4 h-[55px] hover:text-primary'>
            {title}{' '}
            {hover ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='15'
                    viewBox='0 0 14 15'
                    fill='none'>
                    <path
                        d='M0.75 13.75L13.25 1.25M13.25 1.25H3.875M13.25 1.25V10.625'
                        stroke='url(#paint0_linear_1198_752)'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_1198_752'
                            x1='0.75'
                            y1='7.15909'
                            x2='13.2498'
                            y2='7.27099'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#6EAF4C' />
                            <stop offset='1' stopColor='#B7D349' />
                        </linearGradient>
                    </defs>
                </svg>
            ) : (
                <Image src={ArrowWhite} alt='Arrow' />
            )}
        </Button>
    );
};

export default FeatureBtn;
