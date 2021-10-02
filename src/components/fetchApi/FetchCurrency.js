import { useEffect, useState } from "react";
export default function FetchCurrency(params) {
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function GetData() {
      const getData = await fetch(params);
      const res = await getData.json();
      setLoading(true);
      setData(res);
      // return res
    }
    GetData();
  }, [setData, setLoading, params]);
  return [Data, loading];
}
