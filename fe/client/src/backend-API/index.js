const ENDPOINT_GET_CURRENT_PRICE = 'getCurrentMarketPrice'
const ENDPOINT_SET_CURRENT_PRICE = 'SetCurrentMarketPrice'

export default class BackendAPI {

    constructor(){
        this.backenUrl = "http://68.183.204.206:3001"
    }

    // fetchPrice(endpoint, param){
    //     return fetch(`${this.backenUrl}/${endpoint}?itemId=${param}`,).then(res => res.json)
    //       }
    

    getSpotPrice(param){
        //let obj = this.fetchPrice(ENDPOINT_GET_CURRENT_PRICE, param);
        // let price = obj.spot_price;
        //let obj = fetch(`${this.backenUrl}/${ENDPOINT_GET_CURRENT_PRICE}?itemId=${param}`).then(res => res.json).then(data=>console.log(data)).catch(error => console.log(error))
        let obj = fetch(`${this.backenUrl}/${ENDPOINT_GET_CURRENT_PRICE}?itemId=${param}`).then(function(response) {return response.json(); }).then(function(myJson) {console.log(JSON.stringify(myJson.spot_price));  });
        console.log(obj)
    }

    postPrice(param){
        return fetch(`${this.backenUrl}/${ENDPOINT_SET_CURRENT_PRICE}`, {
            method : "post",
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(param)
        })
    }

    
}