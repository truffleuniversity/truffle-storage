import MyComponent from "./MyComponent";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
    console.log(state.contracts.TruffleStorage)
  return {
    accounts: state.accounts,
    TruffleStorage: state.contracts.TruffleStorage,
  };
};

const MyContainer = drizzleConnect(MyComponent, mapStateToProps);

export default MyContainer;