import React from "react";

const Pages = () => {
  return (
    <div className="absolute flex justify-center items-center h-screen">
      <div className=" flex items-center justify-between"></div>
      <div className="w-2/3">
        <h1 className="text-5xl mb-8 font-semibold text-[#184657]">
          Selamat Datang!
        </h1>
        <h2 className="text-4xl mb-8 font-extrabold text-black">
          Peternak ikan nomor 1 di Indonesia!
        </h2>
        <div className="text-xl mb-10 font-normal text black ">
          Menjual berbagai jenis ikan hias dengan kualitas terbaik, dan harga
          yang kompetitif.
        </div>
      </div>
    </div>
  );
};

export default Pages;
