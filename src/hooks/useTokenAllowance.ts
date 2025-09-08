import { useMemo } from "react";
import { Token } from "constants/";
import { useTokenContract } from "./useContract";
import { useSingleCallResult } from "state/multicall/hooks";
import { BigNumber } from "ethers";

function useTokenAllowance(
  token?: Token,
  owner?: string,
  spender?: string
): BigNumber | undefined {
  const contract = useTokenContract(token?.address, false);

  const inputs = useMemo(() => [owner, spender], [owner, spender]);
  const allowance = useSingleCallResult(contract, "allowance", inputs).result;

  return useMemo(
    () =>
      token && allowance ? BigNumber.from(allowance.toString()) : undefined,
    [token, allowance]
  );
}

export default useTokenAllowance;
