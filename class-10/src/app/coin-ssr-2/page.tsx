export default async function CoinSSRMarket() {
  const API_KEY = "4eb3b880f40eafe5d3baa769f0639d5d";
  const data = await fetch(
    `http://api.coinlayer.com/live?access_key=${API_KEY}`,
    {
      cache: "no-store",
    }
  );
  const convertedData: any = await data.json();

  return (
    <>
      <h1>Coin SSR</h1>
      <br />
      BTC: {convertedData?.rates?.BTC}
      <br />
      BNB: {convertedData?.rates?.BNB}
    </>
  );
}
