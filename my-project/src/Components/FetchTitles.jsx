import { useState, useEffect } from "react";

export const useFetchListTitles = () => {
  const [data, setData] = useState(undefined);
  const [isPending, setIsPending] = useState(true);
  // let url = "http://localhost:8000/releases";
  let url =
    "https://api.watchmode.com/v1/releases/?apiKey=mHxNRuWuueeoWkfpxVpnihmy6M1EO60aLu3NNQ9Z ";
  const hasData = data !== undefined;

  useEffect(() => {
    if (!hasData) {
      fetch(url, { method: "Get" })
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .catch((error) => console.error(error));
    }
    if (hasData) {
      setIsPending(false);
    }

    console.log(data);
  }, [data]);

  return { data, isPending };
};
