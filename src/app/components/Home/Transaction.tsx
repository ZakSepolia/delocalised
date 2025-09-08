import Link from 'next/link';
import { TRANSACTION1, TRANSACTION2 } from '../../constant';
import SocialButton from '../SocialButton';
import TransactionSocial from '../TransactionSocial';

const Transaction = () => {
    return (
        <section className='mb-20 px-6 lg:px-0'>
            <h4 className='font-bold text-[32px] leading-10 md:text-[40px] text-center mb-6'>
                Is a transaction like a reaction?
            </h4>
            <p className='mx-auto max-w-[703px] text-center font-normal text-sm md:text-base mb-10'>
                Yes, I have linked the two words as both have &quot;a step&quot; to make a reaction
                or transaction. BNZ has a buy and burn function, therefore, when you buy it&apos;s
                like a reaction with an certain atom economy. On the other hand, when you sell, you
                own a by-product of crude oil. As a result, there is no sell and burn function.
                Furthermore, when you buy it&apos;s a reaction and when you sell it&apos;s a
                transaction.
            </p>
            <TransactionSocial />
        </section>
    );
};

export default Transaction;
