"use client";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import type { PropsWithChildren } from "react";
import { NETWORK } from "./constants";

export function WalletProvider({ children }: PropsWithChildren) {
  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{ network: NETWORK }}
      optInWallets={["Continue with Google", "Petra", "Nightly", "Pontem Wallet", "Mizu Wallet"]}
      onError={(error) => {
        console.log(error || "Unknown wallet error");
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}
