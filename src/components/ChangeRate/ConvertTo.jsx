import React from "react";
import { useState } from "react";
import Rate from "../ShowResult/Rate";
export default function ConvertTo({ Rates }) {
  console.log(Rates);
  const [fromcur, setfromcur] = useState("USD");
  const [toCurrency, settoCurrency] = useState("");
  const [toAmount, settoamount] = useState();
  const [state, setState] = useState(false);
  console.log(toCurrency, fromcur);
  return (
    <div className="content">
      <div className="amount">
        <input
          type="number"
          value={toAmount}
          onChange={(e) => settoamount(e.target.value)}
          placeholder="amount to convert"
        />
      </div>
      <div className="selecters">
        <p>From Curency</p>
        <select value={fromcur} onChange={(e) => setfromcur(e.target.value)}>
          <option selected>select</option>
          {Rates.map((rate, index) => (
            <option key={index}>{rate}</option>
          ))}
        </select>
        <p>To Curency</p>
        <select
          value={toCurrency}
          onChange={(e) => settoCurrency(e.target.value)}
        >
          <option selected>select</option>
          {Rates.map((rate, index) => (
            <option key={index}>{rate}</option>
          ))}
        </select>
        {/* <button onClick={setState(true)}>Convert</button> */}
        {/* {state && ( */}
        <Rate curType={fromcur} toCurType={toCurrency} amount={toAmount} />
        {/* )} */}
      </div>
    </div>
  );
}
