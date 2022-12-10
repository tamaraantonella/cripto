import React from "react";
import { useAllCoins } from "../api/useAllCoins";
import Card from "../card";
import Pagination from "../pagination";

export default function Container() {
  const [page, setPage] = React.useState(1);
  const getCoins = useAllCoins();
  const coins = getCoins?.data;

  const currentPage = page;
  const coinsPerPage = 10;
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins?.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div className="mx-auto my-20 px-5 w-full">
      <Pagination currentPage={currentPage} setPage={setPage} />
      <div className="grid grid-cols-4 ">
        {currentCoins?.map((coin: any) => (
          <Card key={coin.id} card={coin} />
        ))}
      </div>
    </div>
  );
}
