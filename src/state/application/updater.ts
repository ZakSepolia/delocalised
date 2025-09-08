import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { provider } from "utils/providers";
import { useChainId } from "wagmi";
import useDebounce from "../../hooks/useDebounce";
import { updateBlockNumber } from "./reducer";

export default function Updater(): null {
  const chainId = useChainId();
  const dispatch = useDispatch();

  const [state, setState] = useState<{
    chainId: number | undefined;
    blockNumber: number | null;
  }>({
    chainId,
    blockNumber: null,
  });

  const blockNumberCallback = useCallback(
    (blockNumber: number) => {
      setState((state) => {
        if (chainId === state.chainId) {
          if (typeof state.blockNumber !== "number")
            return { chainId, blockNumber };
          return {
            chainId,
            blockNumber: Math.max(blockNumber, state.blockNumber),
          };
        }
        return state;
      });
    },
    [chainId, setState]
  );

  // attach/detach listeners
  useEffect(() => {
    if (!provider || !chainId) return undefined;

    setState({ chainId, blockNumber: null });

    provider
      .getBlockNumber()
      .then(blockNumberCallback)
      .catch((error: any) =>
        console.error(
          `Failed to get block number for chainId: ${chainId}`,
          error
        )
      );

    provider.on("block", blockNumberCallback);
    return () => {
      provider.removeListener("block", blockNumberCallback);
    };
  }, [dispatch, chainId, blockNumberCallback]);

  const debouncedState = useDebounce(state, 100);

  useEffect(() => {
    if (!debouncedState.chainId || !debouncedState.blockNumber) return;
    dispatch(
      updateBlockNumber({
        chainId: debouncedState.chainId,
        blockNumber: debouncedState.blockNumber,
      })
    );
  }, [dispatch, debouncedState.blockNumber, debouncedState.chainId]);

  return null;
}
