// https://eth-ropsten.alchemyapi.io/v2/YU2bGYFC5KvGV0IwZYplr0pErU1uZkmD

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/YU2bGYFC5KvGV0IwZYplr0pErU1uZkmD',
      accounts: [ '5ad54fbbfb60cf6eb5dfa64e4296249d711e6255ff01bdff6a11f2f3396dc855' ]
    }
  }
}
