import {ethers} from 'ethers'
import SimpleCallOptionContractMeta from '../contracts/SimpleCallOption'


//import contract from 'truffle-contract'


//let instance = null

export default class SimpleCallOptionContract {
  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    this.contractAddress = "0x4Fc3Ba4585C6B3D85742B6E56B6250A4862A98D5";
    this.contract = new ethers.Contract(this.contractAddress, SimpleCallOptionContractMeta.abi, this.provider.getSigner());
  }

  async addNewOption(addr, name, price, year, rate) {
    let newTransaction = await this.contract.addOption(addr, name, price, year, rate);
    return newTransaction.hash
  }


}