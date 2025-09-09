import React from "react";
import LogoWhite from "asset/img/logo-white-2.png";
import Image from "next/image";
import { FOOTER_ITEMS } from "../constant";
import Telegram from "asset/img/telegram-white.png";
import Media from "asset/img/media-white.png";
import Twitter from "asset/img/twitter-white.png";
import Link from "next/link";
const FooterMobile = () => {
  return (
    <footer className="py-12 px-5 block md:hidden bg-linear rounded-t-secondary">
      <div className="flex justify-center items-center mb-12">
        <Image src={LogoWhite} alt="Bnz logo" width={176} height={64} />
      </div>
      {/* <ul className="flex gap-[33px] items-center justify-center">
        <li>
          <Link href="https://www.reddit.com/r/BNZcrypto/s/2elKDU9llX">
            <Image src={Media} alt="Media" />
          </Link>
        </li>
        <li>
          <Link href="https://x.com/i/communities/1829246913323119013">
            <Image src={Twitter} alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link href="https://t.me/+z6RqDniDbLAxM2U0">
            <Image src={Telegram} alt="Telegram" />
          </Link>
        </li>
      </ul> */}
      <hr className="my-12" />
      <div className="flex items-center justify-center mb-5 gap-5 text-white/[72%]">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/disclaimer">Disclaimer</Link>
      </div>
      <div className="text-center text-white/[72%]">
        <Link href="/term">Terms and Conditions</Link>
      </div>
      <p className="text-base font-normal text-white/70 text-center mt-8">
        All rights reserved
      </p>

      {/* <div className='flex justify-between xl:flex-nowrap flex-wrap md:gap-3 md:flex-row flex-col lg:gap-6'>
                <div>
                    <ul className='hidden md:flex gap-5 text-white text-base font-normal flex-wrap xl:flex-nowrap'>
                        {FOOTER_ITEMS.map((item) => (
                            <li key={item.link} className='whitespace-nowrap'>
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-end md:mt-6 md:mr-0 mr-2'>
                        <ul className='flex gap-[33px]'>
                            <li>
                                <Link href='https://www.reddit.com/r/BNZcrypto/s/2elKDU9llX'>
                                    <Image src={Media} alt='Media' />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://x.com/i/communities/1829246913323119013'>
                                    <Image src={Twitter} alt='Twitter' />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://t.me/+z6RqDniDbLAxM2U0'>
                                    <Image src={Telegram} alt='Telegram' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-[1px] bg-white w-full my-6 lg:my-12'></div>
            <div className='flex justify-between items-center lg:flex-nowrap flex-wrap'>
                <p className='text-base font-normal text-white/70'>All rights reserved</p>
                <ul className='flex gap-5 text-white/70 text-base font-normal flex-wrap lg:flex-nowrap'>
                    <li className='whitespace-nowrap'>
                        <Link href='/privacy'>Privacy Policy</Link>
                    </li>
                    <li className='whitespace-nowrap'>
                        <Link href='/disclaimer'>Disclaimer</Link>
                    </li>
                    <li className='whitespace-nowrap'>
                        <Link href='/term'>Terms and Conditions</Link>
                    </li>
                </ul>
            </div> */}
    </footer>
  );
};

export default FooterMobile;
