export default async function CoinMarketSSG() {
  const API_KEY = "4eb3b880f40eafe5d3baa769f0639d5d";
  const res = await fetch(
    `http://api.coinlayer.com/live?access_key=${API_KEY}`,
    {
      next: {
        revalidate: 30
      }
    }
  );
  const data = await res.json();

  return (
    <>
      <h1>Coin - ISR</h1>
      <br />
      BTC: {data?.rates?.BTC}
      <br />
      BNB: {data?.rates?.BNB}
    </>
  );
}





