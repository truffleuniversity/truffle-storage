pragma solidity ^0.5.0;

contract TruffleStorage {
  // state
  string public data;

  // events

  // constructor
  constructor() public {
  }

  // functions
  function set(string memory _data) public {
    data = _data;
  }

  function get() external view returns (string memory) {
    return data;
  }

  // modifiers

  // fallback
}