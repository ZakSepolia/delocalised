import { ChainId, DEFAULT_CHAIN_ID } from "constants/chain";
import NETWORK_URLS from "constants/networks";
import { ethers } from "ethers";

export const getProvider = () =>
	new ethers.providers.JsonRpcProvider(NETWORK_URLS[DEFAULT_CHAIN_ID as ChainId]);

export const provider = getProvider();
