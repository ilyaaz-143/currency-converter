import FetchCurrency from "../fetchApi/FetchCurrency";
import { useEffect, useState } from "react";
export default function Rate({ curType, toCurType, amount }) {
  const [data, setData] = useState(null);
  const [dataload, load] = FetchCurrency(
    `https://v6.exchangerate-api.com/v6/aa8690c2e45eb18cba623e8a/latest/${curType}`
  );
  useEffect(() => {
    dataload && setData(dataload.conversion_rates);
  }, [load, dataload, setData]);
  console.log(amount);
  return (
    <div>
      {" "}
      <p>
        Rate:
        {toCurType && amount
          ? data[toCurType] * amount
          : !amount && !toCurType
          ? 1
          : data[toCurType]}
      </p>
    </div>
  );
}
