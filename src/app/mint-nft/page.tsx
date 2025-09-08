'use client';

import PageTitle from 'app/components/PageTitle';
import BigNumber from 'bignumber.js';
import { useMemo, useState } from 'react';
import { BIG_TEN } from 'utils/bignumber';
import { useAccount } from 'wagmi';
import NFTCard from '../components/MintNFT/NFTCard';
import { OUROBORO_NFT } from '../constant';

const MintNFT = () => {
    const { address: account } = useAccount();
    const [loadingApprove, setLoadingApprove] = useState<boolean>(false);
    const [loadingBuy, setLoadingBuy] = useState<{
        loading: boolean;
        id: number;
    }>({
        loading: false,
        id: 0,
    });

    const renderContent = useMemo(() => {
        return (
            <>
                {OUROBORO_NFT.map((item) => (
                    <NFTCard
                        key={item.id}
                        sale={{
                            id: item.id,
                            name: item.label,
                            price: BigNumber(100).multipliedBy(BIG_TEN.pow(18)),
                            category: item.category,
                        }}
                        connected={!!account}
                        approve={{
                            loading: loadingApprove,
                            setLoading: setLoadingApprove,
                        }}
                        buy={{
                            loading: loadingBuy.loading,
                            id: loadingBuy.id,
                            setLoading: setLoadingBuy,
                        }}
                    />
                ))}
            </>
        );
    }, [account, loadingApprove, loadingBuy]);

    return (
        <>
            <PageTitle title={`Ouroboros NFT's`} />
            <section className="section">
                {/*<div className='flex flex-col sm:flex-row justify-between'>*/}
                {/*    <h3 className='font-bold text-2xl md:text-[40px] leading-[48.1px]'>Live NFT</h3>*/}
                {/*    <div className='flex items-center gap-2'>*/}
                {/*        <ConnectButton accountStatus='address' />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='my-6 xl:my-12 w-full h-[2px] bg-linear'></div>*/}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 grid-cols-1">
                    {renderContent}
                </div>
            </section>
        </>
    );
};

export default MintNFT;
