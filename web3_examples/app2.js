const Web3 = require('web3')
const rpcURL = 'http://127.0.0.1:7545'//Ganache network, local blockchain
const web3 = new Web3(rpcURL)//the variable web3 is the connection that will create a new instance of Web3, inserting the URL.

const account1 = "0x7ECfb3035257e76c65bb00E3BC62707A70AA21e3"
const account2 = "0x6e92E0546B5fE47408236d838D720cF6AF30ffa3"

web3.eth.sendTransaction({//sending a transaction from one to another 
    from: account1, 
    to: account2, 
    value: web3.utils.toWei('1', 'ether')//changing value from wei to ether
},
(err, result) => { console.log(result)//logging result into console
})
