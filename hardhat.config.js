require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

let secret = require("./secret")
module.exports = {
  networks:{
    hardhat:{
      chainId:31337
    },
    rinkeby:{
      url:secret.url,
      accounts: [secret.key]
    },
    avalancheTest: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [secret.key]
    },
  },
  etherscan:{
    apiKey : "MJ97H9TQG4AMETRGCSQSHESJC6JEAZVEF4" // for fuji
    // apiKey:"QKHK4RPJK567ZXM3CNR9PT2MXS4SKGP4RA" // for ether scan
  },
  solidity: "0.8.4",
};
