import { Button } from 'components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='w-screen h-screen flex flex-col gap-6 justify-center items-center'>
            <h3 className='text-3xl'>Page Not Found</h3>
            <Button className='w-32'>
                <Link href='/'>Home</Link>
            </Button>
        </div>
    );
};

export default NotFound;
