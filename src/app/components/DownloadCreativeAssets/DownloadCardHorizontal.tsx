import Image, { StaticImageData } from 'next/image';
import DownloadButton from './DownloadButton';
import { cn } from 'lib/utils';
const DownloadCardHorizontal = ({
    img,
    className,
    linkPNG,
    linkJPG,
}: {
    img: StaticImageData;
    className?: string;
    linkPNG: string;
    linkJPG: string;
}) => {
    return (
        <article className={cn('rounded-secondary bg-primary flex flex-col w-full', className)}>
            <div className='flex-1 flex justify-center items-center'>
                <Image src={img} alt='BNZ Coin' />
            </div>
            <div className='p-4 flex flex-col md:flex-row gap-3'>
                <DownloadButton link={linkPNG} />
                <DownloadButton jpg link={linkJPG} />
            </div>
        </article>
    );
};

export default DownloadCardHorizontal;
