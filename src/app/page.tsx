import dynamic from 'next/dynamic';
import BnzStrangeMobile from './components/Home/BnzStrangeMobile';
const Reason = dynamic(() => import('./components/Home/Reason'));
const BannerSection = dynamic(() => import('./components/Home/Banner'));
const Chemical = dynamic(() => import('./components/Chemical'));
const Transaction = dynamic(() => import('./components/Home/Transaction'));
const Questions = dynamic(() => import('./components/Home/Questions'));
const PeerToPeerAromatic = dynamic(
  () => import('./components/Home/PeerToPeerAromatic')
);
const BnzStrange = dynamic(() => import('./components/Home/BnzStrange'));

export default function Home() {
  return (
    <>
      <BannerSection />
      <Chemical />
      <Reason />
      {/* <Questions /> */}
      {/* <PeerToPeerAromatic /> */}
      <BnzStrange />
      <BnzStrangeMobile />
      {/* <Transaction /> */}
    </>
  );
}
