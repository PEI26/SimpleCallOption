const SimpleCallOption = artifacts.require("./SimpleCallOption.sol");

contract("SimpleCallOption", accounts => {
  // it("a call option contract was deployed", async()=> {
  //   let address = await SimpleCallOption.options.address;
  //   assert.ok(address);
  // });
  // beforeEach('deploy the contract', async function(){
  //   const simpleStorageInstance = await SimpleStorage.deployed();
  // })
  // it("...should store the value 89.", async () => {
  //   // Set value of 89
  //   await simpleStorageInstance.set(89, { from: accounts[0] });

  //   // Get stored value
  //   const storedData = await simpleStorageInstance.get.call();

  //   assert.equal(storedData, 89, "The value 89 was not stored.");
  // });
  it("set value for spot price as admin", async function () {
    const SimpleCallOptionInstance = await SimpleCallOption.deployed();
    await SimpleCallOptionInstance.setCurrentMarketPrice(150, {from: accounts[0]});
    let result = await SimpleCallOptionInstance.getCurrentMarketPrice.call();
    assert.strictEqual(parseInt(result, 10), 150);
  });
  it("set value for spot price as non-admin", async function () {
    const SimpleCallOptionInstance = await SimpleCallOption.deployed();
    try{
      await SimpleCallOptionInstance.setCurrentMarketPrice(150, {from: accounts[1]});
    }
    catch(error){
      let actualMessage = error.message;
      let expectedMessage = "you don't have authority";
      assert(actualMessage.includes(expectedMessage));
    }
  });
  //let newOption = ['0x80c846af8e5ae9153538d759f7ad35e9461b5699','new Call option', 100, 2, 12]
    it('add new option when spot price is reasonable as admin', async function(){
      const SimpleCallOptionInstance = await SimpleCallOption.deployed();
      await SimpleCallOptionInstance.setCurrentMarketPrice(150, {from: accounts[0]});
      await SimpleCallOptionInstance.addOption('0x80c846af8e5ae9153538d759f7ad35e9461b5699','new Call option', 100, 2, 12, {from: accounts[0]});
    })
    it('add new option when spot price is reasonable as non-admin', async function(){
      const SimpleCallOptionInstance = await SimpleCallOption.deployed();
      try{
        await SimpleCallOptionInstance.setCurrentMarketPrice(150,{from: accounts[1]});
        await SimpleCallOptionInstance.addOption('0x80c846af8e5ae9153538d759f7ad35e9461b5699','new Call option', 100, 2, 12,{from: accounts[1]});
      }
      catch(error){
        let actualMessage = error.message;
        //console.log(actualMessage);
        let expectedMessage = "you don't have authority";
        assert(actualMessage.includes(expectedMessage));
      }
    })
 
  });

