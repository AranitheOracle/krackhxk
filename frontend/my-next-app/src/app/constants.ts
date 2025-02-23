import type { Network } from "@aptos-labs/wallet-adapter-react";

export const NETWORK: Network = (process.env.NEXT_PUBLIC_APP_NETWORK as Network) ?? "devnet";
export const MODULE_ADDRESS = "0x332a56b4021a107101dd378f63cc1c844843b29cec1859dfb9c0cff16e5d3901";