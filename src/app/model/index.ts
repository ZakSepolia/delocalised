import { ReactNode } from 'react';

export interface INavItemsProps {
    title: string;
    link: string;
    type: string;
    children?: Child[];
}

interface Child {
    title: string;
    link: string;
    type: string;
}
export enum NAV_ITEMS_TYPE {
    LINK = 'link',
    DROPDOWN = 'dropdown',
}
export interface ICardProps {
    title: string;
    children: ReactNode;
}
