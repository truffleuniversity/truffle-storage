const TruffleStorage = artifacts.require("TruffleStorage");

module.exports = function(deployer) {
  deployer.deploy(TruffleStorage);
};
