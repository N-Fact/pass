const { MerkleTree } = require('merkletreejs')
const keccak256 = require("keccak256");
const ethers = require("ethers");


var Silverquantitys ={
    "0x839b9679D8619D34d4B1E250Ac281b356740e164":2,
    "0x4f18Ff8A4982207E3703Fd7947Fada315f43A793":3
}
var Goldenquantitys ={
    "0xAa5ccD7e94a6D5717A5C4AA34496E9e02484c9f0":4,
    "0xD12Ab18087Fa3472cdb07045b0D13e2bae391bC6":5,
    "0xC43b5de6f53D04b8A8Ebe722Ab8A6F9D3C9c66b2":3,
    "0xe229dA7e40c10F6838e738Fc5660c73caB0884aA":4,
    "0xbdFeCb4ce734C0A11DAB22a2289b307FD7d18482":5
}


export const getProof =function getProof  (whitelistAddress,_address,isGold,isSilver)  {

    var quantity
    var leafNodes
    var encodePacked
    
    if(isGold && !isSilver){
         leafNodes = whitelistAddress.map(addr => keccak256(ethers.utils.solidityPack([ 'uint256','address'], [Goldenquantitys[addr],addr])));

    }else if(!isGold && isSilver){
         leafNodes = whitelistAddress.map(addr => keccak256(ethers.utils.solidityPack([ 'uint256','address'], [Silverquantitys[addr],addr])));

    }
    const merkleTree = new MerkleTree(leafNodes,keccak256,{sortPairs: true});
    const rootHash = merkleTree.getRoot(); 
    console.log(merkleTree.toString())
    
    try {
        if(Goldenquantitys[_address]){
            quantity = Goldenquantitys[_address]
            encodePacked = ethers.utils.solidityPack([ 'uint256','address'], [Goldenquantitys[_address],_address]);
        }else if(Silverquantitys[_address]){
            quantity = Silverquantitys[_address]
            encodePacked = ethers.utils.solidityPack([ 'uint256','address'], [Silverquantitys[_address],_address]);
        }
        let claimingAddress = keccak256(encodePacked);
    
        const hexProof = merkleTree.getHexProof(claimingAddress);
        const address_verify = merkleTree.verify(hexProof,claimingAddress,rootHash)
        return {
            proof:hexProof,
            verify:address_verify,
            allowance:quantity
        }
    } catch (error) {
        return {
            proof:[],
            verify:false,
            allowance:0
        }
    }
 

   
}


