import React from 'react';
import ReactPlayer from 'react-player';
import PlayBtn from 'asset/img/play-btn.png';
import Image from 'next/image';

const Video = ({ poster, url, className }: { poster: string; url: string; className?: string }) => {
    return (
        <div className={`wrapper my-12 rounded-secondary overflow-hidden ${className}`}>
            <ReactPlayer
                playIcon={<Image src={PlayBtn} alt='Play button' />}
                controls
                playing
                className='player'
                light={poster}
                width='100%'
                height='100%'
                url={url}
            />
        </div>
    );
};

export default Video;
