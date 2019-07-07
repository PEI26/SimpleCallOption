const ethers = require('ethers');
const express = require('express')
const bodyParser=require('body-parser')
const db = require('./db')
const server = express()
const url = require('url')
require('dotenv').config()
let provider = ethers.getDefaultProvider('ropsten');
server.use(bodyParser.json())
let dbInstance = new db()
let ABI= require('./abi.json')

let privatekey = process.env.privatekey;
let readandwrite = new ethers.Wallet(privatekey, provider)


let contractAddress = "0x8599df3d16864152dbaa733f9719cc0c8f630f10"
//readonly
let contract = new ethers.Contract( contractAddress, ABI, readandwrite).connect(provider);
// readandwrite
let newcontract =contract.connect(readandwrite);

// Call function 
async function getCurrentMarketPrice(){
    let value = await contract.getCurrentMarketPrice();
    return value
}


async function setCurrentMarketPrice(amount){
    let tx = await newcontract.setCurrentMarketPrice(amount)
    return tx.hash
}



//get client endpoint
  server.get('/getCurrentMarketPrice', async(request,response)=>{
     let parts = url.parse(request.url,true)
     
    let value = await dbInstance.getMarketPrice(parts.query.itemId)

   setCurrentMarketPrice(value.spot_price);
    response.send(value)
 })

  server.post('/setCurrentMarketPrice', async(request,response)=>{
      console.log(request)
      
        let value = await dbInstance.setSpotPrice(request.body)
        response.send("Success");  
     
  })
server.get('/test', (req, res) => {
    res.send('test endpoint. server running!')
})

server.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

   
   
   // server
server.set('port',3001)


server.listen(3001, ()=>console.log(`server started`))
