import { Address, ChainId, DEFAULT_CHAIN_ID } from "constants/chain";
import contracts from "constants/contracts";

export const getAddress = (
  address: Address,
  chainId = DEFAULT_CHAIN_ID
): string => {
  return address[chainId as ChainId];
};

export const getMulticallAddress = () => {
  return getAddress(contracts.multiCall);
};

export const getBNZCAddress = () => {
  return getAddress(contracts.BNZC);
};

export const getBNZCSaleAddress = () => {
  return getAddress(contracts.BNZCSale);
};
