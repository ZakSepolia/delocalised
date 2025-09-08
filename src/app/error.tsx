'use client';

import { Button } from 'components/ui/button';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className='m-auto w-screen h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center gap-6'>
                <h2 className='text-red-500'>Something went wrong!</h2>
                <Button className='hover:text-slate-800' onClick={() => reset()}>
                    Try again
                </Button>
            </div>
        </div>
    );
}
