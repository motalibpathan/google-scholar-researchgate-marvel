import { Carousel } from "flowbite-react";
import React from "react";

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div
          className="h-full"
          style={{
            background:
              "url(https://terrigen-cdn-dev.marvel.com/content/prod/1x/itsjeffcomic_mas_dsk.jpg)",
          }}
        >
          <div className="lg:max-w-[1200px] h-full mx-auto p-5 flex flex-col text-white items-start justify-center">
            <h1 className="text-[44px] font-bold uppercase ">
              Jeff's Getting His Own Comic Book!
            </h1>
            <p className="lg:w-1/2 w-full text-[16px] py-3">
              The recently launched superpowered card battler won Mobile Game of
              the Year at The Game Awards for 2022!
            </p>
            <button className="py-3 px-5 uppercase font-bold bg-red-600 text-white">
              Watch now
            </button>
          </div>
        </div>
        <div
          className="h-full"
          style={{
            background:
              "url(https://terrigen-cdn-dev.marvel.com/content/prod/1x/bobafett_mas_dsk.jpg)",
          }}
        >
          <div className="lg:max-w-[1200px] h-full mx-auto p-5 flex flex-col text-white items-start justify-center">
            <h1 className="text-[44px] font-bold uppercase ">
              Jeff's Getting His Own Comic Book!
            </h1>
            <p className="lg:w-1/2 w-full text-[16px] py-3">
              The recently launched superpowered card battler won Mobile Game of
              the Year at The Game Awards for 2022!
            </p>
            <button className="py-3 px-5 uppercase font-bold bg-red-600 text-white">
              Watch now
            </button>
          </div>
        </div>
        <div
          className="h-full"
          style={{
            background:
              "url(https://terrigen-cdn-dev.marvel.com/content/prod/1x/newcomics121422_mas_dsk.jpg)",
          }}
        >
          <div className="lg:max-w-[1200px] h-full mx-auto p-5 flex flex-col text-white items-start justify-center">
            <h1 className="text-[44px] font-bold uppercase ">
              Jeff's Getting His Own Comic Book!
            </h1>
            <p className="lg:w-1/2 w-full text-[16px] py-3">
              The recently launched superpowered card battler won Mobile Game of
              the Year at The Game Awards for 2022!
            </p>
            <button className="py-3 px-5 uppercase font-bold bg-red-600 text-white">
              Watch now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
