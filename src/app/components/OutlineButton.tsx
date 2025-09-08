'use client';
import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { Button, ButtonProps } from 'components/ui/button';
import ArrowUpRight from 'asset/img/up-right-arrow.png';
import { cn } from 'lib/utils';
import Image from 'next/image';
type OutlineButtonProps = ButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        label: string | ReactNode;
        className?: string;
        btnClassName?: string;
        arrow?: boolean;
    };
const OutlineButton = ({
    label,
    className,
    arrow = true,
    btnClassName,
    ...btnProps
}: OutlineButtonProps) => {
    const [hover, setHover] = useState(false);
    return (
        <div>
            <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                {...btnProps}
                className={cn(
                    'relative rounded-primary m-[1px] flex items-center gap-[10px] text-primary text-base bg-white after:content-[""] after:absolute after:inset-0 after:bg-linear after:-m-[1px] after:-z-[1] after:rounded-primary cursor-pointer hover:!bg-white group p-3 md:py-4 md:px-8',
                    btnClassName
                )}>
                <span
                    className={cn(
                        'font-bold text-primary bg-linear bg-clip-text text-transparent text-sm md:text-base',
                        'group-hover:bg-white group-hover:bg-none',
                        className
                    )}>
                    {label}
                </span>
                {arrow &&
                    (hover ? (
                        <Image src={ArrowUpRight} alt='arrow up right' />
                    ) : (
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
                    ))}
            </Button>
        </div>
    );
};

export default OutlineButton;
