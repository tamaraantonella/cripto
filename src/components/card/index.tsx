import React from "react";

interface CardProps {
  card: {
    id: string;
    image: string;
    current_price: number;
    name: string;
    symbol: string;
    high_24h: number;
    low_24h: number;
  };
}

export default function Card({ card }: CardProps) {
  return (
    <div className=" flex flex-col items-center justify-center p-5 bg-violet-500 m-3 text-white rounded-md">
      <p className="text-2xl font-semibold">{card.name}</p>
      <p className="text-xl mb-3">${card.current_price}</p>
      <p>Highest last 24h ${card.high_24h}</p>
      <p>Lowest last 24h ${card.low_24h}</p>
      <img className="h-20 w-20" src={card.image} alt={card.name} />
    </div>
  );
}
