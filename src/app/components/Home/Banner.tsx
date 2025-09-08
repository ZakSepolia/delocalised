"use client";
import Banner from "asset/img/banner.png";
import MobileBanner from "asset/img/mobile-bg.png";
import { Button } from "components/ui/button";
import Image from "next/image";
const BannerSection = () => {
  const handleClickSeeMore = () => {
    const section = document.getElementById("info");
    const offset = 50;

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="banner" className="relative">
      <div className="absolute top-1/4 md:top-10 lg:top-[120px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-4 md:gap-6">
        <h1 className="font-bold text-2xl md:text-[25px] lg:text-[55px] text-center text-white lg:leading-[66.5px]">
          Lifestyle Atom Economy. <br />
          Aromatic Media{" "}
        </h1>
        <p className="text-sm md:text-base font-normal text-white text-center lg:leading-6">
          With Delocalised, we bridge the gap between cancer and{" "}
          {/* <br className="inline md:hidden" /> */}
          chemistry.
        </p>
        <Button
          className=" py-4 h-auto px-[45px] text-base md:py-2 md:px-6 bg-white text-[#B4D249] hover:text-white rounded-[50px] md:text-base font-bold hover:bg-linear"
          onClick={handleClickSeeMore}
        >
          See More
        </Button>
      </div>
      <Image
        src={Banner}
        alt="Benzene banner"
        quality={100}
        className="hidden md:block md:h-[500px] lg:h-[900px] w-full object-cover"
      />
      <Image
        src={MobileBanner}
        alt="Benzene banner"
        quality={100}
        className="block md:hidden object-cover w-full h-[674px]"
      />
    </section>
  );
};

export default BannerSection;
