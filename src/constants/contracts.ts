import { ethers } from "ethers";
import { gigMarketplaceABI } from "./abi/gigMarketplaceABI.js";

const GIG_MARKET_PLACE_ADDRESS = "0xb9193980057233220b6284Af1E1e1F232fAc3065";
export const getGigContract = (providerOrSigner: ethers.Provider | ethers.Signer) =>
  new ethers.Contract(
    GIG_MARKET_PLACE_ADDRESS,
    gigMarketplaceABI,
    providerOrSigner
  );