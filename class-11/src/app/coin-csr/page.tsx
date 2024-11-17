"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function CoinMarket() {
  const API_KEY = "";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        setData(jsonConverted);
      });
  }, []);

  return (
    <>
      <h1>Coin CSR</h1>
      <Button variant="secondary" size="lg">
        {" "}
        BTC: {data?.rates?.BTC}
      </Button>
      <br />
      <Button variant="ghost" size="lg">
        {" "}
        BNB: {data?.rates?.BNB}
      </Button>
      <Button variant="link" size="lg">
        {" "}
        BNB: {data?.rates?.BNB}
      </Button>
    </>
  );
}
