import { useCallback, useState } from "react";
import { useSigner } from "./useSigner";

const useSignature = () => {
	const signer = useSigner();
	const [loading, setLoading] = useState<boolean>(false);

	const callback = useCallback(
		async (nonce: string) => {
			if (!signer) return;

			try {
				setLoading(true);
				const signature = await signer.signMessage(nonce);
				return signature;
			} catch (error) {
				setLoading(false);
				throw error;
			}
		},
		[signer],
	);

	return [callback, loading] as const;
};

export default useSignature;
