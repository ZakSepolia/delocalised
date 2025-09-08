import React from 'react';
import { ICardProps } from '../model';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from 'components/ui/accordion';
const Card = ({ title, children }: ICardProps) => {
    return (
        <article className='p-6 shadow-card rounded-[24px] border'>
            <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='font-bold text-base md:text-[18px] leading-[21.78px] data-[state=open]:mb-4'>
                        {title}
                    </AccordionTrigger>
                    <AccordionContent className='text-sm md:text-base font-normal leading-6'>
                        {children}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </article>
    );
};

export default Card;
