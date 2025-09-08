import { Contract } from "@ethersproject/contracts";
import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "@ethersproject/bignumber";
import { BASE_SCAN_URLS } from "../constants";
import { ChainId } from "constants/chain";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
	try {
		return getAddress(value);
	} catch {
		return false;
	}
}

export function getScanLink(
	chainId: ChainId = ChainId.MAINNET,
	data: string,
	type: "transaction" | "token" | "address" | "block",
): string {
	const prefix = `${BASE_SCAN_URLS[chainId]}`;

	switch (type) {
		case "transaction": {
			return `${prefix}/tx/${data}`;
		}
		case "token": {
			return `${prefix}/token/${data}`;
		}
		case "block": {
			return `${prefix}/block/${data}`;
		}
		case "address":
		default: {
			return `${prefix}/address/${data}`;
		}
	}
}

export function calculateGasMargin(value: BigNumber): BigNumber {
	return value.mul(BigNumber.from(150)).div(BigNumber.from(100));
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
	return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(
	library: Web3Provider,
	account?: string,
): Web3Provider | JsonRpcSigner {
	return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(
	address: string,
	ABI: any,
	library: Web3Provider,
	account?: string,
): Contract {
	if (!isAddress(address) || address === AddressZero) {
		throw Error(`Invalid 'address' parameter '${address}'.`);
	}

	return new Contract(address, ABI, getProviderOrSigner(library, account) as any);
}

export function escapeRegExp(string: string): string {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

export const getQueryString = (query: { [key: string]: string | string[] } = {}) => {
	return Object.entries(query)
		.reduce((acc, [key, values]) => {
			if (!values) {
				return acc;
			}
			if (Array.isArray(values)) {
				values.forEach((value) => acc.append(key, value));
			} else {
				acc.append(key, values);
			}
			return acc;
		}, new URLSearchParams())
		.toString();
};

export const getTokenId = (tokenName: string) => {
	return tokenName.replace("+", "").replace(".", "");
};

export const getTokenName = (tokenId: string) => {
	const tokenIdString = String(tokenId);
	return `+${tokenIdString.slice(0, 2)}.${tokenIdString.slice(2)}`;
};

export default function addressEllipsis(address: string, chars = 4): string {
	const parsed = isAddress(address);
	if (!parsed) {
		throw Error(`Invalid 'address' parameter '${address}'.`);
	}
	return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}