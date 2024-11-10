"use client";
import { useState, useEffect } from "react";

export default function CoinMarket() {
  const API_KEY = "";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <>
      BTC: {data?.rates?.BTC}
      <br />
      BNB: {data?.rates?.BNB}
    </>
  );
}
