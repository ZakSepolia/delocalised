import { ChainId } from './chain';

const contracts = {
    multiCall: {
        [ChainId.MAINNET]: '0x9695FA23b27022c7DD752B7d64bB5900677ECC21',
        [ChainId.TESTNET]: '0x19E78826cd602c8EF8E9EA323e3C1Efdf31a6AFe',
    },
    BNZC: {
        [ChainId.MAINNET]: '0xA2B53D39Dd7c98b8C9faAabaEA00888f96198a01',
        [ChainId.TESTNET]: '0xC53200490deDAF5c409b7B660d98CF96EaB1D513',
    },
    BNZCSale: {
        [ChainId.MAINNET]: '0x6bbDF1ecaAf560b94edA30aD49e646A96fe1c9b6',
        [ChainId.TESTNET]: '0x9f0807004f1910eE43b2865b4db589ecEad5a178',
    },
};

export default contracts;
