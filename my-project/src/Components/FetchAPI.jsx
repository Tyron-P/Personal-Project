import { useState, useEffect } from "react";

export const useFetchAPI = (urlMock) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  let url = urlMock;
  const dataIsNull = data === null;

  useEffect(() => {
    async function fetchData() {
      if (data === null) {
        await fetch(url, { method: "Get" })
          .then((res) => res.json())
          .then((json) => {
            setData(json);
          })
          .catch((error) => console.error(error));
      }
      if (!dataIsNull) {
        setIsPending(false);
      }
    }
    fetchData();
    // let url =
    //   "https://api.watchmode.com/v1/releases/?apiKey=mHxNRuWuueeoWkfpxVpnihmy6M1EO60aLu3NNQ9Z ";
    console.log(data);
  }, [data]);

  return { data, isPending };
};
