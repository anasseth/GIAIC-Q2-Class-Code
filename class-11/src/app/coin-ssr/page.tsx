// File: src/app/coin-ssr/page.tsx
export default async function CoinMarket() {
  const API_KEY = "";
  const res = await fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <>
      BTC: {data?.rates?.BTC}
      <br />
      BNB: {data?.rates?.BNB}
    </>
  );
}
