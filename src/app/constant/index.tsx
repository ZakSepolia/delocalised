import BNZ from "asset/img/BNZ.png";
import ArtWork from "asset/img/artwork.png";
import AtomStructure from "asset/img/atom-structure.png";
import Dacron from "asset/img/dacron.png";
import Eth from "asset/img/eth.png";
import Happy from "asset/img/happy.png";
import Light from "asset/img/light.png";
import WhiteMedia from "asset/img/media-white.png";
import Media from "asset/img/media.png";
import Metamask from "asset/img/metamask.png";
import Polystyrene from "asset/img/polystyrene.png";
import Reactant from "asset/img/reactant.png";
import Remove from "asset/img/remove.png";
import StakeHolder from "asset/img/stakeholder.png";
import Structure from "asset/img/structure.png";
import WhiteTelegram from "asset/img/telegram-white.png";
import Telegram from "asset/img/telegram.png";
import WhiteTwitter from "asset/img/twitter-white.png";
import Twitter from "asset/img/twitter.png";
import Unhappy from "asset/img/unhappy.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import Image from "next/image";
import Link from "next/link";
import FeatureBtn from "../components/FeatureBtn";
import OutlineButton from "../components/OutlineButton";
import { ICardProps } from "../model";
import NFT1 from "asset/new-nft/1.png";
import NFT2 from "asset/new-nft/2.png";
import NFT3 from "asset/new-nft/3.png";
import NFT4 from "asset/new-nft/4.png";
import NFT5 from "asset/new-nft/5.png";
import NFT6 from "asset/new-nft/14.png";
import NFT7 from "asset/new-nft/8.png";
import NFT8 from "asset/new-nft/13.png";
import NFT9 from "asset/new-nft/6.png";
import NFT10 from "asset/new-nft/9.png";
import NFT11 from "asset/new-nft/10.png";
import NFT12 from "asset/new-nft/11.png";
import NFT13 from "asset/new-nft/12.png";
import NFT14 from "asset/new-nft/7.png";

