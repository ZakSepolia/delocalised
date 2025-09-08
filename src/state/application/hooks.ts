import { useSelector } from "react-redux";
import { useChainId } from "wagmi";
import { AppState } from "../index";

export function useBlockNumber(): number | undefined {
	const chainId = useChainId();

	return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1]);
}