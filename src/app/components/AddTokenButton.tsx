"use client";

import { Button } from "components/ui/button";
import { getBNZ } from "constants/";
import { useAccount } from "wagmi";

const AddTokenButton = () => {
  const account = useAccount();

  const handleAddToken = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: getBNZ().address,
            symbol: "BNZ",
            decimals: 18,
            image:
              "https://photos.pinksale.finance/file/pinksale-logo-upload/1727112548834-fd61c15626b526fd67243159e7f45186.png",
          },
        },
      });
    } catch (error) {}
  };

  if (!account) {
    return <></>;
  }

  return (
    <Button
      className="outline-linear border-0 rounded-r-[100px] before:rounded-r-[100px] rounded-l-[24px] before:rounded-l-[24px] text-[#6FAF4B] hover:scale-100 hover:text-white hover:bg-linear"
      variant="outline"
      onClick={handleAddToken}
    >
      Add BNZ
    </Button>
  );
};

export default AddTokenButton;
