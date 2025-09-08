"use client";

import {
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChainId, DEFAULT_CHAIN_ID } from "constants/chain";
import { ToastListener, ToastsProvider } from "contexts/ToastsContext";
import { Provider } from "react-redux";
import store from "state";
import ApplicationUpdater from "state/application/updater";
import MulticallUpdater from "state/multicall/updater";
import TransactionUpdater from "state/transactions/updater";
import { WagmiProvider } from "wagmi";
import { Chain, fantomTestnet, mainnet } from "wagmi/chains";

export const chains: { [key in ChainId]: Chain } = {
  [ChainId.MAINNET]: mainnet,
  [ChainId.TESTNET]: fantomTestnet,
};

export const config = getDefaultConfig({
  appName: "BENZENE",
  projectId: "48de86f405dd9484980881efe3514e92",
  chains: [chains[DEFAULT_CHAIN_ID]],
  ssr: true,
});

const queryClient = new QueryClient();

function Updaters() {
  return (
    <>
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  );
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={lightTheme({
            overlayBlur: "none",
          })}
          modalSize="compact"
          initialChain={chains[DEFAULT_CHAIN_ID]}
        >
          <Provider store={store}>
            <ToastsProvider>
              <>
                <ToastListener />
                <Updaters />
                {children}
              </>
            </ToastsProvider>
          </Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
