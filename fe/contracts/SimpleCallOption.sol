pragma solidity ^0.5.0;

contract SimpleCallOption {
    address owner;
    uint8 spotPrice;
    
    constructor () public {
        owner = msg.sender;
    }
    
    modifier onlyOwner {
        require(owner == msg.sender, "you don't have authority");
        _;
    }
    
    struct optionInfo{
        string assets;
        uint8 strikePrice;
        uint8 timeToMaturity;
        uint8 riskFreeRate;
        bool exercised;
    }
    
    mapping (address => optionInfo ) private option;
    optionInfo[] public optionList;
    event newOption(address addr, string assets, uint8 strikePrice, uint8 marketPrice, uint8 timeToMaturity, uint8 riskFreeRate, bool exercised);
    
    function setCurrentMarketPrice(uint8 _spotPrice) public onlyOwner returns (uint8)  {
        spotPrice = _spotPrice;
        return spotPrice;
    }
    
    function getCurrentMarketPrice() public view returns (uint8){
        return spotPrice;
    }
    
    function addOption (address _addr, string memory _assets, uint8 _strikePrice, uint8 _timeToMaturity, uint8 _riskFreeRate) public returns(address, string memory, uint8, uint8, uint8, bool, uint8){
        spotPrice = getCurrentMarketPrice();
        bool exercised = false;
        option[_addr]=optionInfo(_assets, _strikePrice, _timeToMaturity, _riskFreeRate, exercised);
        optionList.push(option[_addr]);
        emit newOption(_addr, _assets, _strikePrice, spotPrice, _timeToMaturity, _riskFreeRate, exercised);
        return (_addr, _assets, _strikePrice, _timeToMaturity, _riskFreeRate, exercised, spotPrice);
    }
      
}