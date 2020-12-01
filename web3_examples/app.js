const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/9a1d2a928d7f40e9ad9683c52b5b2c43'
const web3 = new Web3(rpcURL)//the variable web3 is the connection that will create a new instance of Web3, inserting the URL.
console.log("connected")
web3.eth.getBlockNumber().then(console.log)//request eth network to get latest block number then log it.