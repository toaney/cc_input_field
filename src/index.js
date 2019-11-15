import React from "react";
import ReactDOM from "react-dom";
import CardInput from "./cardInput";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <img src="/amex.svg" style={{ width: "50px" }} alt="american express card thumbnail"/>
      <img src="/discover.svg" style={{ width: "50px", marginLeft: "10px" }} alt="discover card thumbnail"/>
      <img src="/generic.svg" style={{ width: "50px", marginLeft: "10px" }} alt="generic credit card thumbnail"/>
      <img  src="/mastercard.svg" style={{ width: "50px", marginLeft: "10px" }} alt="mastercard thumbnail"/>
      <img src="/visa.svg" style={{ width: "50px", marginLeft: "10px" }} alt="visa card thumbnail"/>
      <img src="/check.svg" style={{ width: "35px", marginLeft: "10px" }} alt="checkmark"/>
      <img src="/x.svg" style={{ width: "27px", marginLeft: "10px" }} alt="error"/>
      <h2>Start editing to see some magic happen!</h2>
      <CardInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
