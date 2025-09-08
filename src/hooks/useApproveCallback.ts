import { MaxUint256 } from "@ethersproject/constants";
import { TransactionResponse } from "@ethersproject/providers";
import { Token } from "constants/";
import { BigNumber } from "ethers";
import { useCallback, useMemo } from "react";
import {
  useHasPendingApproval,
  useTransactionAdder,
} from "state/transactions/hooks";
import { calculateGasMargin } from "utils";
import { useAccount } from "wagmi";
import { useCallWithGasPrice } from "./useCallWithGasPrice";
import { useTokenContract } from "./useContract";
import useTokenAllowance from "./useTokenAllowance";

export enum ApprovalState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

export function useApproveCallback(
  token?: Token,
  spender?: string | undefined,
  amountToApprove: BigNumber = MaxUint256
): [ApprovalState, () => Promise<void>, BigNumber | undefined] {
  const { address: account } = useAccount();
  const { callWithGasPrice } = useCallWithGasPrice();
  const currentAllowance = useTokenAllowance(
    token,
    account ?? undefined,
    spender
  );
  const pendingApproval = useHasPendingApproval(token?.address, spender);

  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    if (!token || !spender) return ApprovalState.UNKNOWN;
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.UNKNOWN;

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lt(amountToApprove)
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED;
  }, [amountToApprove, currentAllowance, pendingApproval, spender, token]);

  const tokenContract = useTokenContract(token?.address);
  const addTransaction = useTransactionAdder();

  const approve = useCallback(async (): Promise<void> => {
    if (approvalState !== ApprovalState.NOT_APPROVED) {
      console.error("approve was called unnecessarily");
      return;
    }
    if (!token) {
      console.error("no token");
      return;
    }

    if (!tokenContract) {
      console.error("tokenContract is null");
      return;
    }

    if (!amountToApprove) {
      console.error("missing amount to approve");
      return;
    }

    if (!spender) {
      console.error("no spender");
      return;
    }

    const estimatedGas = await tokenContract.estimateGas.approve(
      spender,
      MaxUint256
    );

    return callWithGasPrice(tokenContract, "approve", [spender, MaxUint256], {
      gasLimit: calculateGasMargin(estimatedGas),
    })
      .then((response: TransactionResponse) => {
        addTransaction(response, {
          summary: `Approve ${token.symbol}`,
          approval: { tokenAddress: token.address, spender },
        });
      })
      .catch((error: Error) => {
        console.error("Failed to approve token", error);
        throw error;
      });
  }, [
    approvalState,
    token,
    tokenContract,
    amountToApprove,
    spender,
    addTransaction,
    callWithGasPrice,
  ]);

  return [approvalState, approve, currentAllowance];
}