export const NAV_ITEMS = [
  {
    title: "Concepts",
    link: "/concepts",
    type: "link",
  },
  {
    title: "Atom Economy",
    link: "/atom-economy",
    type: "link",
  },

  // {
  //   title: "Our Products",
  //   link: "/products",
  //   type: "link",
  // },
  // {
  //   title: "More",
  //   type: "dropdown",
  //   link: "",
  //   children: [
  //     {
  //       title: "Safety",
  //       link: "/safety",
  //       type: "link",
  //     },
  //     {
  //       title: "Download Creative Assets",
  //       link: "/download-creative-assets",
  //       type: "link",
  //     },
  //     {
  //       title: `Ouroboros NFT's`,
  //       link: "/mint-nft",
  //       type: "link",
  //     },
  //     {
  //       title: "Trading",
  //       link: "/trading",
  //       type: "link",
  //     },
  //   ],
  // },
];
export const NAV_ITEMS_MOBILE = [
  {
    title: "Concepts",
    link: "/concepts",
    type: "link",
  },
  {
    title: "Atom Economy",
    link: "/atom-economy",
    type: "link",
  },
  // {
  //   title: "Our Products",
  //   link: "/products",
  //   type: "link",
  // },
  // {
  //   title: "Safety",
  //   link: "/safety",
  //   type: "link",
  // },
  // {
  //   title: "Download Creative Assets",
  //   link: "/download-creative-assets",
  //   type: "link",
  // },
  // {
  //   title: `Ouroboros NFT's`,
  //   link: "/mint-nft",
  //   type: "link",
  // },
  // {
  //   title: "Trading",
  //   link: "/trading",
  //   type: "link",
  // },
];
export const BTN_GROUP = [
  // {
  //   label: "Main",
  //   link: "https://t.me/+z6RqDniDbLAxM2U0",
  // },
  // {
  //   label: "News",
  //   link: "https://t.me/+YM4oOYsotQtkYmE0",
  // },
  // {
  //   label: "Taxes",
  //   link: "https://t.me/+ihzyal4KgHdkZmFk",
  // },
  // {
  //   label: "Safety",
  //   link: "https://t.me/+jsh8__hOreowNDdk",
  // },
  // {
  //   label: "Trading",
  //   link: "https://t.me/+nPMN2aZdd_80OGU0",
  // },
  // {
  //   label: "Memes",
  //   link: "https://t.me/+afb_13WDD6JmYmU0",
  // },
  // {
  //   label: "Designs",
  //   link: "https://t.me/+fJXd6zhyxTgwMmE0",
  // },
];
export const CARDS: ICardProps[] = [
  {
    title: "Is delocalised similar to decentralised?",
    children: (
      <p>
        Yes. Both have planning and decision making distributed away from
        central authority/ compound. In fact, Benzene is slightly more stable
        with a delocalised electron cloud but still there are fluctuations in
        enthalpy change. Enthalpy change (ΔH) is the amount of heat energy
        transferred during a chemical reaction at constant pressure.
        <br />
        <br />
        What the stability refers to is Benzene spreads energy over a larger
        area (a cloud shape) instead of keeping it confined to a small space
        where the electron charges are localised.
        <br />
        <br />
        It was previously thought that Benzene and cyclohexa-1,3,5-triene were
        the same due to Kekulé&apos;s model (1865) of Benzene. Kekulé
        constructed the shape after having a dream of a snake eating its tail
        (called ouroboros) while a professor in gates university, Belgium .
        However, X-ray cogallograthy has proven all bond lengths and shape in
        the hexagon are regular rather than irregular. A carbon-carbon single
        bond has an average length of 0.154 nanometres. A carbon-carbon double
        bond has an average length of 0.133 nanometres. Therefore, Kekule&apos;s
        model cannot be correct.
        <br />
        <br />
        Another proof is cyclohexa-1,3,5-triene is -360 kJ / mol enthalpy
        change. (We measure enthalpy change in kJ / mol usually.) In comparison,
        Benzene is -208 kJ / mol enthalpy change. This means Benzene has a
        different and slightly more stable structure then cyclohexa-1,3,5-triene
        due to less heat energy transferred (152 kJ / mol less) at constant
        pressure for Benzene.
        <br />
        <br />
        It&apos;s worth noting cyclohexa-1,3,5-triene is still used for
        convenience to describe Benzene (for simplicity).
        <br />
        <br />
        Another Definition of &apos;delocalise&apos; is 2. to be free from local
        influences. Now, there is a-lot to discuss about this. Let the community
        know your story by sharing it in a video testimonial.
      </p>
    ),
  },
  {
    title: "Is there a BNZ wallet?",
    children: (
      <p>
        BNZ is a ERC20-compliant token on the Ethereum blockchain. Any wallet
        that supports Ethereum can store BNZ. The recommended wallet is the{" "}
        <Link
          href="http://metamask.io/"
          target="_blank"
          className="text-primary"
        >
          MetaMask browser extension.
        </Link>
        <br />
        <br />
        If you have more then $5,000 consider getting a hardware wallet like a
        Ledger. You can connect your Ledger to MetaMask and use BNZ as usual.
      </p>
    ),
  },
  {
    title: `What's the roadmap?`,
    children: (
      <p>
        BNZ was launched as an complete, environmentally friendly reactant.
        Don&apos;t expect any work from other users.
        <br />
        <br />
        The BNZ roadmap features a three step synthesis, where step one includes
        listing on CoinMarketCap / Coingecko etc ,and getting $BNZ trending on
        Twitter, while step two includes listing on centralized exchanges (CEXs)
        and step three includes “tier 1” exchange listings and what the team
        calls the “benzene ring”.
      </p>
    ),
  },
  {
    title: "Is BNZ a Ponzi, pyramid scheme, scam, MLM, ICO or security?",
    children: <p>No.</p>,
  },
  {
    title: "Can BNZ be used as a day to day currency?",
    children: (
      <p>
        Even though BNZ was designed to be an Aromatic group and not a Medium of
        Exchange it works fine as a day-to-day currency because it follows the
        ERC20 rules and regulations.
      </p>
    ),
  },
  {
    title: `What is BNZ's long term goal?`,
    children: (
      <p>
        To ease the job of a doctor and pharmacist and other middlemen. Based on
        the Medicines Act of many countries dividing medicines into classes
        which allows analgesics for example paracetamol to be sold in
        non-pharmacies (without a prescription). Although limited in drug
        choices you should take control of the many aches that often hold you
        back from tidying your bed, doing your chores , exercise and much more.
        What you should know is acetaminophen (paracetamol) adults can take 2 ,
        500mg tablets, 4 times in 24 hours. You must wait at least 4 hours
        between doses. For ibuprofen you can usually take 1 or 2 tablets (200mg)
        every 4 to 6 hours, but shouldn&apos;t take more than 1,200mg (6 x
        200mg) tablets in the space of 24 hours. As Chemical scientists (not
        pharmacists) we don&apos;t sell medications in shops or supermarkets.
        Other long term goals is to provide information about Benzene and
        it&apos;s uses. Some noteable examples are Detergents, Kevlar, Dacron
        and Azo dyes which are aromatic. What&apos;s interesting about Azo dyes,
        is it&apos;s used in almost everything including Textiles dyes for the
        vibrant reds, oranges, and yellows. These dyes adhere to materials such
        as cotton. Leather&apos;s colour uses azo dyes to dye leather products.
        Food Industry uses azo dyes to color some foods. It&apos;s also used in
        cosmetics such as lipstick and paint.
      </p>
    ),
  },
  {
    title: "Where is the whitepaper?",
    children: (
      <>
        <p className="mb-8">
          Here is a synopsis of the whitepaper.
          <br />
          <br />
          Benzene is an aromatic and one of the 20 most sought-after base
          chemicals. It is available naturally, but due to high extraction and
          logistical costs, it is not preferred. For over a century, industrial
          benzene has been produced from naphtha through the Oil to Chemicals
          (O2C) method. This involves the distillation of crude oil, which
          creates fractions based on boiling points, one of which is naphtha — a
          crucial feedstock for producing aromatic hydrocarbons like toluene and
          benzene.
          <br />
          <br />
          It is estimated that by 2029, the crude oil demand would peak and
          there would be a need for output optimization. The R&D BNZ aims to
          carry out in this area could generate high revenues through patents,
          of which 10% of the profits from the patents created would be given to
          charity to improve education. The sustainability or the atom economy
          can be improved with a reusable catalyst.
          <br />
          <br />
          In the whitepaper we discuss how we can improve the atom economy of
          crude oil by using a more efficient catalyst to produce a better
          approach to producing petrochemical benzene.
          <br />
          <br />
          However, it’s worth mentioning here BNZ is a utility and you will
          derive no benefit from the research paper, the paper is for only
          academic purposes to improve specifically chemists understanding of
          Catalysts. BNZ’s main function is the services provided such as the
          ability to purchase our NFT collection called Ouroboros, which
          symbolizes in alchemical traditions as the constant battle between
          creation and destruction in the pursuit of wisdom and knowledge. The
          information the ring share as a community overturns academia because
          we are providing education to everyone. Benzene can be the first step
          in understanding Organic Chemistry.
        </p>
        <Link href="/BNZWhitepaper.pdf" target="_blank">
          <OutlineButton btnClassName="hover:scale-100" label="Whitepaper" />
        </Link>
      </>
    ),
  },
];
export const TRANSACTION1 = [
  // {
  //   image: Telegram,
  //   label: "Main",
  //   link: "https://t.me/+z6RqDniDbLAxM2U0",
  //   id: 1,
  //   hover: WhiteTelegram,
  // },
  // {
  //   image: Media,
  //   label: "",
  //   link: "https://www.reddit.com/r/BNZcrypto/s/2elKDU9llX",
  //   id: 2,
  //   hover: WhiteMedia,
  // },
  // {
  //   image: Telegram,
  //   label: "News",
  //   link: "https://t.me/+YM4oOYsotQtkYmE0",
  //   id: 3,
  //   hover: WhiteTelegram,
  // },
  // {
  //   image: Twitter,
  //   label: "",
  //   link: "https://x.com/i/communities/1829246913323119013",
  //   id: 4,
  //   hover: WhiteTwitter,
  // },
  // {
  //   image: Telegram,
  //   label: "Taxes",
  //   link: "https://t.me/+ihzyal4KgHdkZmFk",
  //   id: 5,
  //   hover: WhiteTelegram,
  // },
  // {
  //   image: Media,
  //   label: "",
  //   link: "https://www.reddit.com/r/BNZcrypto/s/2elKDU9llX",
  //   id: 6,
  //   hover: WhiteMedia,
  // },
];
export const TRANSACTION2 = [
  // {
  //   image: Twitter,
  //   label: "",
  //   link: "https://x.com/i/communities/1829246913323119013",
  //   id: 7,
  //   hover: WhiteTwitter,
  // },
  // {
  //   image: Telegram,
  //   label: "Safety",
  //   link: "https://t.me/+jsh8__hOreowNDdk",
  //   id: 8,
  //   hover: WhiteTelegram,
  // },
  // {
  //   image: Media,
  //   label: "",
  //   link: "https://www.reddit.com/r/BNZcrypto/s/2elKDU9llX",
  //   id: 9,
  //   hover: WhiteMedia,
  // },
  // {
  //   image: Telegram,
  //   label: "Trading",
  //   link: "https://t.me/+nPMN2aZdd_80OGU0",
  //   id: 10,
  //   hover: WhiteTelegram,
  // },
  // {
  //   image: Twitter,
  //   label: "",
  //   link: "https://x.com/i/communities/1829246913323119013",
  //   id: 11,
  //   hover: WhiteTwitter,
  // },
  // {
  //   image: Telegram,
  //   label: "Memes",
  //   link: "https://t.me/+afb_13WDD6JmYmU0",
  //   id: 12,
  //   hover: WhiteTelegram,
  // },
];
export const FOOTER_ITEMS = [
  // {
  //   title: "Concepts",
  //   link: "/concepts",
  // },
  // {
  //   title: "Atom Economy",
  //   link: "/atom-economy",
  // },
  // {
  //   title: "Safety",
  //   link: "/safety",
  // },
  // {
  //   title: "Download Creative Assets",
  //   link: "/download-creative-assets",
  // },
  // {
  //   title: "Trading",
  //   link: "/trading",
  // },
];
const REACTANT_DATA = [
  {
    reactant: "Benzene",
    product: "Acetamonophen",
  },
  {
    reactant: "Isobutylbenzene",
    product: "Ibuprofen",
  },
  {
    reactant: "2-hydroxybenzoic acid",
    product: "Aspirin",
  },
];
const EXAMPLE_DATA = [
  {
    example: "Processing",
    ethanol: "Yeast breaks down the sugar cane to produce alcohol",
  },
  {
    example: "Use",
    ethanol: "Bio ethanol is used in Brazil to fuel cars",
  },
];
export const BNZ_FEATURES = [
  // {
  //   img: StakeHolder,
  //   title: "BNZ is for stakeholders",
  //   content: (
  //     <p className="font-semibold text-base text-white">
  //       Chemists when joining their governing body for their job will become
  //       known as “stakeholders”. Chemists are often research and development
  //       staff who find the best solutions for drug production and finding ways
  //       to reduce impurities in production during a synthesis, crystallisation,
  //       filtration, washing and drying. For example, Chemists (not pharmacists)
  //       in the UK join &apos;The Royal Society of Chemistry” which is a
  //       professional body for chemical scientists. Chemical scientists put
  //       simply are drug investigators who delve into the present and future of
  //       the drugs we use in healthcare.
  //     </p>
  //   ),
  // },
  // {
  //   img: ArtWork,
  //   title: "Artwork",
  //   content: (
  //     <p className="font-semibold text-base text-white">
  //       {`You can purchase artwork on our website with $BNZ. Ouroboros in alchemical traditions means the constant cycle of creation and destruction in the pursuit of knowledge and wisdom. $BNZ acts as an educational tool into insights of the life of the famous theoretical chemist called August Kekulé.`}
  //     </p>
  //   ),
  // },
  // {
  //   img: Remove,
  //   title: "BNZ removes middlemen",
  //   content: (
  //     <p className="font-semibold text-base text-white">
  //       BNZ is an immutable smart contract. By design there is no central entity
  //       in BNZ. No one owes anybody anything. As long as you have your private
  //       key, you truly own your BNZ.
  //     </p>
  //   ),
  // },
  {
    img: Reactant,
    title: "Ben is a reactant",
    content: (
      <div>
        <p className="font-semibold text-base mb-4 text-white">
          As seen below, Ben is described as a benzene ring.
        </p>
        <div className="p-2 rounded-[24px] bg-[rgba(0,0,0,0.04)] mb-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-xs text-white/45 w-1/2">
                  A REACTANT
                </TableHead>
                <TableHead className="font-semibold text-xs text-white/45">
                  PRODUCT
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {REACTANT_DATA.map((item) => (
                <TableRow key={item.reactant}>
                  <TableCell className="font-semibold text-base text-white">
                    {item.reactant}
                  </TableCell>
                  <TableCell className="font-semibold text-base text-white">
                    {item.product}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* <p className="font-semibold text-base mb-4 text-white">
          Ben should be stored in your private wallet. Check out security for
          more information.
        </p> */}
      </div>
    ),
  },
];
export const HOWITWORK_QUESTIONS = [
  {
    title: `BNZ peers value their independence`,
    children: (
      <p>
        Which may be why BNZ is one of the most popular coins traded in
        decentralized exchanges, where there is no signup and no counterparty
        risk. Because this happens onchain, you can inspect every address,
        seeing when it’s bought or sold, whether it has BNZ stakes open, when
        those stakes expire, what other coins they hold, everything!
        <br />
        <br />
        Even though BNZ has the most transparent trading in the world it still
        encourages people to hold instead of trade. Trading is bad for your
        health. Most traders lose. The only party that consistently benefits
        from trading is the exchange that wins because of fees. Margin trading
        is even worse because it amplifies these effects. BNZ encourages holders
        to Stake which is the opposite of trading.
        <br />
        <br />
        Holders win, traders lose. The longer your time horizon the better.{" "}
      </p>
    ),
  },
  {
    title: `BNZ has no middlemen.`,
    children: (
      <p>
        BNZ is peer-to-peer or practitioner to practitioner with no sign up on
        the Blockchain. With no risk or middlemen.
        <br />
        <br />
        Many people have lost Millions to scams because they gave up control of
        their money.
        <br />
        <br />
        BNZ is designed how cryptocurrency was invented. To remove risk and the
        need to trust other people with your money. BNZ does well in
        pharmaceuticals and has no expectations of work from others. BNZ
        performs well only due to its design and community.
        <br />
        <br />
        The goal of BNZ is for you to safely prescribe supermarket drugs for
        yourself at the comfort of your residence. Make sure to understand the
        whitepaper. Ben is a reactant. As long as you have your private key, you
        truly own your Ben.
      </p>
    ),
  },
  {
    title: `BNZ has superior branding`,
    children: (
      <>
        <p className="mb-8">
          Chemical compounds are futuristic. Benzene was originally designed by
          Kekule in a lucid dream of a snake eating its tail. Benzene is similar
          to Bitcoin with two syllables and both BNZ / BTC are starting
          materials (reactants) for a reaction.
          <br />
          <br />
          Pioneering brand names like “Benzene” otherwise known as “Benjamin”
          are high-risk, high reward. Once they gain awareness people associate
          the names only with the brand and nothing else.
          <br />
          <br />
          The gradient of the logo has the maximum contrast of green. On coin
          ranking sites the hexagon represent growth, up and to the right. The
          hexagon logo is the benzene formula that is the reactant of
          paracetamol and similar reactant isobutylbenzene for ibuprofen and 2-
          hydroxybenzoic acid for aspirin.
        </p>
        <Link href="/download-creative-assets">
          <OutlineButton
            btnClassName="hover:scale-100 transition branding-assets-btn"
            label={
              <div className="flex gap-[10px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.33464 5.50008V15.5001C8.33464 16.6669 8.33464 17.2502 8.10757 17.6959C7.90783 18.0879 7.58912 18.4066 7.19712 18.6063C6.75147 18.8334 6.16808 18.8334 5.0013 18.8334C3.83453 18.8334 3.25114 18.8334 2.80549 18.6063C2.41348 18.4066 2.09477 18.0879 1.89504 17.6959C1.66797 17.2502 1.66797 16.6669 1.66797 15.5001V5.50008C1.66797 4.33331 1.66797 3.74992 1.89504 3.30427C2.09477 2.91226 2.41348 2.59355 2.80549 2.39382C3.25114 2.16675 3.83453 2.16675 5.0013 2.16675C6.16808 2.16675 6.75147 2.16675 7.19712 2.39382C7.58912 2.59355 7.90783 2.91226 8.10757 3.30427C8.33464 3.74992 8.33464 4.33331 8.33464 5.50008ZM5.83464 16.9584C6.17981 16.9584 6.45964 16.6786 6.45964 16.3334C6.45964 15.9882 6.17981 15.7084 5.83464 15.7084H4.16797C3.82279 15.7084 3.54297 15.9882 3.54297 16.3334C3.54297 16.6786 3.82279 16.9584 4.16797 16.9584H5.83464Z"
                    fill="url(#paint0_linear_1011_421)"
                  />
                  <path
                    d="M15.8846 9.34543L11.0195 14.4201C10.4113 15.0545 10.1072 15.3717 9.84592 15.2667C9.58464 15.1616 9.58464 14.7222 9.58464 13.8434L9.58464 6.97825C9.58561 6.42826 9.80402 5.90097 10.1922 5.51139L11.0712 4.63244L11.4297 4.35831C12.2666 3.71852 12.685 3.39862 13.1407 3.30033C13.5159 3.21943 13.9061 3.24371 14.2683 3.3705C14.7083 3.52453 15.0838 3.89383 15.8349 4.63244C16.6679 5.4654 17.0844 5.8819 17.2388 6.35888C17.3705 6.76568 17.3738 7.20314 17.2483 7.61189C17.1012 8.09117 16.6957 8.50926 15.8846 9.34543Z"
                    fill="url(#paint1_linear_1011_421)"
                  />
                  <path
                    d="M10.6594 18.8334H14.9175C16.0843 18.8334 16.6676 18.8334 17.1133 18.6063C17.5053 18.4066 17.824 18.0879 18.0237 17.6959C18.2508 17.2502 18.2508 16.6669 18.2508 15.5001C18.2508 14.3333 18.2508 13.7499 18.0237 13.3043C17.824 12.9123 17.5053 12.5936 17.1133 12.3938C16.6676 12.1667 16.0843 12.1667 14.9175 12.1667H14.7344L9.89968 16.9984C9.69797 17.2 9.58464 17.4493 9.58464 17.7345C9.58464 18.3281 10.0658 18.8334 10.6594 18.8334Z"
                    fill="url(#paint2_linear_1011_421)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1011_421"
                      x1="1.66797"
                      y1="10.0455"
                      x2="18.2505"
                      y2="10.1932"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6EAF4C" />
                      <stop offset="1" stop-color="#B7D349" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1011_421"
                      x1="1.66797"
                      y1="10.0455"
                      x2="18.2505"
                      y2="10.1932"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6EAF4C" />
                      <stop offset="1" stop-color="#B7D349" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1011_421"
                      x1="1.66797"
                      y1="10.0455"
                      x2="18.2505"
                      y2="10.1932"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6EAF4C" />
                      <stop offset="1" stop-color="#B7D349" />
                    </linearGradient>
                  </defs>
                </svg>
                Get Branding Assets
              </div>
            }
          />
        </Link>
      </>
    ),
  },
  {
    title: `Other pharmaceutical industries`,
    children: (
      <p>
        There are many pharmaceutical industries including oncology,
        antibiotics, cardiovascular medications, psychiatric drugs and more. The
        focus is on pain relievers as these are the most common OTC medications
        that anyone can have to relieve symptoms of headache, period pain, back
        pain, earache, toothache, sinusitis, sprains, strains, recovering from
        minor medical procedures and fever such as in colds or flu.
        <br />
        <br />
        Acetaminophen (paracetamol) is often the first port of call. With NSAIDS
        such as ibuprofen and aspirin usually an alternative. Weak opioid
        painkillers such as codeine and dihydrocondeine are normally added to
        another painkiller such as acetaminophen (paracetamol).
      </p>
    ),
  },
];
export const CHEMISTRY_CARDS = [
  {
    title: "Polystyrene",
    desc: "Benzene can be used in plastics, polystyrene can be used for a myriad of things, from insulating coolers and cold storage, props for theme parks and movie sets, floatation for pontoons and marinas and the list goes on.",
    img: Polystyrene,
  },
  {
    title: "Dacron",
    desc: "Synthetic fibres e.g. Dacron or Terylene. Polyesters are often used in making synthetic fibres for use in clothing.",
    img: Dacron,
  },
];
export const CONCEPTS = [
  // {
  //   title: `BENZENE Ethereum network`,
  //   children: (
  //     <p className="desc">
  //       Ethereum is the largest blockchain network BNZ (BENZENE) and BTC
  //       (Bitcoin) are on. You can think of the starting materials (reactants) in
  //       crypto as BENZENE or Bitcoin.
  //     </p>
  //   ),
  // },
  {
    title: `What about Conservation of Moles.`,
    children: (
      <p className="desc">
        No, moles is not usually conserved in a chemical reaction. The rule is
        called conservation of mass. When things burn, no atoms are created or
        destroyed in a chemical reaction. However, the atoms in the reactants
        may not become the desired product. They instead form by- products.
        <br />
        <br />
        For the reaction below, the balanced equation is the ratio between the
        amount in moles of any two compounds providing a comparison of the
        ratios of the molecules necessary to complete the reaction. We cannot
        calculate mole ratio for an unbalanced equation. <br />
        <br />
        Mole ratio
        <br />
        The mole ratio is a conversion factor between any two chemicals in a
        reaction. 2H
        <sub>2</sub> + O<sub>2</sub> -&gt; 2H<sub>2</sub>O<br /> =&gt; same
        number and types of elements (matter) on either side.
        <br /> The mole ratio for the coefficients of the balanced chemical
        equation is 2:1:2.
        <br />
        <br />
        So here there are 3 moles in the reactants and 2 moles in the products.
        <br />
        <br />
        Note the number of moles produced for individual products varies from
        reaction to reaction. If there are more moles in the reactants used then
        the products made the explanation would be the same; that the total mass
        of each side of the equation is constant.
      </p>
    ),
  },
  {
    title: `Conservation in Biomass`,
    children: (
      <>
        <p className="desc mb-4">
          Biomass is biological material that has been recovered from
          once-living organisms (plants) . It can be used as a source of
          biofuels (a renewable energy source) to reduce our dependence on
          fossil fuels, and to help reduce air pollution. Using biomass as fuel
          still puts carbon dioxide back into the atmosphere, but it’s the same
          carbon dioxide taken from the air as the biomass was produced. The use
          of biomass for energy production is carbon neutral.
        </p>
        <div className="p-2 rounded-[24px] border border-[#181818]/8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-xs text-[#181818]/45 w-1/2">
                  EXAMPLES
                </TableHead>
                <TableHead className="font-semibold text-xs text-[#181818]/45">
                  BIO ETHANOL
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {EXAMPLE_DATA.map((item) => (
                <TableRow key={item.example}>
                  <TableCell className="font-semibold text-base">
                    {item.example}
                  </TableCell>
                  <TableCell className="font-semibold text-base">
                    {item.ethanol}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    ),
  },
  {
    title: `Chemistry MCQ's`,
    children: (
      <>
        <p className="mb-4 desc">
          Here are some questions for you do look through to do with organic
          chemistry the answers are given to not overcomplicate things.
        </p>
        <Link href="/Chemistry MCQs (5).pdf" target="_blank">
          <OutlineButton
            label="Organic Chemistry Questions"
            btnClassName="hover:scale-100"
          />
        </Link>
      </>
    ),
  },
  {
    title: `MolView is a tool`,
    children: (
      <p className="desc">
        <Link
          href="https://molview.org/"
          target="_blank"
          className="text-primary"
        >
          MolView
        </Link>{" "}
        is a powerful web-tool to search through various scientific databases.
        Drawing chemical structure using MolView is very convenient. In fact, we
        can get the structure of any chemical and protein compounds by searching
        using its names. MolView uses PubChem, RSC Protein Data Bank, or
        Crystallography Open Database to retrieve the structures. The chemical
        structure is of high quality with 2-D and 3-D visualization.
        Importantly, a 3-D view of the chemical structure looks great compared
        to other web-tools. We can rotate the structure as we please for best
        viewing. Of course, the representation of the chemical structure could
        be changed to ball & stick, ribbon, cylinder & plate, B-factor tube,
        C-alpha trace, wireframe, line, or van der Waals spheres. For those who
        are working with protein structure, Viewing protein structure with
        MolView definitely stunning.
      </p>
    ),
  },
];
export const ATOM_QUESTIONS = [
  {
    title: `Aspirin is willow bark.`,
    children: (
      <>
        <p className="mb-4 desc">
          Yes, in fact in the olden days people would sit under a willow tree or
          eat the willow bark to heal. In just two steps the product is aspirin.
          Willow bark is called Salicin. The old sayings that you hear contain a
          lot of truth. Here is the reaction.
          <br />
          <br />
          Willow bark is called Salicin. The old sayings that you hear (learn)
          contain a lot of truth.
          <br />
          <br />
          Here is the reaction.
        </p>
        <Image src={AtomStructure} alt="Aspirin" />
      </>
    ),
  },
  {
    title: `What about acetaminophen (paracetamol) atom economy`,
    children: (
      <>
        <p className="mb-4 desc">
          The process to produce paracetamol (acetaminophen) can be many methods
          including the , Nitration of chlorobenzene (38% atom economy)
          Nitration of Phenol (54% atom economy) Reduction of Nitrobenzene (52%
          atom economy) or the Hoechst-Celanese (57% atom economy). This is
          adapted from the &quot;royal college of chemistry&quot; paracetamol
          synthesis & atom economy.
          <br />
          <br />
          This is adapted from the royal college of chemistry paracetamol
          synthesis & atom economy. <br />
          <br />
          **Is route 2 with atom economy of roughly 54% (varies from company to
          company)
          <br />
          <br />
          The atom economy for the Phenol method is why manufacturer don’t
          choose the process. However, Phenol produces impurities metacetamol,
          4-nitrophenol and 4- aminophenol. In comparison, the Hoechst-Celanese
          method only produces 4- aminophenol impurity. The amount of 4-
          aminophenol has to be controlled due to its toxicity to the kidneys
          and its effect on abnormalities of a developing foetus during
          pregnancy (can lead to birth defects).
          <br />
          <br />
          (Toxicity of the kidneys is called “Nephrotoxic” and abnormalities in
          a developing foetus during pregnancy is called “Teratogenic”.)
        </p>
        <p className="mt-4 mb-8 desc">
          Benzene is the starting material for acetaminophen (paracetamol).
          Worth pointing out because BNZ is a reactant. Here is more information
          on retrieving benzene from some of the more advanced steps in the
          acetaminophen synthesis.
          <br />
          <br />
          We are currently conducting research into recovering benzene from
          acetaminophen and plan to find a higher atom economy for the compound.
          Currently some research into the subject is shared by{" "}
          <span className="text-primary">“The Royal Society of Chemistry”</span>
          . Green Chemistry: Step Synthesis of Acetaminophen.
          <br />
          <br />
          Moreover, phenol route, p-nitrochlorobenzene route, nitrobenzene
          route, Hoechst-Celanese process (p-Hydroxyacetophene hydrazine route.
          <br />
          <br />
          There are many steps to producing acetaminophen or paracetamol of
          which is paracetamol crystallisation, filtration, washing and drying.
          These steps are important for manufacturing any of the named
          medications.
        </p>
        <OutlineButton
          btnClassName="hover:scale-100"
          label={
            <Link
              href="https://www.rsc.org/suppdata/gc/c4/c4gc00166d/c4gc00166d1.pdf"
              target="_blank"
            >
              Paracetamol synthesis
            </Link>
          }
        />
      </>
    ),
  },
  {
    title: `What about Ibuprofen?`,
    children: (
      <p className="desc">
        Ibuprofen industrially was a five step synthesis, the old process was
        approved as an over the counter drug in 1980’s.
        <br />
        <br />
        Modern ibuprofen industrially was designed in 1990’s to be more
        efficient, the process is a 3 step process.
        <br />
        <br />
        The first step utilized anhydrous hydrogen fluoride as both a catalyst
        and solvent, which was then recycled and reused. Additionally, the true
        brilliance behind the BHC method is the reduced amount of unwanted waste
        due to the generation of only one molecule of water as the byproduct;
        this, among other factors, have contributed to a genuinely green
        synthesis.
      </p>
    ),
  },
  // {
  //   title: `What about other drugs?`,
  //   children: (
  //     <>
  //       <p className="mb-8 desc">
  //         With a focus on the analgesics industry should not limit to having
  //         discussions about other drugs including Anastrozole which prevents
  //         breast cancer. And many other cancer preventing drugs.
  //         <br />
  //         <br />
  //         Many other drugs can save people’s lives and the hope is further
  //         research will lead to development of longer and happier lives.
  //         <br />
  //         <br />
  //         Why is there no page on the oncology drugs etc?
  //         <br />
  //         <br />
  //         The market is much more secretive in there industrial production.
  //         <br />
  //         <br />
  //         Here are some questions for you do look through to do with organic
  //         chemistry the answers are given to not overcomplicate things.
  //       </p>
  //       <Link href="/Chemistry MCQs (5).pdf" target="_blank">
  //         <OutlineButton
  //           label="Organic Chemistry Questions"
  //           btnClassName="hover:scale-100"
  //         />
  //       </Link>
  //     </>
  //   ),
  // },
  // {
  //   title: `Code of BNZ`,
  //   children: (
  //     <p className="desc">
  //       Benzene has some of the code like Bitcoin. Both being decentralised. The
  //       full smart contract of BNZ is here.
  //       <br />
  //       <br />
  //       Benzene has some unique code.{" "}
  //       <span className="text-primary">
  //         <Link href="/BenzeneToken Code.sol">Check out the code here.</Link>
  //       </span>
  //     </p>
  //   ),
  // },
  // {
  //   title: `BNZ (Benzene) Ethereum network`,
  //   children: (
  //     <p className="desc">
  //       Ethereum is the blockchain network BNZ is on. Ethereum is the largest
  //       chain with Bitcoin on. Benzene the aromatic group is still technically a
  //       reactant, a compound that starts the reaction for the named
  //       medications.(On Ethereum).
  //     </p>
  //   ),
  // },
];
export const SAFETY_FEATURES = [
  {
    img: Happy,
    title: "Do",
    content: (
      <p className="font-semibold text-base text-white">
        If you plan to store more than $5,000 of crypto, you should get a
        hardware wallet. Keep in mind that even a small $500 investment may
        easily grow into a $5,000 one. Hardware wallets are very easy to use, so
        don&apos;t be intimidated.
        <br />
        <br />
        1) Buy a Trezor Model T. (roughly $179).
        <br />
        2) Once your Trezor arrives follow the directions and set it up. Write
        down the 20-33 &quot;seed&quot; words (or &quot;secret recovery
        phrase&quot;) it shows you by hand with a pen on a piece of paper. Store
        that piece of paper in a different location from your Trezor; such as a
        safe desposit box at your bank, or in the house of a friend or family
        member you trust. Note Shamir Recovery Shares are included. I would go
        for that. Ensure to set a minimum of 3 recovery shares with 2 required
        to log into wallet. Consider giving one of the shares to individual
        family member’s or different safe’s as added security.
        <br />
        3) Download the MetaMask browser extension.
        <br />
        4) Connect your Trezor to MetaMask.
        <br />
        5) Send a small amount of crypto to your Trezor (the Ethereum address
        shown within MetaMask).
        <br />
        6) Try sending the amount back to another wallet you own to test if your
        Trezor works and you set up everything correctly.
        <br />
        7) Learn more about how BNZ works,talk with the community and be
        responsible.
      </p>
    ),
  },
  {
    img: Unhappy,
    className: "bg-pinkear",
    title: `Don’t`,
    content: (
      <p className="font-semibold text-base text-white">
        Lose your secret recovery phrase (or &quot;seed&quot;), show it to
        anyone, make a photo of it, store it online or print it out. Never ever
        type those 24 words into any computer or give them to someone who&apos;s
        asking for them. If you need to restore your wallet you enter the 24
        words on the Ledger itself. If a website asks for your seed words it is
        100% a scam.
      </p>
    ),
  },
  {
    img: Happy,
    title: "Do",
    content: (
      <ol className="text-base text-white list-disc font-normal list-inside ps-2">
        <li>
          Split the 24 words up. Write the words in the right order on a single
          piece of paper, there is usually paper given with the Ledger.
        </li>
        <li>
          Write down something like &quot;Words for my $20,000 crypto
          investment&quot; next to the recovery share words. You&apos;ll
          remember what they are for without writing anything next to them.
        </li>
      </ol>
    ),
  },
  {
    img: Unhappy,
    title: `Don’t`,
    className: "bg-pinkear",
    content: (
      <>
        <ol className="text-base text-white list-decimal font-normal list-inside ps-2">
          <li>
            Brag about how rich you are. If you really need to, do it online and
            as anonymously as possible. Use an alias.
          </li>
          <li>
            Get greedy. You try out margin trading (You will lose all of your
            money.)
          </li>
          <li>
            Answer random DMs from &quot;admins&quot; that try to help you. They
            are all scammers.
          </li>
          <li>is no BNZ support/help desk.</li>
          <li>Try to Spam, shill and be rude.</li>
          <li>Go out and buy something you don&apos;t understand.</li>
          <li>
            Expect profits from the work of others. BNZ is not a security,
            nobody will work for you.
          </li>
        </ol>
        <br />
        <p className="font-semibold text-base text-white">
          Nobody owes you anything.
        </p>
      </>
    ),
  },
  {
    img: Light,
    title: "I own less than $500 of crypto",
    content: (
      <p className="font-semibold text-base text-white">
        In this case using plain MetaMask without a hardware wallet is
        sufficiently secure. Still write down your security phrase.
        <br />
        <br />
        It’s not worth it to spend $179 on a piece of hardware to protect less
        than $500.
      </p>
    ),
  },
  {
    img: Light,
    title: "I own more than $500,000 of crypto",
    content: (
      <p className="font-semibold text-base text-white">
        Congratulations! Consider a multi-sig setup with Gnosis safe.
        Essentially multi-sig requires multiple wallets to sign off before a
        transaction can be made.
        <br />
        <br />
        In case you need any help consider asking the BNZ group about how you
        setup a Gnosis safe.
      </p>
    ),
  },
];
export const DOWNLOAD_QUESTIONS = [
  {
    title: `MolView is a tool`,
    children: (
      <>
        <p className="mb-4 desc">
          <Link
            href="https://molview.org/"
            target="_blank"
            className="text-primary"
          >
            MolView
          </Link>{" "}
          is a powerful web-tool to search through various scientific databases.
          Drawing chemical structure using MolView is very convenient. In fact,
          we can get the structure of any chemical and protein compounds by
          searching using its names. MolView uses PubChem, RSC Protein Data
          Bank, or Crystallography Open Database to retrieve the structures. The
          chemical structure is of high quality with 2-D and 3-D visualization.
          Importantly, a 3-D view of the chemical structure looks great compared
          to other web-tools. We can rotate the structure as we please for best
          viewing. Of course, the representation of the chemical structure could
          be changed to ball & stick, ribbon, cylinder & plate, B-factor tube,
          C-alpha trace, wireframe, line, or van der Waals spheres. For those
          who are working with protein structure, Viewing protein structure with
          MolView definitely stunning.
          <br />
          <br />
          Create Benzene structure on MolView. Alternatively,{" "}
          <Link
            href="https://sketchfab.com/models/177c608c4d074b878b10bb3be71b23f6/embed"
            target="_blank"
            className="text-primary"
          >
            use this
          </Link>
          .
        </p>
        <Image src={Structure} alt="Structure" />
      </>
    ),
  },
  {
    title: `Other notable information`,
    children: (
      <p className="mb-4 desc">
        The original structure described by Kekulé is called “Benzine” in German
        and you can see it looks different to how we describe Benzene nowadays.
        This is due to the limitations in knowledge of organic chemistry at the
        time this paper was published.
      </p>
    ),
  },
  {
    title: `Kekule's dream`,
    children: (
      <p className="mb-4 desc">
        A taster of a snake is provided for free and you can do whatever you
        want with it. The image was the original drawing done by one of the
        designers of Benzene. Kekulé later in life told his students he had a
        dream about Benzene&apos;s structure where he saw a snake eating its own
        tail. This is called an Ouroboros, an Ouroboros is an old mythological
        symbol with many interpretations. In alchemical traditions, the
        ouroboros signifies the ongoing cycle of creation and destruction
        inherent in the pursuit of knowledge and wisdom. There is a whole host
        of different Ouroboros NFT&apos;s for you to own and distribute on the
        blockchain. The aim is for an affordable price to empower education in
        chemistry and it&apos;s pursuit without hitting hard on the bank.
      </p>
    ),
  },
];
export const TRADING_QUESTIONS = [
  {
    title: `Exchanges`,
    children: (
      <p className="mb-4 desc">
        Cryptocurrency was invented to remove middlemen. Exchanges are
        middlemen. Billions of dollars have been lost to exchange hacks and
        failures. Use Uniswap for buying/selling BNZ. It is the absolute best
        option with the most liquidity. It has no signup, no counterparty risk
        and no middlemen. Thousands of tokens like ETH, USDC and USDT can be
        exchanged for BNZ there.
      </p>
    ),
  },
  {
    title: `Understanding BNZ’s price movements`,
    children: (
      <p className="mb-4 desc">
        If someone doubles the ETH in the pool, they get half the BNZ that was
        in it. This would 4x the BNZ price. If they 3x the ETH, it 9x&apos;s the
        price. If they 4x the ETH it 16x&apos;s the price. if they 10x the ETH
        it 100x&apos;s the price. This works the same in the other direction as
        well. The price moves as a square. It&apos;s awesome to know exactly the
        effect a single order will have on price. In centralized exchanges,
        hidden orders and spoofing prevent that kind of simple math.
      </p>
    ),
  },
  {
    title: `Volatile Organic Compound`,
    children: (
      <p className="mb-4 desc">
        BNZ is designed to be the first Volatile organic compound in
        cryptocurrencies. However, usually this means an organic compound with a
        high vapor pressure at room temperature. In the case for
        cryptocurrencies, volatile of course means that the price varies a lot.
      </p>
    ),
  },
];
export const BUY_FEATURES = [
  {
    img: Metamask,
    title: "Get Metamask.",
    content: (
      <>
        <p className="font-semibold text-base text-white mb-6">
          Download & install the Metamask wallet extension on a desktop browser
          like Chrome. You can store & manage your BNZ in this Ethereum wallet.
        </p>
        <Link href="http://metamask.io/" target="_blank">
          <FeatureBtn title="Get Metamask" />
        </Link>
      </>
    ),
  },
  {
    img: Eth,
    title: `Buy ETH`,
    content: (
      <p className="font-semibold text-base text-white">
        To buy your first ETH follow the instructions on metamask with the buy
        option. You need ETH to pay transaction fees on Ethereum.
      </p>
    ),
  },
  {
    img: BNZ,
    title: "Swap for BNZ",
    content: (
      <>
        <p className="font-semibold text-base text-white mb-6">
          Visit uniswap connect your metamask wallet with the green button and
          trade some of your ETH for BNZ. Leave some ETH in your wallet for gas
          fees.{" "}
        </p>
        <Link href="https://app.uniswap.org/swap" target="_blank">
          <FeatureBtn title="Sign up to UNISWAP" />
        </Link>
      </>
    ),
  },
];
export const TERMS = [
  {
    title: "1. Terms",
    desc: (
      <p className="desc !text-lg">
        By accessing this website, accessible from{" "}
        <Link
          href="https://Benzene.win"
          target="_blank"
          className="text-primary"
        >
          https://Benzene.win
        </Link>
        , you are agreeing to be bound to be bound by these Website Terms and
        Conditions of Use and agree that you are resposible for the agreement
        with any applicable local laws. If you disagree with any of these terms,
        you are prohibited from accessing this site. The material contained in
        this Website are protected under fair use and you not free to use and
        distribute your own version. Even though the videos are adapted from
        creative commons videos, our adapted versions are under fair use
        copyright.
      </p>
    ),
  },
  {
    title: "2. Use License",
    desc: (
      <div>
        <p className="desc !text-lg">
          Permission is granted to temporarily download unlimited copies of the
          material on BNZ&apos;s
          <br />
          <br />
          Website but not for commercial and repurposing uses. This is the grant
          of license, not a transfer of title, and under this license you may
          not:
          <br />
          <br />
        </p>
        <ol className="list-disc list-inside desc !text-lg">
          <li>Modify or copy the material</li>
          <li>
            Use the material for any commercial purpose or for any public
            display
          </li>
          <li>
            Attempt to reverse engineer any software contained on BNZ&apos;s
            Website
          </li>
          <li>
            Transferring the materials to another person or ‘mirror&apos; the
            materials on any other
          </li>
          <li>server</li>
        </ol>
        <br />
        <p className="desc !text-lg">
          This will let BNZ to terminate upon violations of any of these
          restrictions. Upon termination, your viewing right is terminated and
          you must destroy any downloaded material. Your possession whether it
          is printed or electronic format.
        </p>
      </div>
    ),
  },
  {
    title: "3. Disclaimer",
    desc: (
      <p className="desc !text-lg">
        All the materials on BNZ’s website are provided ‘as is’. BNZ makes no
        warranties, may it be expressed or implied, therefore negates all other
        warranties. Furthermore, BNZ Does not make any representation concerning
        the accuracy or reliability of the use of the materials on its Website
        or otherwise relating to such materials or any sites linked to this
        Website.
      </p>
    ),
  },
  {
    title: "4. Limitations",
    desc: (
      <p className="desc !text-lg">
        BNZ or its suppliers will not be hold accountable for any damaged that
        will arise with the use or inability to use the materials on BNZ’s
        website, even if BNZ or an authorise representative of this Website has
        been notified, orally or written, of the possibility of such damage.
        Some jurisdictions do not allow limitations on implied warranties or
        limitations of liability for incidental damages, these limitations may
        not apply to you.
      </p>
    ),
  },
  {
    title: "5. Revisions and Errata",
    desc: (
      <p className="desc !text-lg">
        {`The materials appearing on BNZ’s may include technical, typographical, or photographic errors. BNZ will not promise that any of the materials in this Website are accurate, complete, or current. BNZ may change the materials contained on its website at any time without notice. BNZ does not make any commitment to update the materials.
`}
      </p>
    ),
  },
  {
    title: "6. Links",
    desc: (
      <p className="desc !text-lg">
        {`BNZ has not reviewed all the sites linked to its website and is not resposible for the contents of any such linked site. The presence of any link does not imply endorsement by BNZ of the site. The use of any linked website is at the user’s own risk.
`}
      </p>
    ),
  },

  {
    title: "7. Site Terms of Use Modifications",
    desc: (
      <p className="desc !text-lg">
        {`BNZ may revise these Terms of Use for its Website at any time without prior notice. By using this website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
`}
      </p>
    ),
  },
  {
    title: "8. Your Privacy",
    desc: (
      <p className="desc !text-lg">
        Please read our{" "}
        <Link href="https://www.benzene.win/privacy" className="text-primary">
          Privacy Policy.
        </Link>
      </p>
    ),
  },
];
export const PRIVACY = [
  {
    desc: (
      <p className="desc !text-lg">
        We take your privacy seriously. This Privacy Policy describes how we
        collect, use and share your personally identifiable information
        (“Personal Information”) that we receive from you when you visit our
        website or which we otherwise receive or collect from you in the course
        of,
        <br />
        <br />
        or in connection with, your use of our site located at Benzene.win and
        all associated sites (the “Website”). Please read the following to learn
        more about our Privacy Policy.
        <br /> This Privacy Policy covers our treatment of Personal Information
        that we gather when you are accessing or using our Website and Services,
        but does not apply to the practices of companies we don’t own or
        control, or people that we don’t manage. When we mention the “Ring,”
        “we,” “us” or “our” in this Privacy Policy, we are referring to the
        Benzene ring and its subsidiaries and affiliates.
        <br />
        <br />
        By using or accessing the Website and the Services in any manner, you
        acknowledge that you accept the practices and policies outlined in this
        Privacy Policy, and you hereby consent that we will collect, use, and
        share your information in the following ways. We’re constantly trying to
        improve our Website and Services, so we may need to change this Privacy
        Policy from time to time. If we make changes, we will notify you by
        revising the date at the top of this policy and, in some cases, we may
        provide you with additional notice (such as adding a statement to our
        Website or sending you a notification). We encourage you to review this
        Privacy Policy regularly to stay informed about our information
        practices and the choices available to you.
        <br />
        <br />
        Remember that your use of our Website and Services is at all times
        subject to the Terms of service, which incorporates this Privacy Policy.
        Any terms we use in this Privacy Policy without defining them have the
        definitions given to them in the Terms of Service.
      </p>
    ),
  },
  {
    title: "What personal information does the BNZ collect?",
    desc: (
      <p className="desc !text-lg">
        Information you provide to us: We receive and store any information you
        knowingly provide to us. For example, you share information directly
        with us when you fill out a form, submit or post content through our
        Services, communicate with us via third-party platforms, participate in
        a contest or promotion, request customer support, or otherwise
        communicate with us. The types of personal information we may collect
        include your name, email address, postal address, phone number, social
        media handle, and payment information, and any other information you
        choose to provide. We may communicate with you if you’ve provided us the
        means to do so. For example, if you’ve given us your email address, we
        may email you about your use of the Services. Also, we may receive a
        confirmation when you open an email from us. This confirmation helps us
        make our communications with you more interesting and improve our
        Services. If you do not want to receive communications from us, please
        indicate your preference by unsubscribing.
        <br />
        <br />
        Information collected automatically: Whenever you interact with our
        Website, we automatically receive and record information on our server
        logs from your browser or device, which may include your IP address,
        geolocation data, device identification, “cookie” information, the type
        of browser and/or device you’re using to access the Website, and the
        page or feature you requested. “Cookies” are identifiers we transfer to
        your browser or device that allow us to recognize your browser or device
        and tell us how and when pages and
        <br />
        <br />
        features in our Services are visited and by how many people. You may be
        able to change the preferences on your browser or device to prevent or
        limit your device’s acceptance of cookies, but this may prevent you from
        taking advantage of some of our features. For more information about
        cookies and how to disable them, see the Your Choices section below. We
        may use this data to improve the Services – for example, this data can
        tell us how often users use a particular feature of the Services or
        Website, and we can use that knowledge to make the Services interesting
        to as many users as possible.
        <br />
        <br />
        Information collected from other websites and do not track policy:
        Through the cookies we place on your browser or device, we may collect
        information about your online activity after you leave the Website. Just
        like any other usage information we collect, this information allows us
        to improve the Website and the Services, and is otherwise used as
        described in this Privacy Policy. Your browser may offer you a “Do Not
        Track” option, which allows you to signal to operators of websites and
        web applications and services (including behavioral advertising
        services) that you do not wish such operators to track certain of your
        online activities over time and across different websites. Our Website
        does not support Do Not Track requests at this time, which means that we
        collect information about your online activity both while you are using
        the Website or the Services and after you leave.
      </p>
    ),
  },
  {
    title: "What does the foundation use my information?",
    desc: (
      <div>
        <p className="desc !text-lg">
          We use the Personal Information we collect to maintain, and improve
          our Services and Website. We also use the Personal Information we
          collect to:
        </p>
        <br />
        <ol className="list-disc list-inside desc !text-lg">
          <li>
            If you elect, communicate with you about products, services, and
            events offered by the Foundation and others and provide news and
            information that we think will interest you (see the Your Choices
            section below for information about how to opt out of these
            communications at any time);
          </li>
          <li>
            Process transactions and send you related information, including
            confirmations, receipts, invoices, customer experience surveys, and
            notices;
          </li>
          <li>
            Send you technical notices, security alerts, and support and
            administrative messages;
          </li>
          <li>
            Respond to your comments and questions and provide customer service;
          </li>
          <li>
            Monitor and analyze trends, usage, and activities in connection with
            our Services;
          </li>
          <li>
            Personalize the advertisements you see on third-party platforms and
            websites (for more information, see the Your Choices section below);
          </li>
          <li>
            Facilitate contests, sweepstakes, and promotions and process and
            deliver entries and rewards;
          </li>
          <li>
            Detect, investigate, and prevent security incidents and other
            malicious, deceptive, fraudulent, or illegal activity and protect
            the rights and property of the Foundation and others;
          </li>
          <li>Debug to identify and repair errors in our Services;</li>
          <li>Comply with our legal and financial obligations; and</li>
          <li>
            Carry out any other purpose described to you at the time the
            information was collected.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Will the ring share any of the personal information it receives?",
    desc: (
      <p className="desc !text-lg">
        We may share your Personal Information with third parties as described
        in this section. By using the Website and the Services, or engaging in
        any transaction or service described below, you consent to our
        disclosure of your Personal Information to such third parties.
        Information that’s been de-identified: We may de-identify your Personal
        Information so that you are not identified or identifiable as an
        individual, and provide that information to our partners. We may also
        provide aggregate usage information to our partners (or allow partners
        to collect that information from you), who may use such information to
        understand how often and in what ways people use our Services, so that
        they, too, can provide you with an optimal online experience. However,
        we never disclose aggregate usage or de-identified information to a
        partner (or allow a partner to collect such information) in a manner
        that would identify you as an individual person.
        <br />
        <br />
        Affiliated businesses: In certain situations, businesses or third party
        websites we’re affiliated with may sell or provide products or services
        to you through the Website or in connection with the Services (either
        alone or jointly with us). You can recognize when an affiliated business
        is associated with such a transaction or service, and we will share your
        Personal Information with that affiliated business only to the extent
        that it is related to such transaction or service. We have no control
        over the policies and practices of third party websites or businesses as
        to privacy or anything else, so if you choose to take part in any
        transaction or service relating to an affiliated website or business,
        please review all such business’ or websites’ policies.
        <br />
        <br />
        Agents: We employ other companies and people to perform tasks on our
        behalf and need to share your information with them to provide products
        or services to you; for example, we may use a payment processing company
        to receive and process your transactions for us. Unless we tell you
        differently, our agents do not have any right to use the Personal
        Information we share with them beyond what is necessary to assist us.
        <br />
        <br />
        Community groups: If you are a member of a Chainlink Network community
        group, members known as Community Advocates may have access to the
        content within their groups. Network administrators find it helpful to
        have access to the email addresses of organizers and other members of
        groups within their networks, to easily communicate with and administer
        the groups. Therefore, we may ask if you want to share your email
        address with your group’s Community Advocate.
        <br />
        <br />
        Business transfers: We may choose to buy or sell assets, and may share
        and/or transfer customer information in connection with the evaluation
        of and entry into such transactions. Also, if we (or our assets) are
        acquired, or if we go out of business, enter bankruptcy, or go through
        some other change of control, Personal Information could be one of the
        assets transferred to or acquired by a third party.
        <br />
        <br />
        Protection of the Foundation and others: We reserve the right to access,
        read, preserve, and disclose any information that we believe is
        necessary to comply with law, regulation or court order; enforce or
        apply our Terms and conditions and other agreements; or protect the
        rights, property, or safety of the Ring, our users, or other persons.
      </p>
    ),
  },
  {
    title: "Transfers of information to other countries",
    desc: (
      <p className="desc !text-lg">
        We have operations and service providers in other countries, including
        countries outside of the European Economic Area (EEA). Therefore, we and
        our service providers may transfer your Personal Information to, or
        store or access it in, jurisdictions that may not provide levels of data
        protection that are equivalent to those of your home jurisdiction. We
        will take steps to ensure that your Personal Information receives an
        adequate level of protection in the jurisdictions in which we process
        it.
      </p>
    ),
  },
  {
    title: "Your choices",
    desc: (
      <p className="desc !text-lg">
        Cookies. Most web browsers are set to accept cookies by default. If you
        prefer, you can usually adjust your browser settings to remove or reject
        browser cookies. Please note that removing or rejecting cookies could
        affect the availability and functionality of our Services. Advertising
        and Analytics: We allow others to provide analytics services and serve
        advertisements on our behalf across the web and in mobile apps. These
        entities may use cookies, web beacons, device identifiers, and other
        technologies to collect information about your use of our Website and
        Services and other websites and applications, including your IP address,
        web browser, mobile network information, pages viewed, time spent on
        pages, links clicked, and conversion information. This information may
        be used by the Foundation and others to, among other things, analyze and
        track data, determine the popularity of certain content, deliver
        advertising and content targeted to your interests on our Services and
        other websites, and better understand your online activity. Your device
        may also include a feature (“Limit Ad Tracking” on iOS or “Opt Out of
        Interest-Based Ads” or “Opt Out of Ads Personalization” on Android) that
        allows you to opt out of having certain information collected through
        mobile apps used for behavioral advertising purposes.
        <br />
        <br />
        We also work with third parties to serve ads to you as part of
        customized campaigns on third-party platforms (such as Telegram). As
        part of these ad campaigns, we or the third- party platforms may convert
        information about you, such as your activity information, into a unique
        value that can be matched with a user account on these platforms to
        allow us to learn about your interests and serve you advertising that is
        customized to your interests. Note that the third-party platforms may
        offer you choices about whether you see these types of customized ads.
      </p>
    ),
  },
  {
    title: "Additional disclosure for individuals in Europe",
    desc: (
      <div>
        <p className="desc !text-lg">
          If you are located in the EEA, the United Kingdom, or Switzerland, you
          have certain rights and protections under the law regarding the
          processing of your Personal Information, and this section applies to
          you.
          <br />
          <br />
          Legal Basis for Processing: When we process your Personal Information,
          we will do so in reliance on the following lawful bases:
          <br />
          <br />
        </p>
        <ol className="list-disc list-inside desc !text-lg">
          <li>
            To perform our responsibilities under our contract with you (e.g.,
            processing payments
          </li>
          <li>For and providing the Services you requested).</li>
          <li>
            When we have a legitimate interest in processing your Personal
            Information to operate our business or protect our interests (e.g.,
            to provide, maintain, and improve our products and services, conduct
            data analytics, and communicate with you).
          </li>
          <li>
            To comply with our legal obligations (e.g., to maintain a record of
            your consents and track those who have opted out of marketing
            communications).
          </li>
          <li>
            When we have your consent to do so (e.g., when you opt in to receive
            marketing communications from us). When consent is the legal basis
            for our processing of your Personal Information, you may withdraw
            such consent at any time.
          </li>
          <li>The Ring does not sell your personal information.</li>
        </ol>
      </div>
    ),
  },
];
export const DISCLAIMER = [
  {
    desc: (
      <p className="desc !text-lg">
        {`Nothing on Benzene.win is financial advice. Do your own research. Nobody knows what the BNZ price is going to do in the future. Never expect profit from the work of others.`}
        <br />
        <br />
        {`BNZ is not a security. There aren’t actually any coins, they’re just numbers in a distributed database. No one is actually given anything. People can execute the code they choose, on their own, that changes some number in the counter. The code that edits some do above values should be modifiable by valid key holders who’ve signed a cryptographic message. Other code can be run by anyone if they like.
`}
        <br />
        <br />
        {`There is no common enterprise. There should be no expectation of efforts of a promoter or third party. There is no expectation of profit from the work of others. People pay the Ethereum network to execute computations of their choosing, on their own. There is only an immutable complied bytecode sitting on the Etheruem network, it can’t be changed. They’re just numbers living on the internet. The code can do nothing on its own. People can run the code if they want to, or not. The code can do nothing on its own but sit there.
`}
        <br />
        <br />
        {`Users generate their own keys, no one else has the keys to give them. Bonuses don’t actually take anyone else’s database values, they just add or subtract more or less database values based on the system state.
`}
        <br />
        <br />
        {`If you can learn code or have the smartest coder or computer scientist you can find read over the code you plan to execute.
`}
        <br />
        <br />
        {`Blockchains, Smart contracts, and Cryptocurrencies, Are all cutting edge technologies, and as such, there is a risk, however, small, of total failure. Softwarr is hard. Computers are hard. Distributes software on computers is harder. It’s a miracle this stuff works at all. Strong cryptography seems unlikely to be broken, but if it is, everything will probably be broken.
`}
      </p>
    ),
  },
  {
    title: "The Howey test",
    desc: (
      <p className="desc !text-lg">
        The Howey test defines what U.S. federal securities laws apply to, which
        the SEC administers.
        <br />
        <br />
        You must have no expectation of any benefit whatoever from any ETH sent
        to the BNZ
        <br />
        <br />
        contract or any BNZ the origin address receives. You must have no
        expectation of profit from the efforts of others. You must have no
        reliance on the efforts of others. BNZ is just a piece of inert code at
        a contract acress on the ETH network. It can do absolutely nothing on
        its own. Every BNZ that ever exists is caused yo exist by a user
        creating it himsef per the rules of the code that he chooses to run that
        lives at on Etheruem contract address, and people might refer to as BNZ,
        mining his own ETH block or paying an ETH miner to do it for him. Only
        you can mint your own BNZ when you run the function code, as it requires
        your private key. Only you can run the function code to stake your BNZ,
        as it requires your private key. Staled BNZ are actually “burnt” or
        “destroyed”. Only you can mint your own BNZ when you run the function
        code, as it requires your private key. The users themselves perform all
        the work. This is the same wat that all BTC are caused to exist, people
        run code and ‘coins’ are created when the network’s rules are met.
        Wherever possible you agree there is no investment of money. Wherever
        possible you agree there is no common enterprise. Charitable donations
        may be sent directly to the contract by sending it ETH.
        <br />
        <br />
        If you try to cheat the referral program by overwriting the code of the
        person that referred you with your own code, the BNZ functional files
        will ignore it. This means that the least set cookie always wins except
        in the case that you try to overwrite it with a referral link to your
        own address in metamask. The BNZ functional files behaviour might change
        regarding the referral links. It could be disabled or prevent your
        metamask address from being in a cookie if it wasn’t overwriting
        another. Referral could even go away entirely or be changed. It will be
        great yo see more software built for users to help them run the software
        of their choice the way they want to run it.
        <br /> <br />
        If you try to cheat the referral program by overwriting the code of the
        person that referred you with your own code, the BNZ functional files
        will ignore it. This means that the least set cookie always wins except
        in the case that you try to overwrite it with a referral link to your
        own address in metamask. The BNZ functional files behaviour might change
        regarding the referral links. It could be disabled or prevent your
        metamask address from being in a cookie if it wasn’t overwriting
        another. Referral could even go away entirely or be changed. It will be
        great yo see more software built for users to help them run the software
        of their choice the way they want to run it.
      </p>
    ),
  },
  {
    title: "Legal Disclaimer",
    desc: (
      <div>
        <p className="font-bold text-2xl">
          1. Risks related to the use of BNZ functional files
        </p>
        <br />
        <p className="desc !text-lg">
          BNZ will not be responsible for any losses, damages or claims arising
          from events falling within the scope of the following fiver
          categories.
          <br />
          <br />– Mistakes made by the user of any cryptocurrency-related
          software or service e.g. currupted BNZ file, incorrectly constructed
          transactions, unsafe cryptographic libraries, malware affecting the
          BNZ file and / or any cryptocurrency teated software or service.
        </p>
        <ol className="list-disc list-inside desc !text-lg">
          <li>
            – Technical failures in the hardware pf the user of any
            cryptocurrency-related software or service. e.g. data loss fur to a
            faulty or damaged storage device.
          </li>
          <li>
            – Security problems experienced by the user of any cryptocurrency
            related software or service, e.g. unauthorised access to users’ BNZ
            file and / or accounts.
          </li>
          <li>
            – Actions or inactions of third parties and / or events by third
            parties, e.g. bankruptcy of service providers, information security
            attacks on service providers , information security attacks on
            service providers, and fraud conducted by third parties.
          </li>
        </ol>
        <br />
        <p className="font-bold text-2xl">2. Trading and investment risks</p>
        <br />
        <p className="desc !text-lg">
          There is considerable exposure yo risk in any crypto-currency exchange
          transaction. Any transaction involving currencies involves risks
          including, but not limited to, the potential for changing economic
          conditions that may substantially affect the price or liquidity of a
          currency. Investments in crypto-currency exchange speculation may also
          be susceptible to sharp rises and falls as the relevant market values
          fluctuatr. It is for this reason that when speculating in such markets
          it is advisable to use only risk capital.
        </p>
        <br />
        <p className="font-bold text-2xl">3. Electronic Trading Risks</p>
        <br />
        <p className="desc !text-lg">
          Before you engage in transactions using an electronic system, you
          should carefully review the tules and regulations of the exchanges
          offering the system and/ or listing the instruments you intend to
          trade. Online trading has inherent risk due to system response and
          access times that may vary due yo market conditions, system
          performance, and other factors. You should understand these and
          additional risks before trading.
        </p>
        <br />
        <p className="font-bold text-2xl">4. Compliance with tax obligations</p>
        <br />
        <p className="desc !text-lg">
          The users with any BNZ files are solely responsible to determinate
          what, if any, taxes apply to their cryptocurrency transactions. The
          owners of , or contributors to, the BNZ file are NOT responsible for
          determining the taxes that apply to crypto-currency transaction.
        </p>
        <br />
        <p className="font-bold text-2xl">5. No warranties</p>
        <br />
        <p className="desc !text-lg">
          The BNZ files is provided on an ‘as is’ basis without any warranties
          of any kind regarding the BNZ file and / ot any content, data,
          materials and / or services provided on the BNZ file.
        </p>
        <br />
        <p className="font-bold text-2xl">6. Limitations of liability</p>
        <br />
        <p className="desc !text-lg">
          Unless otherwise required by law, in no event shall the owners of, or
          contributors to, the BNZ files be liable for any damages of any kind,
          inclduing, but not limited to, loss of use, loss of profits , loss of
          data arising out of or in any way connected with the use of the BNZ
          functional files in no way are the owners of, or contributors to, the
          BNZ functional files responsible for the actions, decisions, or other
          behaviour taken by you in reliance upon the BNZ functional files.
        </p>
        <br />
        <p className="font-bold text-2xl">7. Arbitration</p>
        <br />
        <p className="desc !text-lg">
          The user of the BNZ functional files agrees to arbitrate any dispute
          arising from or in connection with the BNZ functional files or this
          disclaimer, except for disputes related to copyright, logos,
          trademarks, trade names, trade secrets or patents.
        </p>
      </div>
    ),
  },
];

export const OUROBORO_NFT = [
  {
    img: NFT1,
    label: `Ouroboros #1`,
    category: "#BB",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 1,
  },
  {
    img: NFT2,
    label: `Ouroboros #2`,
    category: "#GB",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 2,
  },
  {
    img: NFT3,
    label: `Ouroboros #3`,
    category: "#PB",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 3,
  },
  {
    img: NFT4,
    label: `Ouroboros #4`,
    category: "#RB",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 4,
  },
  {
    img: NFT5,
    label: `Ouroboros #5`,
    category: "#YB",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 5,
  },
  {
    img: NFT6,
    label: `Ouroboros #6`,
    category: "#WB",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 6,
  },
  {
    img: NFT7,
    label: `Ouroboros #7`,
    category: "#YW",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 7,
  },
  {
    img: NFT8,
    label: `Ouroboros #8`,
    category: "#RW",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 8,
  },
  {
    img: NFT9,
    label: `Ouroboros #9`,
    category: "#BW",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 9,
  },
  {
    img: NFT10,
    label: `Ouroboros #10`,
    category: "#GW",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 10,
  },
  {
    img: NFT11,
    label: `Ouroboros #11`,
    category: "#OW",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 11,
  },
  {
    img: NFT12,
    label: `Ouroboros #12`,
    category: "#PW",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 12,
  },
  {
    img: NFT13,
    label: `Ouroboros #13`,
    category: "#TIGER",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 13,
  },
  {
    img: NFT14,
    label: `Ouroboros #14`,
    category: "#GREEN",
    price: "100 BNZ",
    desc: "Creator Earnings 0%",
    id: 14,
  },
];
