import React from "react";
import {
  AccountData,
  ContractForm,
} from "drizzle-react-components";

export default ({ accounts }) => (
    <div className="App">
        <div>
        <h1>Truffle Storage</h1>
        <p>Store the name of your truffle on-chain.</p>
        </div>

        <div className="section">
        <h2>Active Account</h2>
        <AccountData accountIndex="0" units="ether" precision="3" />
        </div>

        <div className="section">
        <p>
        {/* <ContractForm contract="TruffleStorage" method="get" /> */}
        </p>
        </div>
    </div>
);  