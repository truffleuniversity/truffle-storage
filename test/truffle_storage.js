const TruffleStorage = artifacts.require('TruffleStorage');

contract('TruffleStorage', () => {
  it("should assert true", async () => {
    // arrange
    var truffleStorage = await TruffleStorage.deployed();

    // act
    await truffleStorage.set('I ❤️ Truffles');
    const result = await truffleStorage.get();
    
    // assert
    assert(result === 'I ❤️ Truffles', 'strings do not much');
  });
});
