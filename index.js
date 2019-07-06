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
// getCurrentMarketPrice()

async function setCurrentMarketPrice(amount){
    let tx = await newcontract.setCurrentMarketPrice(amount)
    return tx.hash
}
// setCurrentMarketPricee();

//event listener
// newcontract.on("newOption",(addr,  assets,strikePrice,marketPrice,timeToMaturity,riskFreeRate,exercised)=>{
// console.log("address: ",addr, "assets: ",assets, "strikePrice:",strikePrice,"marketPrice:",marketPrice,"timeToMaturity:",timeToMaturity,"riskFreeRate",riskFreeRate,"exercised",exercised)
// });

//get client endpoint
  server.get('/getCurrentMarketPrice', async(request,response)=>{
     let parts = url.parse(request.url,true)
     
    let value = await dbInstance.getMarketPrice(parts.query.itemId)

   setCurrentMarketPrice(value.spot_price);
    response.send(value)
 })

  server.post('/setCurrentMarketPrice', async(request,response)=>{
      console.log(request)
      try{
        let value = await dbInstance.setSpotPrice(request.body)
        response.send("Success");  
      }catch{
        response.send("failed");  
      }
     
   })
   
   
   // server
server.set('port',3000)


server.listen(3000, ()=>console.log(`server started`))