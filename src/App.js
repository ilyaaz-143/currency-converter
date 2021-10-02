import "./App.css";
import FetchCurrency from "./components/fetchApi/FetchCurrency";
import { useEffect, useState } from "react";
import ConvertTo from "./components/ChangeRate/ConvertTo";
function App() {
  const [data, setData] = useState([]);
  const [Rate, load] = FetchCurrency(
    "https://v6.exchangerate-api.com/v6/aa8690c2e45eb18cba623e8a/latest/USD"
  );
  useEffect(() => {
    Rate && setData([...Object.keys(Rate.conversion_rates)]);
  }, [load, Rate, setData]);
  // console.log(Rate);
  return (
    <div className="App">
      <h1>Curency converter</h1>
      <div className='cont'>
        <ConvertTo Rates={data} />
      </div>
    </div>
  );
}

export default App;
