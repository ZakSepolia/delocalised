'use client';
import React, { useState } from 'react';
import { TRANSACTION1, TRANSACTION2 } from '../constant';
import SocialButton from './SocialButton';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TransactionSocial = () => {
    const pathname = usePathname();
    const transations = [...TRANSACTION1, ...TRANSACTION2];
    const [hover, setHover] = useState(-1);
    const groupedItems = [];
    for (let i = 0; i < transations.length; i += 4) {
        groupedItems.push(transations.slice(i, i + 4));
    }
    return (
        <section className='hidden md:block'>
            <div className='mx-auto'>
                <div className='flex justify-center items-stretch flex-nowrap mb-2'>
                    {/* {TRANSACTION1.map((item) => (
                        <Link href={item.link} target='_blank' key={item.id}>
                            <SocialButton
                                onMouseEnter={() => setHover(item.id)}
                                onMouseLeave={() => setHover(-1)}
                                className={`${
                                    item.label ? 'py-1 px-2 md:py-2 md:px-6' : 'p-1 md:p-2'
                                }`}
                                label={
                                    <div className='flex gap-2'>
                                        {hover !== item.id ? (
                                            <Image src={item.image} alt='Bnz social' />
                                        ) : (
                                            <Image src={item.hover} alt='Bnz social' />
                                        )}
                                        {item.label}
                                    </div>
                                }
                            />
                        </Link>
                    ))} */}
                </div>
                <div className='flex justify-center items-center flex-nowrap md:pl-[46px]'>
                    <div className='hidden md:inline-block w-[46px]'></div>
                    {/* {TRANSACTION2.map((item) => (
                        <Link href={item.link} target='_blank' key={item.id}>
                            <SocialButton
                                onMouseEnter={() => setHover(item.id)}
                                onMouseLeave={() => setHover(-1)}
                                className={item.label ? 'py-1 px-2 md:py-2 md:px-6' : 'p-1 md:p-2'}
                                label={
                                    <div className='flex gap-2'>
                                        {hover !== item.id ? (
                                            <Image src={item.image} alt='Bnz social' />
                                        ) : (
                                            <Image src={item.hover} alt='Bnz social' />
                                        )}
                                        {item.label}
                                    </div>
                                }
                            />
                        </Link>
                    ))} */}
                </div>
            </div>
        </section>
    );
};

export default TransactionSocial;
