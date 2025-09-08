import { ChainId } from "./chain";

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "https://eth.llamarpc.com",
  [ChainId.TESTNET]: "https://rpc.testnet.fantom.network",
};

export default NETWORK_URLS;
