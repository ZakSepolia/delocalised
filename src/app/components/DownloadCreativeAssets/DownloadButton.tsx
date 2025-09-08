'use client';
import { Button } from 'components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import DownloadIcon from 'asset/img/download.png';
import Link from 'next/link';
import { Download } from 'lucide-react';

const DownloadButton = ({ jpg, link }: { jpg?: boolean; link: string }) => {
    const [hover, setHover] = useState(false);
    return (
        <Link href={link} target='_blank' className='w-full' download='Benzene'>
            <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='rounded-full flex items-center h-auto text-primary text-base py-3 w-full hover:bg-linear hover:scale-110 outline-linear hover:text-white'>
                <div className='flex items-center gap-2'>
                    Download {jpg ? 'JPG' : 'PNG'}
                    <Download className='w-5 h-5' color={hover ? '#ffffff' : '#B7D349'} />
                </div>
            </Button>
        </Link>
    );
};

export default DownloadButton;
