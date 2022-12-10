import { useQuery } from "react-query";

const getAllCoins = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  return response.json();
};

export const useAllCoins = () => {
  return useQuery("allCoins", getAllCoins);
};