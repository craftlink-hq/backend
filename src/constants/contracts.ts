import { ethers } from "ethers";
import { gigMarketplaceABI } from "./abi/gigMarketplaceABI.js";

const GIG_MARKET_PLACE_ADDRESS = "0x59eBa0bb6188a50Bda6322837C42EaD83912ADEd";
export const getGigContract = (providerOrSigner: ethers.Provider | ethers.Signer) =>
  new ethers.Contract(
    GIG_MARKET_PLACE_ADDRESS,
    gigMarketplaceABI,
    providerOrSigner
  );