import { Button, ButtonProps } from 'components/ui/button';
import { cn } from 'lib/utils';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type HexagonButtonProps = ButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        children: ReactNode;
        className?: string;
    };
const HexagonButton = ({ children, className, ...btnProps }: HexagonButtonProps) => {
    return (
        <Button className={cn('hexagon !outline-none', className)} {...btnProps}>
            {children}
        </Button>
    );
};

export default HexagonButton;
