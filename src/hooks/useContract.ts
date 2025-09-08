import { Web3Provider } from "@ethersproject/providers";
import BNZC_ABI from "constants/abis/BNZC.json";
import BNZCSale_ABI from "constants/abis/BNZCSale.json";
import MULTICALL_ABI from "constants/abis/Multicall.json";
import ERC20_ABI from "constants/abis/erc20.json";
import { Contract } from "ethers";
import { useMemo } from "react";
import { getContract } from "utils";
import {
  getBNZCAddress,
  getBNZCSaleAddress,
  getMulticallAddress,
} from "utils/addressHelpers";
import { provider } from "utils/providers";
import { useAccount, useChainId } from "wagmi";
import { useSigner } from "./useSigner";

function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null {
  const chainId = useChainId();
  const signer = useSigner();

  return useMemo(() => {
    if (!address || !ABI || !provider || !chainId) return null;
    try {
      return new Contract(address, ABI, signer || provider);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, chainId, ABI, signer, withSignerIfPossible]);
}

function useContractRpcProvider(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null {
  const { address: account } = useAccount();
  const library = provider;

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        // @ts-ignore
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export const getTokenContract = (address: string, signer: Web3Provider) => {
  return getContract(address, ERC20_ABI, signer);
};

export function useTokenContract(
  tokenAddress?: string,
  withSignerIfPossible?: boolean
): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}

export function useMulticallContract(): Contract | null {
  return useContractRpcProvider(getMulticallAddress(), MULTICALL_ABI, false);
}

export const useBNZCContract = (): Contract | null => {
  return useContract(getBNZCAddress(), BNZC_ABI);
};

export const useBNZCSaleContract = (): Contract | null => {
  return useContract(getBNZCSaleAddress(), BNZCSale_ABI);
};

export const useBNZCSaleContractRpcProvider = (): Contract | null => {
  return useContractRpcProvider(getBNZCSaleAddress(), BNZCSale_ABI);
};
