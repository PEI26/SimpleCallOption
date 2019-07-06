const admin = require("firebase-admin");
const serviceAccount = require("./asset.json");
const PATH_ASSET_PRICE = '/assets';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://asset-2d77f.firebaseio.com"
  });


class DB{

    async setSpotPrice(info) {
        let newInfo = admin.database().ref(`${PATH_ASSET_PRICE}/${info.itemId}`)
        console.log(info)
        let assetname = info.asset
        let price = info.price
        newInfo.set({name: assetname, spot_price: price});


}

    async getMarketPrice(itemId){
    let result = await admin.database().ref(`${PATH_ASSET_PRICE}/${itemId}`).once("value");
    let response = result.val()
    
    return response
}
}


module.exports = DB
//this.setSpotPrice('')
// console.log(this.getMarketPrice('assetOne'))