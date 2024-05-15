import { useState, useEffect } from "react";

export const useFetchTitleDetails = (titleId, urlMock) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  //   let url = `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=mHxNRuWuueeoWkfpxVpnihmy6M1EO60aLu3NNQ9Z`;
  let url = urlMock;
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
  });

  return { data, isPending };
};
