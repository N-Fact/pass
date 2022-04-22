import { ethers } from 'ethers'
import NFT from '../../artifacts/contracts/mintPass.sol/mintPass.json'

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
// const contractAddress = "0x5D7B20ee69b15b43671BeC0eFc74Cb02C9Ae1f62" // rinkeby
const contractAddress = "0x1c79A1F0324ADafB71D7d9b46B0599a9e2105539" // fuji



export const getWalletAddress = async () => {
    var signerAdress
    try {
        const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()


    signerAdress = await signer.getAddress();
    } catch (error) {
        signerAdress = ""
    }
    
    return signerAdress;
}

export const getTotalSupply = async () => {
  try {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    // var signerAdress = await signer.getAddress();
    const nftContract = new ethers.Contract(contractAddress, NFT.abi, signer)
    const result = await nftContract.totalSupply();
    return result;

  } catch (error) {
    return 0;
  }
  
};

export const getSaleState = async () => {
  try {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    
    // var signerAdress = await signer.getAddress();
    const nftContract = new ethers.Contract(contractAddress, NFT.abi, signer)
    const result = await nftContract.IS_SALE_ACTIVE();
    return result;
  } catch (error) {
    return false;
  }
  
  
};

export const getMaxSupply = async () => {
  try {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    // var signerAdress = await signer.getAddress();
    const nftContract = new ethers.Contract(contractAddress, NFT.abi, signer)
    const result = await nftContract.MAX_SUPPLY();
    return result;

  } catch (error) {
    return 0
  }
    
}

export const startSale = async () => {
    const connection = window.ethereum;
const provider = new ethers.providers.Web3Provider(connection)
const signer = provider.getSigner()

// var signerAdress = await signer.getAddress();
const nftContract = new ethers.Contract(contractAddress, NFT.abi, signer)
  const result = await nftContract.toggleSale();
  return result
}

export const getOwner = async () => {
    const connection = window.ethereum;
const provider = new ethers.providers.Web3Provider(connection)
const signer = provider.getSigner()

// var signerAdress = await signer.getAddress();
const nftContract = new ethers.Contract(contractAddress, NFT.abi, signer)
  const result = await nftContract.owner();
  return result
}

export const approveContract = async (operator, approved) => {
  const result = await nftContract.setApprovalForAll(operator, approved);
  return result
}

export const isApproved = async (owner, operator) => {
  const result = await nftContract.isApprovedForAll(owner, operator);
  return result
}

export const getOwnerBalance = async () => {
    const connection = window.ethereum;
const provider = new ethers.providers.Web3Provider(connection)
const signer = provider.getSigner()

// var signerAdress = await signer.getAddress();
const nftContract = new ethers.Contract(contractAddress, NFT.abi, signer)
  try {
    const result = await nftContract.balanceOf(window.ethereum.selectedAddress);
    return result;
  } catch (error) {
    return 0;
  }
  
}

export const mintNFT = async (allowance, quantity, proof) => {
    const connection = window.ethereum;
const provider = new ethers.providers.Web3Provider(connection)
const signer = provider.getSigner()

// var signerAdress = await signer.getAddress();
const nftContract = new ethers.Contract(contractAddress, NFT.abi, signer)
  // console.log("allowance",allowance)
  // console.log("quantity",quantity)
  // console.log("proof",proof)
  if (!window.ethereum.selectedAddress) {
    return {
      success: false
    };
  }
  const transaction = await nftContract.privateSale(allowance,quantity,proof)
  await transaction.wait().then(function(receipt) {
    document.getElementById("mintLink").innerHTML = "Successfully minted click and see!"
    document.getElementById("mintLink").href = "https://testnet.snowtrace.io/tx/"+receipt.transactionHash

    console.log(receipt)
});
};