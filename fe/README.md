# Xoption - a simple call option contract 

This application provides an interface for users to interact with our simple call option smart contract. 

## Getting Started

1. Users are required to have metamask logged in while using the app, you can click to our metamask button to connect/install metamask wallet. Once all set up, you can click into our form page to explore the full functionality of our app.

2. On our form page, the first section on the top is a market price watcher that you can choose the available asset name/category to check the current market price before you enter into the option contract. The prices of the assets were collected and stored in our database and can be called directly from our backend. 

3. The form below the market price section are the info needed to enter the option contract(it's not necessary at the moment since we are still at development stage). After you input all the data, click submit, then the value would be stored on our local storage, they wouldnt be submitted to blockchain immediately YET, as soon in the near future we might implement a review page using those data to let you review before finalizing the submisson (people make mistakes, and it would be costly to do that on blockchain).

4. After you check and submit all the info for your option contract, you can click on "Create your contract here" to transaction generating section. Once you click on "generate contract", you would expect your metamask wallet pop up, after you confirm the transaction, the transaction would be generated and be pushed to blockchain(for testing purpose, ropsten network); then the transaction hash would show up on the screen. 

5. If you couldnt find the asset that interests you, you can click on the button to add the asset and its price to our database. And our team would make it available on our app as soon as possible. 


### Backend 

Get Call: Get current market price/ spot price
Post Call: Set/add asset and its price
Hosting to Digital Ocean http://68.183.204.206:3001

### Database

Firebase is used for store our assets and their spot prices. Since smart contract can only interact with outside world through oracles, so we think it would be more feasible to store those data onto our database for easier use. 

### Smart Contract

we have 3 functions for our smart contract, set spot price, get spot price, and add option contract to blockchain 

Link to our deployed smart contract on etherscan: https://ropsten.etherscan.io/address/0x4fc3ba4585c6b3d85742b6e56b6250a4862a98d5

Testnet we used: ropsten 

### Contributors: 

Zilan Ouyang: front end and smart contract/tesing  

Peichi Chien: backend and database 

