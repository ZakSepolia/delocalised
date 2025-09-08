import { ChainId, DEFAULT_CHAIN_ID } from "constants/chain";
import { providers } from "ethers";
import { useMemo } from "react";
import { Account, Chain, Client, Transport } from "viem";
import { Config, useConnectorClient } from "wagmi";

export function clientToSigner(client: Client<Transport, Chain, Account>) {
	const { account, chain, transport } = client;
	const network = {
		chainId: chain.id,
		name: chain.name,
		ensAddress: chain.contracts?.ensRegistry?.address,
	};
	const provider = new providers.Web3Provider(transport, network);
	const signer = provider.getSigner(account.address);
	return signer;
}

export function useSigner(chainId: ChainId = DEFAULT_CHAIN_ID) {
	const { data: client } = useConnectorClient<Config>({ chainId });
	return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}
