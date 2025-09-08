import { useCallWithGasPrice } from "hooks/useCallWithGasPrice";
import { useBNZCSaleContract } from "hooks/useContract";
import { useCallback } from "react";
import { useTransactionAdder } from "state/transactions/hooks";
import { calculateGasMargin } from "utils/index";

const useBuy = () => {
  const { callWithGasPrice } = useCallWithGasPrice();
  const saleContract = useBNZCSaleContract();
  const addTransaction = useTransactionAdder();

  const callback = useCallback(
    async (categoryId: number) => {
      if (!saleContract) {
        return;
      }
      const estimatedGas = await saleContract.estimateGas.buy(categoryId, 1);

      const tx = await callWithGasPrice(saleContract, "buy", [categoryId, 1], {
        gasLimit: calculateGasMargin(estimatedGas),
      });
      addTransaction(tx, {
        summary: `Bought NFT successfully`,
      });
      const receipt = await tx.wait();
      return receipt;
    },
    [saleContract, addTransaction, callWithGasPrice]
  );

  return callback;
};

export default useBuy;
