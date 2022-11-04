import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-center md:gap-20 items-center mt-20">
      <img
        className="w-72 object-cover"
        src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1667589513/delTomate/example-2_vo4wcj.png"
        alt=""
      />
      <div className="max-w-2xl">
        <p className="text-neutral-600 text-justify">
          Check in on how other exchanges and coins are doing with our markets
          data. With deep insight into current and past pricing, volume and
          exchange info, you can make the right decisions to stay ahead of the
          game.
        </p>
        <p className="text-purple-700 text-4xl font-bold font-sans mt-5 text-left">
          Scroll and find out !
        </p>
      </div>
    </div>
  );
}
