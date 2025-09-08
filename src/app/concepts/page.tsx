import ChemicalStructure from 'asset/img/bnz-chemical-structure.png';
import C8H8NO2 from 'asset/img/c8h8no2.png';
import C9H8O4 from 'asset/img/c9h804.png';
import C13H18O2 from 'asset/img/c13h18o2.png';
import C7H5N3Ov from 'asset/img/c7h5n30v.png';
import A from 'asset/img/(a).png';
import B from 'asset/img/(b).png';
import Carbon from 'asset/img/carbon.png';
import H2OFormula from 'asset/img/h2o-formula.png';
import HONN from 'asset/img/honn.png';
import H2O from 'asset/img/h2o.png';
import Detergent1 from 'asset/img/detergent1.png';
import Detergent2 from 'asset/img/detergent2.png';
import Kevlar1 from 'asset/img/kevlar1.png';
import Kevlar2 from 'asset/img/kevlar2.png';
import Camine from 'asset/img/carmine.png';
import Eosin from 'asset/img/eosin.png';
import CH3OCH3 from 'asset/img/ch3och3.png';
import MolarMassAce from 'asset/img/molar-mass-acetaminophen.png';
import MolarMassIbu from 'asset/img/molar-mass-ibuprophen.png';
import MolarMassTri from 'asset/img/molar-mass-trinitrotoluene.png';
import Image from 'next/image';
import ChemicalDetails from '../components/Concepts/ChemicalDetails';
import MoleculeDetail from '../components/MoleculeDetail';
import PageTitle from '../components/PageTitle';
import { BNZ_FEATURES, CHEMISTRY_CARDS, CONCEPTS } from '../constant';
import ChemistryCard from '../components/Concepts/ChemistryCard';
import GreenCard from '../components/HowItWorks/GreenCard';
import TheoryCard from '../components/Concepts/TheoryCard';
import Card from '../components/Card';
const Concepts = () => {
    return (
        <>
            <PageTitle title="Concepts" />
            <section className="section">
                <MoleculeDetail
                    img={Carbon}
                    content={
                        <>
                            <p className="font-bold text-2xl md:text-[40px] mb-8  text-center xl:text-left w-full">
                                Atomic mass
                            </p>
                            <p className="font-semibold text-base mb-4  text-center xl:text-left w-full">
                                Highlighted the key elements first ‘C’.
                            </p>
                            <p className="font-medium text-base max-w-[486px] text-center xl:text-left">
                                The number of protons and neutrons for all
                                isotopes averaged of carbon is 6 g/mol protons
                                and 6.011 g/mol neutrons. The relative atomic
                                mass (Ar) often referred to as atomic weight
                                (molar mass) is 12.011 g/mol (for carbon) and is
                                the combination of all protons and neutrons.
                            </p>
                        </>
                    }
                />
                <MoleculeDetail
                    img={H2O}
                    revert
                    imgHeight={608}
                    imgWidth={588}
                    content={
                        <div className="max-w-[486px]">
                            <p className="font-bold text-2xl md:text-[40px] mb-8  text-center xl:text-left w-full">
                                Molar mass
                            </p>
                            <p className="font-semibold text-base text-center xl:text-left w-full">
                                Molar mass (Mr) is the mass of 1 mole of a
                                compound. Sometimes referred to as “molecular
                                weight”.{' '}
                            </p>
                            <p className="mb-4 font-semibold text-base text-[#181818]/45 text-center xl:text-left">
                                (Or “Formula mass”)
                            </p>
                            <p className="font-medium text-base text-center xl:text-left">
                                The number of protons and neutrons for all
                                isotopes averaged of carbon is 6 g/mol protons
                                and 6.011 g/mol neutrons. The relative atomic
                                mass (Ar) often referred to as atomic weight
                                (molar mass) is 12.011 g/mol (for carbon) and is
                                the combination of all protons and neutrons.
                            </p>
                        </div>
                    }
                />
            </section>
            <section className="py-10 px-[20px]">
                <Image src={H2OFormula} alt="H2O Formula" />
            </section>
            <section className="section">
                <h4 className="font-bold text-2xl md:text-[40px] text-center">
                    Here is some of the more complicated
                    <br /> examples of Molar mass...
                </h4>
            </section>
            <ChemicalDetails
                title={
                    <>
                        Chemical formula: C<sub className="text-2xl">9</sub>H
                        <sub className="text-2xl">8</sub>O
                        <sub className="text-2xl">4</sub>
                        <br />
                        otherwise known as Aspirin.
                    </>
                }
                content1={
                    <article>
                        <p className="font-semibold text-base leading-6 mb-4">
                            Mr = 9C + 8H + 4O = 9(12.01) + 8(1.01) + 4(16) =
                            180.17
                        </p>
                        <p className="desc whitespace-normal xl:w-[588px]">
                            One of the best known aromatic group drugs is
                            acetylsalicylic acid, or aspirin, which is prepared
                            by the esterification of the phenolic hydroxyl group
                            of salicylic acid. Aspirin is a medication used for
                            pain, fever, inflammation, heart attacks. It is
                            commonly prescribed because of its properties such
                            as anti-inflammatory, anti–coagulatory,
                            fever-reducing, and pain-relieving that make it a
                            recommended drug.
                        </p>
                    </article>
                }
                content2={
                    <article className="desc xl:w-[588px]">
                        Aspirin has three functional groups including:
                        <br />
                        <br />
                        Carboxylic acid group (COOH) Ester group (O- CO-R&apos;)
                        and Aromatic group (benzene ring).
                    </article>
                }
                img1={C9H8O4}
                img2={ChemicalStructure}
                bg
            />

            <section className="section">
                <article className="mb-12">
                    <h3 className="font-bold text-2xl md:text-[40px] leading-[48.1px]">
                        Chemical formula: C<sub className="text-2xl">8</sub>H
                        <sub className="text-2xl">8</sub>NO
                        <sub className="text-2xl">2</sub>
                        <br /> otherwise known as acetaminophen
                    </h3>
                    <div className="my-4 md:my-12 w-full h-[2px] bg-linear"></div>
                    <p className="font-semibold text-base mb-4">
                        Mr = 8C + 8H + 1N + 2O = 8(12.01) + 8(1.01) + 1(14.007)
                        + 2 (16) = 206.31
                    </p>
                    <p className="font-medium text-base text-[#181818]/60">
                        Acetaminophen has three functional groups. The aromatic
                        group (benzene ring), amide group (HN-CO-R) and the
                        hydroxyl group (OH). Therefore, acetaminophen has three
                        polar groups.
                    </p>
                </article>
                <div className="mt-12 flex justify-center xl:justify-between rounded-secondary items-center xl:flex-nowrap flex-wrap bg-primary">
                    <Image src={C8H8NO2} alt="C9H8O4" />
                    <Image src={MolarMassAce} alt="Chemical Structure" />
                </div>
            </section>
            <ChemicalDetails
                title={
                    <>
                        Chemical formula: C<sub className="text-2xl">13</sub>H
                        <sub className="text-2xl">18</sub>O
                        <sub className="text-2xl">2</sub>
                        <br /> otherwise known as Ibuprofen
                    </>
                }
                content1={
                    <article>
                        <p className="font-semibold text-base leading-6 mb-3">
                            Mr = 13C + 18H + 2O = 13(12.01) + 18(1.01) + 2 (16)
                            = 206.31
                        </p>
                        <p className="desc whitespace-normal xl:w-[588px]">
                            Ibuprofen was derived from propionic acid by the
                            research arm of Boots Group during the 1960s. The
                            name is derived from the 3 functional groups:
                            isobutyl (ibu) propionic acid (pro) phenyl (fen).
                            <br />
                            <br />
                            4-(2-methylpropyl)phenyl group is the functional
                            group.
                        </p>
                    </article>
                }
                content2={
                    <article className="desc xl:w-[588px]">
                        Ibuprofen has one polar group. Due to one functional
                        group ibuprofen is somewhat soluble in water and soluble
                        in organic solvents.
                        <br />
                        <br />
                        Ibuprofen is labelled also as 2-(4-isobutylphenyl)
                        propionic acid. The phenyl group is closely related to
                        benzene and can be viewed as a benzene ring, minus a
                        hydrogen, C<sub>6</sub>H<sub>7</sub>. The Ibuprofen
                        starting material in the green synthesis is
                        isobutylbenzene.
                    </article>
                }
                img1={C13H18O2}
                img2={MolarMassIbu}
                bg
            />
            <ChemicalDetails
                title={
                    <>
                        Chemical formula of C<sub className="text-2xl">7</sub>H
                        <sub className="text-2xl">5</sub>N
                        <sub className="text-2xl">3</sub>O
                        <sub className="text-2xl">v</sub>
                        <br />
                        otherwise known as Trinitrotoluene (TNT)
                    </>
                }
                content1={
                    <article>
                        <p className="font-semibold text-base leading-6 mb-4">
                            Mr= 7C + 5H + 3N + 6O. = 7(12.01) + 5(1.01) +
                            3(14.007) + 6(16) = 227.141{' '}
                        </p>
                        <p className="desc whitespace-normal xl:w-[588px]">
                            Chemical formula of C7H5N3O6 otherwise known as
                            Trinitrotoluene (TNT). 2,4,6-trinitrotoluene is
                            better known by its initials, TNT. TNT is explosive
                            for multiple reasons. One reason is it contains the
                            elements carbon, oxygen and nitrogen, which means
                            that when the material burns it produces highly
                            stable substances (CO, CO2 and N2) with strong
                            bonds, so releasing a great deal of energy.
                        </p>
                    </article>
                }
                content2={
                    <article className="desc xl:w-[588px]">
                        The second fact that makes TNT explosive is that it is
                        chemically unstable - the nitro groups are so closely
                        packed that they experience a great deal of strain and
                        hindrance to movement from their neighbouring groups.
                        Thus it doesn&apos;t take much of an initiating force to
                        break some of the strained bonds, and the molecule then
                        flies apart. Typically 1 gram of TNT produces about 1
                        litre of gas, which is a 1000 fold increase in volume.
                        This expanding hot gas can be used to propel a
                        projectile, such as a bullet from a gun, or for
                        demolition purposes.
                    </article>
                }
                img1={C7H5N3Ov}
                img2={MolarMassTri}
                bg
            />
            <ChemicalDetails
                title={<>A is the epoxy resin. B is the curing agent.</>}
                content1={
                    <article className="desc xl:w-[588px]">
                        Epoxy Cure Stages. Mixing epoxy resin with a hardener
                        begins a chemical reaction that transforms the combined
                        liquid ingredients into a solid. This period of
                        transformation is the cure time. As it cures, epoxy
                        passes from the liquid state, through a gel state,
                        before it reaches a solid-state.
                        <br />
                        <br />
                        resins (Synthetic resin is a chemical organic compound
                        mainly composed of atoms such as carbon, hydrogen and a
                        little oxygen, nitrogen and sulfur etc. combined
                        together with certain chemical-bond. Synthetic resin, as
                        a bonding agent, is the main component in plastic.
                        Typically, modified or synthetic resins are used for
                        manufacturing – they can be produced from natural
                        components with additives or consist of artificial
                        polymers.
                    </article>
                }
                content2={
                    <article className="desc xl:w-[588px]">
                        It is also used for 3D printing and in building as
                        adhesives, coatings or as a construction material when a
                        strong bond is required. For example, for laminated wood
                        construction. Resins are also popular in the decoration
                        of self-leveling floors and architectural surfaces
                        enabling to use of recycled materials.
                        <br />
                        <br />
                        The main use of resin is to be a glue - to transfer
                        stress between the fibers, clasp them together and
                        protect from outside factors. The first resins have been
                        found in nature - in plants, bugs or trees - amber or
                        shellac are some of the examples of natural resins.
                        These natural resins are used in some products but
                        usually, they are flammable and fusible, may appear
                        soluble in liquids, which makes them not suitable for
                        some applications. )
                    </article>
                }
                img1={A}
                img2={B}
            />
            <section className="section">
                <div className="flex justify-between items-center xl:flex-nowrap flex-wrap mb-12">
                    <h4 className="font-bold text-2xl md:text-[40px]">
                        Detergents
                    </h4>
                    <p className="desc max-w-[588px]">
                        Detergents of everyday detergent products are laundry
                        and fabric softeners, all-purpose cleaners and mixtures
                        intended for soaking (pre-washing) rinsing or bleaching
                    </p>
                </div>
                <div className="flex justify-center xl:justify-between rounded-secondary items-center xl:flex-nowrap flex-wrap gap-6">
                    <Image src={Detergent1} alt="Chemistry" />
                    <Image src={Detergent2} alt="Chemical Structure" />
                </div>
            </section>
            <section className="section py-[20px]">
                <div className="flex justify-center xl:justify-between items-center xl:flex-nowrap flex-wrap mb-6 gap-6">
                    {CHEMISTRY_CARDS.map((item) => (
                        <ChemistryCard
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                        />
                    ))}
                </div>
                <article className="p-6 bg-linear rounded-secondary flex justify-center gap-6 xl:justify-between items-start xl:flex-nowrap flex-wrap">
                    <div className="xl:max-w-[588px]">
                        <p className="font-bold text-2xl text-white">Kevlar</p>
                        <p className="text-base text-white font-normal">
                            Kevlar can be synthesized in solution from the
                            monomers 1,4-phenylene-diamine (para-
                            phenylenediamine) and terephthaloyl chloride in a
                            condensation reaction.
                            <br />
                            <br />
                            Kevlar&apos;s structure consists of relatively rigid
                            molecules which tend to form mostly planar
                            sheet-like structures similar to silk protein. It
                            has a high strength/lightweight combination that
                            makes it the perfect solution for a variety of
                            applications:
                        </p>
                        <br />
                        <ol className="text-base text-white list-disc font-normal list-inside ps-2">
                            <li>
                                Kevlar K-29 - in industrial applications, such
                                as cables, asbestos replacement, brake linings,
                                and body/vehicle armour.
                            </li>
                            <li>
                                Kevlar K49 - high modulus used in cable and rope
                                products.
                            </li>
                            <li>Kevlar K100 - coloured version of Kevlar</li>
                            <li>
                                Kevlar K119 - higher-elongation, flexible and
                                more fatigue resistant.
                            </li>
                            <li>
                                Kevlar K129 - higher tenacity for ballistic
                                applications.
                            </li>
                            <li>
                                Kevlar AP - has 15% higher tenacity than K-29.
                            </li>
                            <li>
                                Kevlar XP - lighter weight resin and KM2 plus
                                fibre combination.
                            </li>
                            <li>
                                Kevlar KM2 - enhanced ballistic resistance for
                                armour applications
                            </li>
                        </ol>
                        <br />
                        <p className="text-base text-white font-normal">
                            Some of the characteristics that make Kevlar useful
                            in protective applications:
                        </p>
                        <br />
                        <ol className="text-base text-white list-disc font-normal list-inside ps-2">
                            <li>Bullet resistant</li>
                            <li>Fragment resistant</li>
                            <li>Excellent thermal properties</li>
                            <li>Excellent dimensional stability</li>
                            <li>Comfortable</li>
                            <li>High strength</li>
                            <li>Cut resistant</li>
                            <li>Chemical resistance </li>
                            <li>Flame resistant, self-extinguishing </li>
                        </ol>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Image src={Kevlar1} alt="Kevlar" />
                        <Image src={Kevlar2} alt="Kevlar" />
                    </div>
                </article>
            </section>
            <section className="section">
                <div className="flex justify-center xl:justify-between items-center xl:flex-nowrap flex-wrap mb-10">
                    <Image src={HONN} alt="Dyes structure" />
                    <div className="w-[588px]">
                        <p className="font-bold text-2xl md:text-[32px] mb-4 md:mb-8">
                            Dyes are aromatic organic compounds, and as such are
                            based fundamentally on the structure of benzene.
                        </p>
                        <p className="desc">
                            A major type of dye making up 60-70% of the food and
                            textiles market is Azo dyes.
                            <br />
                            <br />
                            The compounds contain a C-N=N-C linkage. Most azo
                            dyes contain only one azo group but there are some
                            that contain two or three azo groups, called
                            &quot;diazo dyes&quot; and &quot;triazo dyes&quot;
                            respectively. Azo dyes are widely used to treat
                            textiles, polishing of leather shoes or purses and
                            some foods. Other Dyes for more specific uses are
                            used in the colouring of hair main ingredient
                            Paraphenylenediamine (PPD).
                            <br />
                            <br />
                            Manufacturing of cosmetics like lipsticks
                            <br />
                            <br />A range of different pigments and dyes give
                            lipsticks colour. Some lipsticks use carmine red, a
                            pigment derived from scale insects, though
                            increasingly alternatives dyes are used. Another
                            dye, eosin, reacts with the amine group in the
                            proteins of the skin to produce a deep red colour.
                        </p>
                    </div>
                </div>
                <div
                    className={`mt-12 flex justify-center gap-6 xl:justify-between rounded-secondary items-center xl:flex-nowrap flex-wrap`}
                >
                    <Image src={Camine} alt="Camine Red" />
                    <Image src={Eosin} alt="Eosin" />
                </div>
            </section>
            <section className="section">
                <div className="flex justify-center xl:justify-between items-center xl:flex-nowrap flex-wrap mb-4 md:mb-10">
                    <div className="w-[588px]">
                        <p className="font-bold text-2xl md:text-[32px] mb-4 md:mb-8">
                            Capsaicin
                        </p>
                        <p className="desc">
                            Other compounds added to lipsticks include
                            fragrances to mask the smell of the other chemicals
                            present. Capsaicin, the spicy compound found in
                            chili peppers, is sometimes included, as its skin
                            irritant effect causes plumping of the lips in small
                            quantities.
                        </p>
                    </div>
                    <Image src={CH3OCH3} alt="Chemistry structure" />
                </div>
            </section>
            <section className="section">
                <article className="mb-12">
                    <h3 className="font-bold text-2xl md:text-[40px] leading-[48.1px] ">
                        Extra thoery
                    </h3>
                    <div className="my-4 md:my-12 w-full h-[2px] bg-linear"></div>
                    <p className="font-semibold text-base mb-4">
                        John Dalton is a famous chemist.{' '}
                    </p>
                    <p className="font-medium text-base text-[#181818]/60  ">
                        When John Dalton was on his way to discover the “atomic
                        model” he stumbled into, and so discovered the next rule
                        based on unit coined by Wilhelm Ostwald.
                        <br />
                        <br />
                        The mole = abbreviated “mol”
                        <br />
                        Is defined as 1 mol of any substance contains exactly
                        6.022x 10<sup>23</sup> items of that substance.
                    </p>
                </article>
                <div>
                    <div className="flex justify-center items-stretch xl:flex-nowrap flex-wrap gap-6 mb-6">
                        <TheoryCard
                            title="Example #1"
                            desc={
                                <p className="desc">
                                    “1 dozen eggs” -&gt; = 12 eggs
                                    <br />
                                    “1 mol of eggs” -&gt; = 6.022 x 10
                                    <sup>23</sup> eggs
                                </p>
                            }
                        />
                        <TheoryCard
                            title="Example #3"
                            desc={
                                <p className="desc">
                                    The number of oxygen atoms in 1 mol of an
                                    oxygen molecule, O<sub>2</sub>.
                                    <br /> <br />
                                    Number of atoms = 2 x 1 x 6.022 x 10
                                    <sup>23</sup> = 12.044 x 10
                                    <sup>23</sup> atoms
                                </p>
                            }
                        />
                    </div>
                    <div className="flex justify-center items-stretch xl:flex-nowrap flex-wrap gap-6 mb-6">
                        <TheoryCard
                            title="Example #2"
                            desc={
                                <p className="desc">
                                    1 mol Fe atoms -&gt; = 6.022 x 10
                                    <sup>23</sup> Fe atoms
                                    <br />1 mol bananas -&gt; = 6.022 x 10
                                    <sup>23</sup> bananas
                                    <br />
                                    <br />
                                    More complicated examples are molecules and
                                    compounds
                                </p>
                            }
                        />
                        <TheoryCard
                            title="Example #4"
                            desc={
                                <p className="desc">
                                    The number of carbon and hydrogen in 1 mol
                                    of a benzene compound, C<sub>6</sub>H
                                    <sub>6</sub>. (So, 6 carbons and 6
                                    hydrogens. Therefore 12 in total)
                                    <br /> <br />
                                    Number of atoms = 12 x 1 x 6.022 x 10
                                    <sup>23</sup> = 72.264 x 10
                                    <sup>23</sup> Benzene atoms = 7.2264 x 10
                                    <sup>24</sup> Benzene atoms{' '}
                                </p>
                            }
                        />
                    </div>
                    <div className="flex justify-center items-stretch xl:flex-nowrap flex-wrap gap-6">
                        <TheoryCard
                            title="Example #5"
                            desc={
                                <p className="desc">
                                    The number of carbon, hydrogen , nitrogen
                                    and oxygen atoms in 1 mol of acetaminophen
                                    (paracetamol) compound, C<sub>8</sub>H
                                    <sub>9</sub>NO<sub>2</sub>. (So, 8 carbons,
                                    9 hydrogens, 1 nitrogen and 2 oxygens.
                                    Therefore 20 in total.)
                                    <br />
                                    <br />
                                    Number of atoms = 20 x 1 x 6.023 x 10
                                    <sup>23</sup> = 120.46 x 10
                                    <sup>23</sup> Acetaminophen atoms = 1.2046 x
                                    10<sup>25</sup> Acetaminophen atoms
                                </p>
                            }
                        />
                        <TheoryCard
                            title="Example #6"
                            desc={
                                <p className="desc">
                                    The number of carbon, hydrogen and oxygen
                                    atoms in 1 mol of an ibuprofen compound, C
                                    <sub>13</sub>H<sub>18</sub>O<sub>2</sub>.
                                    (So 13 carbons, 18 hydrogens, and 2 oxygens.
                                    Therefore, 33 in total) <br /> <br />
                                    Number of atoms = 33 x 1 x 6.022 x 10
                                    <sup>23</sup> = 198.726 x 10<sup>23</sup>{' '}
                                    Ibuprofen atoms = 1.98726 x 10<sup>25</sup>{' '}
                                    Ibuprofen atoms
                                    <br />
                                    <br />
                                    Note: Avagradro’s Constant is 6.022 x 10
                                    <sup>23</sup> which refers to the amount of
                                    atoms for 1 mol of any given element.{' '}
                                </p>
                            }
                        />
                    </div>
                </div>
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
            <section className="section lg:py-10">
                <div className="flex flex-col gap-4">
                    {CONCEPTS.map((item) => (
                        <Card {...item} key={item.title} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Concepts;
