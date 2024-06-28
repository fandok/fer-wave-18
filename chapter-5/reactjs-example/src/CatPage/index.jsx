import { useEffect, useState } from "react";

const CAT_URL = "https://catfact.ninja/fact";

const CatPage = () => {
  const [fact, setFact] = useState("empty");
  const [count, setCount] = useState(0);

  const fetchCat = async () => {
    const response = await fetch(CAT_URL);
    const responseData = await response.json();
    setFact(responseData.fact);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <>
      <h1>COUNT</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        tambah angka
      </button>
      <h1>FAKTA KUCING</h1>
      <h2>{fact}</h2>
      <button onClick={fetchCat}>cari fakta lainnya</button>
    </>
  );
};

export default CatPage;
