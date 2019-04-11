import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

export default ({ accounts }) => (
    <div className="App">
        <div>
            <h1>Truffle Storage</h1>
            <p>Store the name of your Truffle.</p>
        </div>
        <div className="section">
            <p>
                Current Name: <ContractData contract="TruffleStorage" method="get" />
            </p>
            <p>
                <ContractForm contract="TruffleStorage" method="set" />
            </p>
        </div>
    </div>
);  