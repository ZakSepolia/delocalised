'use client';
import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import MoleculeDetail from '../components/MoleculeDetail';
import Phone from 'asset/img/phone.png';
import DownloadCard from '../components/DownloadCreativeAssets/DownloadCard';
import BnzCoin from 'asset/img/bnz-coin1.png';
import BnzCoin2 from 'asset/img/bnz-coin2.png';
import BnzCoin3 from 'asset/img/bnz-coin3.png';
import BnzCoin4 from 'asset/img/bnz-coin4.png';
import Chain from 'asset/img/chain.png';
import Snake from 'asset/img/snake.png';
import DownloadCardHorizontal from '../components/DownloadCreativeAssets/DownloadCardHorizontal';
import Card from '../components/Card';
import OutlineButton from '../components/OutlineButton';
import Telegram from 'asset/img/telegram.png';
import Image from 'next/image';
import WhiteTelegram from 'asset/img/telegram-white.png';
import { DOWNLOAD_QUESTIONS } from '../constant';

const DownloadCreativeAssets = () => {
    const [hover, setHover] = useState(false);
    return (
        <>
            <PageTitle title="Download branding assets" />
            <section className="section">
                <MoleculeDetail
                    img={Phone}
                    revert
                    imgHeight={600}
                    imgWidth={588}
                    content={
                        <div className="max-w-[486px]">
                            <p className="font-bold text-2xl md:text-[40px] mb-8  text-center xl:text-left w-full">
                                The team can help
                            </p>
                            <p className="desc text-center xl:text-left mb-12">
                                In case you are planning to publish any kind of
                                advertisement for BENZENE.win consult the
                                Telegram chat. Dozens of skilled designers from
                                the BNZ (Benzene) group are happy to do design
                                work for you!
                                <br />
                                <br />
                                The BNZ logo is licensed under Fair Use. You may
                                not use it to advertise BENZENE.win without l
                                permission. You may not generate profit for what
                                mainly consists of the BNZ logo. You may not
                                create your own versions of the logo.
                            </p>
                            <div className="flex justify-center xl:justify-start">
                                <OutlineButton
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                    onClick={() =>
                                        window.open(
                                            'https://t.me/+fJXd6zhyxTgwMmE0',
                                            '_blank'
                                        )
                                    }
                                    label={
                                        <div className="flex items-center gap-4">
                                            {hover ? (
                                                <Image
                                                    src={WhiteTelegram}
                                                    alt="telegram"
                                                />
                                            ) : (
                                                <Image
                                                    src={Telegram}
                                                    alt="telegram"
                                                />
                                            )}
                                            Open @BNZDESIGN
                                        </div>
                                    }
                                    arrow={false}
                                />
                            </div>
                        </div>
                    }
                />
            </section>
            <section className="section">
                <article className="mb-12">
                    <h3 className="font-bold text-2xl md:text-[40px] leading-[48.1px] text-center xl:text-left">
                        Stylization & spelling
                        <br />
                        <span className="text-primary">BENZENE.win</span>
                    </h3>
                    <div className="my-6 xl:my-12 w-full h-[2px] bg-linear"></div>
                    <p className="desc text-center xl:text-left">
                        BENZENE.win : Writing &quot;BENZENE.win&quot; is
                        superior to &quot;#BNZ&quot; or &quot;$BNZ&quot; (for
                        example on Twitter). It is better to direct users to the
                        website instead of the hashtag.
                        <br />
                        <br />
                        For any kind of merchandise or advertisement always
                        write &quot;BENZENE.win&quot; instead of
                        &quot;BNZ&quot;. <br />
                        <br />
                        The currency is called &quot;BNZ&quot; with the ticker
                        $BNZ. Josh owns 10,000 BNZ.
                        <br />
                        <br />
                        Do not use &quot;Bnz&quot; or &quot;bnz&quot;
                        (capitalize it and write &quot;BNZ&quot;), &quot;BNZ
                        coin&quot;, &quot;BNZ token&quot; or &quot;BNZ
                        crypto&quot;. For marketing, writing etc. use
                        &quot;BENZENE.win&quot; not &quot;BNZ&quot;.
                        <br />
                        <br />
                        BNZ literally is an aromatic structure. This means
                        letting people know of the sweet smell is key.
                    </p>
                </article>
                <div className="flex gap-[13px] xl:justify-between justify-center items-center xl:flex-nowrap flex-wrap">
                    <DownloadCard
                        img={BnzCoin}
                        linkJPG="download1.jpg"
                        linkPNG="/download1.png"
                    />
                    <DownloadCard
                        img={BnzCoin2}
                        linkJPG="download2.jpg"
                        linkPNG="/download2.png"
                    />
                    <DownloadCard
                        img={BnzCoin3}
                        linkJPG="download3.jpg"
                        linkPNG="/download3.png"
                    />
                    <DownloadCard
                        img={BnzCoin4}
                        linkJPG="download4.jpg"
                        linkPNG="/download4.png"
                    />
                </div>
                <div className="flex gap-[13px] items-stretch xl:flex-nowrap flex-wrap mt-[13px]">
                    <DownloadCardHorizontal
                        img={Chain}
                        linkJPG="download5.jpg"
                        linkPNG="/download5.png"
                    />
                    <DownloadCardHorizontal
                        img={Snake}
                        className="xl:max-w-[400px]"
                        linkJPG="download6.jpg"
                        linkPNG="/download6.png"
                    />
                </div>
            </section>
            <section className="section">
                <h3 className="text-center text-2xl md:text-[40px] font-bold mb-12">
                    Any Questions?{' '}
                    <span className="text-primary">Find Here</span>
                </h3>
                <div className="flex flex-col gap-4">
                    {DOWNLOAD_QUESTIONS.map((item) => (
                        <Card {...item} key={item.title} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default DownloadCreativeAssets;
