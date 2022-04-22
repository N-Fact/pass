const hre = require("hardhat");

async function main() {

  const NFT = await hre.ethers.getContractFactory("mintPass");
  const nft = await NFT.deploy("Mint Pass","MNTP","Golden","silver","0xb757a3c1883db7957475d6692d2717d6abf993af28187c26a56b7ed904e5f8af","0xd4a210b177c1ff4f7bd9450348723294a17343d8c86ee5ed95c19656cdfc1857");
  await nft.deployed();
  console.log("nft deployed to:", nft.address);
}
main()