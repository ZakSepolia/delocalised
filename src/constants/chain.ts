export enum ChainId {
  MAINNET = 1,
  TESTNET = 4002,
}

export interface Address {
  [ChainId.MAINNET]: string;
  [ChainId.TESTNET]: string;
}

export const DEFAULT_CHAIN_ID: ChainId = parseInt(ChainId.MAINNET.toString());
