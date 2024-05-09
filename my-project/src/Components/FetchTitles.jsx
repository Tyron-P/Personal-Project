import { useState, useEffect } from "react";

export const useFetchListTitles = (urlMock) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  let url = urlMock;
  const hasData = data.length;

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

    // let url =
    //   "https://api.watchmode.com/v1/releases/?apiKey=mHxNRuWuueeoWkfpxVpnihmy6M1EO60aLu3NNQ9Z ";
    console.log(data);
  }, [data]);

  return { data, isPending };
};
