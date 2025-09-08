import React from 'react';
import PageTitle from '../components/PageTitle';
import MoleculeDetail from '../components/MoleculeDetail';
import AspirinAtom from 'asset/img/aspirin-atom.png';
import Article from '../components/Article';
import Synthesising from 'asset/img/synthesising-aspirin.png';
import KeyFact from 'asset/img/key-fact.png';
import Book from 'asset/img/book.png';
import Image from 'next/image';
import GreenCard from '../components/HowItWorks/GreenCard';
import { ATOM_QUESTIONS, BNZ_FEATURES } from '../constant';
import Card from '../components/Card';
const AtomEconomy = () => {
    return (
        <>
            <PageTitle title='Atom economy simplified' />
            <section className='section'>
                <MoleculeDetail
                    img={AspirinAtom}
                    content={
                        <div className='max-w-[509px]'>
                            <p className='font-bold text-2xl md:text-[40px] mb-8  text-center xl:text-left w-full'>
                                What about more detail
                                <br />
                                on Aspirin atom economy
                            </p>
                            <p className='font-medium text-base text-center xl:text-left'>
                                Aspirin is a compound mainly made up of Acetylsalicylic acid and has
                                a molar mass or molecular weight (Mr) of 180.17 g/ mol.
                                <br />
                                <br />
                                Analysis of industrial synthesis of aspirin (mainly made up of
                                Acetylsalicylic acid) atom economy:
                            </p>
                        </div>
                    }
                />
            </section>
            <section className='section'>
                <Article
                    title={
                        <>
                            What is Green Chemistry and
                            <br />
                            what is the concept Atom Economy?
                        </>
                    }
                    content1={
                        <article className='desc xl:w-[588px]'>
                            Green chemistry is looking at sustainable and environmentally friendly
                            solutions to chemistry. One principle of Green chemistry is Atom
                            Economy. Atom economy plays a crucial role is figuring out the best
                            route or synthesis that gets the most of the desired product and the
                            least wastage so the reaction is sustainable.
                        </article>
                    }
                    content2={
                        <article className='desc xl:w-[588px]'>
                            Atom economy of a synthesis is the number of atoms from the reactants in
                            the final desired product. There are many other steps apart from the
                            synthesis for the production of analgesics including crystallization,
                            filtration, washing and drying. These are the most important steps for
                            manufacturing.
                        </article>
                    }
                />
                <div className='my-12 w-full h-[2px] bg-linear'></div>
                <div className='flex flex-col gap-6'>
                    <Image src={Synthesising} alt='Synthesising aspirin' priority />
                    <Image src={KeyFact} alt='Key fact' priority />
                </div>
            </section>
            <section className='section'>
                <Article
                    title={
                        <>
                            Now lets work out the <br />
                            atom economy of aspirin{' '}
                        </>
                    }
                    content1={
                        <article className='desc xl:w-[588px]'>
                            Molar mass of Acetic acid = 60 g/mol
                            <br />
                            You can say any of these terms: “relative formula mass, molar mass or
                            molecular weight (they all mean Mr)
                            <br />
                            <br />
                            Total Mr of the desired product = aspirin or 180 g/mol
                            <br />
                            Total Mr of all reactants = 240 g/mol
                            <br />
                            <br />
                            180/240 x 100 = 75% atom economy
                            <br />
                            <br />
                            There is potential for acetic acid being marketed and sold for
                            additional profit. Therefore, 100% atom economy. However, usually the
                            atom economy is less than 100%.
                        </article>
                    }
                    content2={
                        <article className='desc xl:w-[588px]'>
                            Acetic Acid, can be used in the chemical industry, pharmaceuticals,
                            cleaning products and even food products.
                            <br />
                            <br />
                            Daily aspirin use has been shown to lower the chance of having a first
                            heart attack or stroke, however, there are harmful effects such as
                            increased risk for bleeding in the brain, stomach and intestines. Your
                            doctor (chemists are researchers, doctors are practical) may recommend
                            low-dose aspirin to reduce your risk of a heart attack. In the lower
                            dose, aspirin doesn&apos;t pose the same health risk as full-strength
                            NSAIDs. These medicines are effective at dulling pain, reducing
                            inflammation, and reducing fevers. When used moderately, they are
                            generally considered safe.
                        </article>
                    }
                />
            </section>
            <section className='section lg:py-10 flex flex-col gap-3'>
                {BNZ_FEATURES.map((item) => (
                    <GreenCard
                        img={item.img}
                        title={item.title}
                        content={item.content}
                        key={item.title}
                    />
                ))}
                {/* <GreenCard
                    img={Book}
                    title='BNZ is professional'
                    content={
                        <p className='font-semibold text-base text-white'>
                            BNZ is designed for research and development, the exams you usually must
                            pass is to motivate you to become the professional. Research includes
                            both benzene recovery and crude oil to chemicals. BNZ is an peer-to-peer
                            aromatic and is sweet smelling product you exchange. Take the time to
                            read the whitepaper and verify the codebase. The Chemist Dr Jacob
                            Bigeleisen a professional and an American physical chemist, studied the
                            transformation of crude oil into chemicals. He made significant
                            contributions to the understanding of petroleum and its products. One of
                            those products is Benzene. Chemistry&apos;s role behind the ideas of
                            Benzene is to enhance cryptocurrencies on Ethereum.
                        </p>
                    }
                /> */}
            </section>
            <section className='section'>
                <h3 className='text-center text-2xl md:text-[40px] font-bold mb-12'>
                    Any Questions? <span className='text-primary'>Find Here</span>
                </h3>
                <div className='flex flex-col gap-4'>
                    {ATOM_QUESTIONS.map((item) => (
                        <Card {...item} key={item.title} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default AtomEconomy;
