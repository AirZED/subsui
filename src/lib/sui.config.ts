import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";

export const client = new SuiClient({
  url: getFullnodeUrl("testnet"),
});

export const SMART_CONTRACT_ADDRESS =
  "0x570d715ea3e9e8aef5433cc46e1519fe376854ab419340025de7a5ca82bfb01e";


