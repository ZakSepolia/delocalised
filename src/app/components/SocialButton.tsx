'use client';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button, ButtonProps } from 'components/ui/button';
import { cn } from 'lib/utils';

type SocialButtonProps = ButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        label: string | ReactNode;
        className?: string;
    };
const SocialButton = ({ label, className, ...btnProps }: SocialButtonProps) => {
    return (
        <Button
            asChild
            {...btnProps}
            className={cn(
                'relative rounded-full flex items-center m-[1px] h-auto text-primary text-base bg-white after:content-[""] after:absolute after:inset-0 after:bg-linear after:-m-[1px] after:-z-[1] after:rounded-full',
                className
            )}>
            {label}
        </Button>
    );
};

export default SocialButton;
