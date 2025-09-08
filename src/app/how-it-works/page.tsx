'use client'
import Acetaminophen from 'asset/img/acetaminophen.png'
import Aspirin from 'asset/img/aspirin.png'
import Deflationary from 'asset/img/deflationary.png'
import FinalVideo from 'asset/img/final-video.png'
import FinalVideoDesktop from 'asset/img/final-video-desktop.jpeg'
import Ibuprofen from 'asset/img/ibuprofen.png'
import Kevlar from 'asset/img/kevlar.png'
import Nylon from 'asset/img/nylon.png'
import Slice from 'asset/img/Slice 1.png'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Article from '../components/Article'
import Card from '../components/Card'
import ChemicalCard from '../components/HowItWorks/ChemicalCard'
import GreenCard from '../components/HowItWorks/GreenCard'
import OutlineButton from '../components/OutlineButton'
import PageTitle from '../components/PageTitle'
import TransactionSocial from '../components/TransactionSocial'
import { BNZ_FEATURES, BTN_GROUP, HOWITWORK_QUESTIONS } from '../constant'
const Video = dynamic(() => import('app/components/Video'), {
    ssr: false,
})
const HowItWork = () => {
    const router = useRouter()
    return (
        <>
            <PageTitle title="How BNZ works" />
            <section className="section">
                <Article
                    title={
                        <>
                            <span className="text-primary">BNZ</span> enables
                            you to buy coins <br className="hidden md:inline" />
                            while being deflationary.
                        </>
                    }
                    content1={
                        <article>
                            <p className="desc whitespace-normal xl:w-[588px]">
                                AEs, known as Atom Economies or Atom Efficiency,
                                is worth billions of dollars in the analgesic
                                industry where acetaminophen (paracetamol) ,
                                ibuprofen and aspirin are sold. Maximising atom
                                economy in reactions is vital to save money and
                                conserve resources.
                                <br />
                                <br />
                                Private pharmaceutical companies benefit from
                                high prices for health insurances in medication.
                                When you buy from a pharmacy the majority of
                                health insurance revenue go straight to
                                pharmaceutical companies however pharmaceutical
                                employees earn a fixed wage: BNZ replaces cost
                                ineffective health insurance companies whether
                                government based or private with a peer-to-peer
                                technology. Therefore, removing large
                                corporation middlemen. BNZ does not guarantee
                                profit from the work of others but surrounds
                                itself with a community in the pursuit of
                                knowledge and wisdom, 100% of all profits from
                                patents will be donated to charities that
                                improve education. This is to highlight that BNZ
                                is not profit sharing or profit inducing.
                            </p>
                        </article>
                    }
                    content2={
                        <article className="desc xl:w-[588px]">
                            BNZ is not a pharmaceutical. However, pharmacists do
                            learn about benzene as part of their education,
                            particularly in the context of organic chemistry,
                            toxicology, and medicinal chemistry. Just to clarify
                            what BNZ refers to; here is a table below of atom
                            economy and number of BNZ. The atom economy analogy
                            is linked much more to fabrics then pharmaceuticals.
                            The more you learn about it the more you love it.
                            <br />
                            <br />
                            Benzene (BNZ) was the first aromatic structure
                            starting a list of organic compounds termed with a
                            cyclical (aromatic) structure. Some well-known
                            compounds with Benzene ring functional groups
                            include acetaminophen, ibuprofen and aspirin you can
                            see below.
                        </article>
                    }
                />
                <div className="mt-12 flex justify-center xl:justify-between items-center mb-6 xl:flex-nowrap flex-wrap xl:gap-6 gap-10">
                    <ChemicalCard
                        title="Acetaminophen"
                        color
                        img={Acetaminophen}
                    />
                    <ChemicalCard title="Ibuprofen" img={Ibuprofen} />
                    <ChemicalCard title="Aspirin" color img={Aspirin} />
                </div>
                <div className="bg-primary xl:px-[123px] rounded-secondary">
                    <Image src={Deflationary} alt="Deflationary" />
                </div>
            </section>
            <section className="section">
                <Article
                    title={
                        <>
                            <span className="text-primary">Benzene</span> is
                            more then
                            <br className="md:inline hidden" /> just
                            pharmaceuticals
                        </>
                    }
                    content1={
                        <article>
                            <p className="desc whitespace-normal xl:w-[588px]">
                                AE, known as Atom Economies or Atom Efficiency
                                also refers to textile fabrics such as Kevlar
                                and Nylon. Both types of Nylon for example Nylon
                                6 or Nylon 6,6 fit the analogy. Nylon is a
                                synthetic fiber used in ballistic protection as
                                well as bags and luggage. Kevlar is a synthetic
                                fiber used in high stress applications like
                                army, police uniforms, and even marine
                                composites such as sails, propellers, and hulls.
                                (NB: Many chemicals derived from benzene, such
                                as aniline or cyclohexane, can be involved in
                                producing the monomers used to synthesize
                                nylon.)
                                <br />
                                <br />
                                Facts thats worth knowing is the atom economy of
                                Nylon and Kevlar. Nylon has a higher atom
                                economy and so wastage and price to the consumer
                                or number of BNZ goes down, as a result, lots of
                                atoms decrease Nylon&apos;s value. In
                                comparison, Kevlar has a lower atom economy and
                                so the wastage and price to the consumer or
                                number of BNZ goes up, as a result, fewer atoms
                                increase Kevlar&apos;s value. Therefore, Kevlar
                                fabric is more expensive then Nylon fabric. This
                                rule is seen throughout society in many forms
                                including perfumes.
                            </p>
                        </article>
                    }
                    content2={
                        <article className="desc xl:w-[588px]">
                            Expensive perfumes usually have more waste during
                            production, which can contribute to their higher
                            costs. High-end perfumes use rare and expensive
                            natural ingredients, such as certain flowers, resins
                            which require a large quantity of raw material to
                            extract a small amount of essence.
                            <br />
                            <br />
                            For instance, it takes a significant number of roses
                            to produce just a small amount of rose oil.
                            Moreover, Traditional methods to extract scent such
                            as steam distillation can be less efficient compared
                            to synthetic methods, but they are valued for the
                            purity and safety they bring to the scent. Put
                            simply wastage is linked to price. As wastage
                            increases, price increases. As wastage decreases,
                            price decreases. And the price to the consumer is
                            related to the amount of BNZ. If we talk about only
                            one factor atom economy out of all the factors for
                            fabric manufacturing: then as more atoms are in the
                            final desired product the cheaper the price and in
                            terms of the table, 1 million BNZ has a much higher
                            atom economy due to it&apos;s cheaper price and so
                            it has minimal wastage.
                        </article>
                    }
                />
                <div className="mt-12 flex justify-center xl:justify-between items-center xl:flex-nowrap flex-wrap xl:gap-6 gap-10">
                    <ChemicalCard color img={Kevlar} name="Kevlar synthesis" />
                    <ChemicalCard color img={Nylon} name="Nylon 6 synthesis" />
                </div>
            </section>
            <section className="section">
                <Video
                    poster={FinalVideo.src}
                    url="https://www.youtube.com/watch?v=dBhIvbiX54Y"
                    className="md:hidden block"
                />
                <Video
                    poster={FinalVideoDesktop.src}
                    url="https://www.youtube.com/watch?v=dBhIvbiX54Y"
                    className="hidden md:block"
                />
                {/* <div className="flex justify-center items-center gap-3 flex-wrap">
                    {BTN_GROUP.map((btn) => (
                        <OutlineButton
                            key={btn.label}
                            label={btn.label}
                            className="font-bold"
                            onClick={() => router.push(btn.link)}
                        />
                    ))}
                </div> */}
            </section>
            <section className="section lg:py-10 flex flex-col gap-3">
                {BNZ_FEATURES.map((item) => (
                    <GreenCard
                        img={item.img}
                        title={item.title}
                        content={item.content}
                        key={item.title}
                    />
                ))}
            </section>
            <section className="section">
                <h3 className="text-center text-2xl md:text-[40px] font-bold mb-6">
                    Any Questions?{' '}
                    <span className="text-primary">Find Here</span>
                </h3>
                <p className="max-w-[551px] mx-auto mb-12">
                    Find out key information about Benzene you didn&apos;t know
                    like how it&apos;s found in forest fires, volcanoes, crude
                    oil, gasoline, and cigarette smoke.
                </p>
                <div className="flex flex-col gap-4">
                    {HOWITWORK_QUESTIONS.map((item) => (
                        <Card {...item} key={item.title} />
                    ))}
                </div>
            </section>
            <section className="p-6 xl:px-[20px] xl:py-40">
                <div className="bg-linear rounded-primary lg:h-[320px] w-full relative px-12 py-12 lg:py-[64px] flex flex-col items-center">
                    <h3 className="text-white text-3xl lg::text-[56px] font-bold mb-4 text-center">
                        BNZ rewards common sense
                    </h3>
                    <p className="text-xl font-medium lg:max-w-[782px] text-white text-center">
                        You are completely responsible for your decision making.
                        Always read the disclaimers, don’t expect profit from
                        the work of others, do your own research, don’t consider
                        things as financial advice unless they’re labelled as
                        such and take only reasonable risks.
                    </p>
                    <Image
                        src={Slice}
                        alt="BNZ image"
                        className="absolute inset-0"
                    />
                </div>
            </section>
            <section className="mb-20 px-6 lg:px-0">
                <h4 className="font-bold text-2xl md:text-[40px] leading-tight mb-6 text-center">
                    What&apos;s the difference between <br />
                    transaction and reaction?
                </h4>
                <p className="lg:mx-auto max-w-[703px] text-center font-normal text-base mb-10">
                    Yes, I have linked the two words as both have &quot;a
                    step&quot; to make a reaction or transaction. BNZ has a buy
                    and burn function, therefore, when you buy it&apos;s like a
                    reaction with an certain atom economy. On the other hand,
                    when you sell, you own a by-product of crude oil. As a
                    result, there is no sell and burn function. Furthermore,
                    when you buy it&apos;s a reaction and when you sell
                    it&apos;s a transaction.
                </p>
                {/* <TransactionSocial /> */}
            </section>
        </>
    )
}

export default HowItWork
