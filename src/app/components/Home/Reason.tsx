"use client";

import BenzeneVideo from "asset/img/Benzene-video.png";
import dynamic from "next/dynamic";
import { BTN_GROUP } from "../../constant";
import Article from "../Article";
import OutlineButton from "../OutlineButton";
import Link from "next/link";

const Video = dynamic(() => import("app/components/Video"), {
  ssr: false,
});
const Reason = () => {
  return (
    <section className="section" id="info">
      <Article
        title={
          <>
            Why is <span className="text-primary">Benzene</span>
            <br />
            so special?
          </>
        }
        center
        content1={
          <article>
            <p className="font-semibold text-sm md:text-base leading-6 mb-3">
              Benzene can be visualised in multiple ways as seen above:
            </p>
            <p className="desc whitespace-normal xl:w-[588px]">
              {`Ben is a compound called an “aromatic” due to the cyclical structure and linked to the word aroma because of the sweet smell of Benzene. Benzene has the formula `}
              C<sub>6</sub>H<sub>6</sub>
              {` and is the starting material of many medications and impurities which contain a carbon hexagon ring. Benzene can be described as a reactant of acetaminophen, ibuprofen and aspirin synthesis. Benzene can also be described as a by-product from natural sources of including volcanoes, forest fires, crude oil, gasoline and cigarettes.
`}
            </p>
          </article>
        }
        content2={
          <article className="desc xl:w-[588px]">
            {`Benzene has the 4th bond pair from each carbon atom in a delocalized electron cloud. A delocalized electron cloud means the movement of the electrons is spread out over several atoms rather than being confined to a single bond or location and the cloud's freedom of movement of the electrons occur.
`}
          </article>
        }
      />
      <Video
        url="https://youtu.be/OuplBrmF81k?si=Ks9w31mQC-yiR1cJ"
        poster={BenzeneVideo.src}
      />

      {/* <div className="flex justify-center items-center gap-3 flex-wrap">
                {BTN_GROUP.map((btn) => (
                    <Link href={btn.link} target="_blank" key={btn.label}>
                        <OutlineButton
                            label={btn.label}
                            className="font-bold"
                        />
                    </Link>
                ))}
            </div> */}
    </section>
  );
};

export default Reason;
