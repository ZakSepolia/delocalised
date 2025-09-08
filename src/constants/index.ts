import { ChainId, DEFAULT_CHAIN_ID } from "./chain";

export interface Token {
	name: string;
	symbol: string;
	address: string;
	decimals: number;
}

export type TokenMap = { [chainId: number]: Token | null };

export const getToken = (
	tokenMap: TokenMap,
	chainId: ChainId = DEFAULT_CHAIN_ID,
): Token => {
	// @ts-ignore
	return tokenMap[chainId];
};

export const BNZ: TokenMap = {
	[ChainId.MAINNET]: {
		name: "BNZ",
		symbol: "BNZ",
		address: "0xeB1712dE9CfB6516120D6017e4197FFC0E69cbAc",
		decimals: 18,
	},
	[ChainId.TESTNET]: {
		name: "BNZ",
		symbol: "BNZ",
		address: "0x388D3f5c813BE744eaBd5eD5c97b4DfD7188aBC5",
		decimals: 18,
	},
};

export const getBNZ = (chainId: ChainId = DEFAULT_CHAIN_ID): Token => {
	return getToken(BNZ, chainId);
};

export const BASE_SCAN_URLS = {
	[ChainId.MAINNET]: "https://etherscan.io",
	[ChainId.TESTNET]: "https://testnet.ftmscan.com",
};