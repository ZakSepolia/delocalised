import Image, { StaticImageData } from 'next/image';
import DownloadButton from './DownloadButton';
const DownloadCard = ({
    img,
    linkPNG,
    linkJPG,
}: {
    img: StaticImageData;
    linkPNG: string;
    linkJPG: string;
}) => {
    return (
        <article className='rounded-secondary bg-primary'>
            <div className='flex justify-center items-center'>
                <Image src={img} alt='BNZ Coin' />
            </div>
            <div className='p-4 flex flex-col md:flex-row xl:flex-col gap-3'>
                <DownloadButton link={linkPNG} />
                <DownloadButton jpg link={linkJPG} />
            </div>
        </article>
    );
};

export default DownloadCard;
