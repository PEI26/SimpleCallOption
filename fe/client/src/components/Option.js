import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import SimpleCallOption from '../contracts-API/SimpleCallOption'
import PostPrice from './PostPrice';

const callContract = new SimpleCallOption();
export default class Option extends Component {
    constructor(props){
        super(props);
        this.state = {value: '',
                    currentPrice: '',
                    asset: '',
                    address:'',
                    strikePrice:'',
                    time:'',
                    rate:'',
                    options:'',
                    addAss: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.renderAss = this.renderAss.bind(this);
        this.txWatch = this.txWatch.bind(this);
      }
      componentWillMount(){
        //let value = localStorage.getItem('spotPrice');
        let currentPrice = localStorage.getItem('spotPrice')
        let asset = localStorage.getItem('assetName');
        let address = localStorage.getItem('address');
        let strikePrice = localStorage.getItem('strikePrice');
        let time = localStorage.getItem('time');
        let rate = localStorage.getItem('rate');
        this.setState({currentPrice: currentPrice, asset: asset, address: address, strikePrice: strikePrice, time: time, rate: rate})
      }
      
      handleClick(e){
        e.preventDefault()
        //let currentPrice = this.state.currentPrice;
        let asset = this.state.asset;
        let address = this.state.address;
        let strikePrice = this.state.strikePrice;
        let time = this.state.time
        let rate = this.state.rate;
        callContract.addNewOption(address, asset, strikePrice, time, rate).then( res => {
          this.setState({options: res})
        })
      };
      handleClick2(e){
        e.preventDefault();
        this.setState({addAss: true});
      }
      renderAss(){
        return(
          <div>
            <PostPrice />
          </div>
        )
      }
      txWatch(){
        return(
          <div>
            {this.state.options}
          </div>
        )
      }
    
    render() {
        return (
            <div>
                <Button variant="light" onClick={this.handleClick}>Generate contract {this.state.options}</Button>
                <br></br>
                <br></br>
                <Button variant="info" onClick={this.handleClick2}>Didn't find your asset?? click here to add</Button>{this.state.addAss ? this.renderAss():null}
            </div>
        )
    }
}
