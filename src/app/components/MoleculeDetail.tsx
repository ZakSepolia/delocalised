import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import CurvedArrow from 'asset/img/curved-arrow.png';
const MoleculeDetail = ({
    img,
    content,
    revert,
    imgWidth,
    imgHeight,
    curvedArrow,
}: {
    img: StaticImageData;
    content: ReactNode;
    revert?: boolean;
    imgWidth?: number;
    imgHeight?: number;
    curvedArrow?: boolean;
}) => {
    return (
        <article
            className={`relative flex justify-center xl:justify-between items-center xl:flex-nowrap flex-wrap gap-6 ${
                revert ? 'flex-row-reverse' : ''
            }`}>
            <Image src={img} width={imgWidth} height={imgHeight} alt='Molecule Detail' />
            <div
                className={`flex items-center flex-col ${
                    revert ? 'justify-start' : 'justify-end'
                }`}>
                {content}
            </div>
            {curvedArrow && (
                <Image
                    src={CurvedArrow}
                    alt='Curved Arrow'
                    className='absolute bottom-0 left-[207px] xl:block hidden'
                />
            )}
        </article>
    );
};

export default MoleculeDetail;
