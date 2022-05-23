require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/zIOGFa93zvvyjylszNLkYbHHcP9Vfr2V",
      accounts: [
        "58095a6943a67638f0693020ba0694fba8d8ea0f48419d7f297ec9899f665d60",
      ],
    },
  },
};
