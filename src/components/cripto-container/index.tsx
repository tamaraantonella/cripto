import React, { useEffect } from "react";
import axios from "axios";

export default function CriptoContainer() {
  const getCoins = async () => {
    try {
      let response = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "2231bb0f-1ade-4b96-8eee-d998ce0f33cf",
          },
        }
      );
      const { data } = response;
      const responseArray = data.data;
      console.log(responseArray);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);
  return <div>CriptoContainer</div>;
}
