export default async function CoinMarket() {
  const API_KEY = "0ef3c866933e42e038801e9db36bd9e6";
  const res = await fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
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
