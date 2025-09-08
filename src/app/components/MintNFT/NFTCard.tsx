'use client';

import { useConnectModal } from '@rainbow-me/rainbowkit';
import useBuy from 'app/mint-nft/hooks/useBuy';
import BigNumber from 'bignumber.js';
import { Button } from 'components/ui/button';
import { BNZ } from 'constants/';
import { DEFAULT_CHAIN_ID } from 'constants/chain';
import { useApproveCallback } from 'hooks/useApproveCallback';
import useToast from 'hooks/useToast';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { getBNZCSaleAddress } from 'utils/addressHelpers';
import { BIG_TEN } from 'utils/bignumber';
import { formatNumberPrice } from 'utils/numberFormat';
import SkeletonLoader from '../SkeletonLoader';
import AddTokenButton from '../AddTokenButton';
import Ethereum from 'asset/img/Ethereum.png';

interface NFTCardProps {
    sale: {
        id: number;
        name: string;
        price: BigNumber;
        category: string;
    };
    connected: boolean;
    approve: {
        loading: boolean;
        setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    };
    buy: {
        loading: boolean;
        id: number;
        setLoading: React.Dispatch<
            React.SetStateAction<{
                loading: boolean;
                id: number;
            }>
        >;
    };
}

const NFTCard = ({ sale, connected, approve, buy }: NFTCardProps) => {
    const { openConnectModal } = useConnectModal();

    const price = useMemo(
        () => new BigNumber(sale.price).dividedBy(BIG_TEN.pow(18)).toNumber(),
        [sale]
    );

    const [_, approveCallback, currentAllowance] = useApproveCallback(
        BNZ[DEFAULT_CHAIN_ID]!,
        getBNZCSaleAddress()
    );
    const isAllowed = useMemo(
        () => (currentAllowance ? currentAllowance.gte(100) : false),
        [currentAllowance]
    );

    const handleApprove = useCallback(async () => {
        approve.setLoading(true);
        try {
            await approveCallback();
        } catch (err) {
            console.error(err);
        } finally {
            approve.setLoading(false);
        }
    }, [approve, approveCallback]);

    // Buy
    const { toastError } = useToast();
    const onBuy = useBuy();
    const handleBuy = useCallback(async () => {
        buy.setLoading({ loading: true, id: sale.id });
        try {
            await onBuy(sale.id);
        } catch (err: any) {
            if (
                err.error?.data?.message ==
                'execution reverted: ERC20: transfer amount exceeds balance'
            ) {
                toastError('Error', 'Not enough balance');
            } else {
                let message =
                    err.error?.message || err?.message || err?.data?.message;
                if (err.code === 'ACTION_REJECTED') {
                    message = 'User rejected transaction';
                }
                toastError('Error', message);
            }
        } finally {
            buy.setLoading({ loading: false, id: 0 });
        }
    }, [buy, onBuy, sale.id, toastError]);

    const handleConnect = useCallback(() => {
        openConnectModal?.();
    }, [openConnectModal]);

    const renderButton = useMemo(() => {
        return (
            <>
                {connected ? (
                    isAllowed ? (
                        <Button
                            className="bg-linear grow text-white hover:scale-100 rounded-l-[100px] rounded-r-[24px]"
                            disabled={buy.loading}
                            onClick={handleBuy}
                        >
                            {buy.loading && buy.id === sale.id
                                ? 'Buying...'
                                : 'Buy Now'}
                        </Button>
                    ) : (
                        <Button
                            className="bg-linear grow text-white hover:scale-100 rounded-l-[100px] rounded-r-[24px]"
                            disabled={buy.loading}
                            onClick={handleApprove}
                        >
                            {approve.loading ? 'Approving...' : 'Approve'}
                        </Button>
                    )
                ) : (
                    <Button
                        className="bg-linear grow text-white hover:scale-100 rounded-l-[100px] rounded-r-[24px]"
                        onClick={handleConnect}
                    >
                        Connect Wallet
                    </Button>
                )}
                <AddTokenButton />
            </>
        );
    }, [
        approve.loading,
        buy.id,
        buy.loading,
        connected,
        handleApprove,
        handleBuy,
        isAllowed,
        sale.id,
        handleConnect,
    ]);

    const nftPrice = useMemo(() => {
        return (
            <>
                {!isNaN(price) ? (
                    <span>{formatNumberPrice(price)} BNZ</span>
                ) : (
                    <SkeletonLoader />
                )}
            </>
        );
    }, [price]);

    return (
        <article className="bg-[#F2F6EF] relative rounded-secondary">
            <div className="border-b flex items-centers justify-center">
                <Image
                    src={require(`asset/new-nft/${sale.id}.png`)}
                    alt=""
                    className="rounded-secondary"
                />
            </div>
            <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image src={Ethereum} alt="BNZ Ring" />
            </div>
            <div className="p-4">
                <div className="flex justify-between mb-[6px]">
                    <p className="text-2xl text-[#181818] font-normal">
                        {sale.name}
                    </p>
                    <div className="py-[6px] px-3 outline-linear before:bg-bolderLinear text-outline font-bold text-sm">
                        {sale.category}
                    </div>
                </div>
                <p className="font-bold text-[20px]">{nftPrice}</p>
                <p className="text-[#181818]/[48%] text-base mb-8">
                    Creator Earnings 0%
                </p>
                <div className="flex items-center gap-1">
                    {renderButton}
                    {/*<Button*/}
                    {/*    className='outline-linear before:rounded-l-lg rounded-l-lg hover:rounded-l-lg rounded-r-full text-[#6FAF4B] hover:scale-100 add-btn'*/}
                    {/*    onClick={handleAddToken}>*/}
                    {/*  Add BNZ*/}
                    {/*</Button>*/}
                </div>
            </div>
        </article>
        // <article className="rounded-secondary bg-primary">
        //   <div className="flex justify-center items-center p-2">
        //     {/* <Swiper
        //         autoplay={{
        //           delay: 2000,
        //           disableOnInteraction: false,
        //         }}
        //         pagination={{
        //           clickable: true,
        //         }}
        //         modules={[Autoplay, Pagination, Navigation]}
        //       >
        //         {Array.from({ length: 50 }).map((_, index) => (
        //           <SwiperSlide key={index}>
        //             <Image
        //               src={require(`asset/nft/${index}.png`)}
        //               alt=""
        //               className="rounded-secondary"
        //             />
        //           </SwiperSlide>
        //         ))}
        //       </Swiper> */}
        //     <Image
        //         src={require(`asset/new-nft/${sale.id}.png`)}
        //         alt=""
        //         className="rounded-secondary"
        //     />
        //   </div>
        //   <div className="p-6 flex justify-between items-center">
        //     <p className="font-semibold text-2xl md:text-[28px]">{sale.name}</p>
        //   </div>
        //   <div className="h-[1px] w-full bg-linear"></div>
        //   <div className="p-6 flex justify-between items-center">
        //     <p className="text-[#707070] opacity-55 text-[20px] font-medium">
        //       Price
        //     </p>
        //     <p className="font-semibold text-[20px]">{nftPrice}</p>
        //   </div>
        //   <div className="dashed"></div>
        //   <div className="py-5 flex justify-center items-center gap-2">
        //     {renderButton}
        //   </div>
        // </article>
    );
};

export default NFTCard;
