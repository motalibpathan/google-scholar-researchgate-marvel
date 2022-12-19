import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import Book from "./Book";

const BookList = ({ title, books }) => {
  const [mobileDevice, setMobileDevice] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMobileDevice(true);
        console.log(window.innerWidth);
      } else {
        setMobileDevice(false);
      }
      console.log(window.innerWidth);
    });
  }, []);

  return (
    <div className="max-w-[1060px] w-full mx-auto bg-white  shadow-2xl">
      <div>
        <h1 className="p-5 text-[#02598b] text-lg font-[700] mb-0 underline">
          {title}
        </h1>
        <div className="flex items-center bg-[#e1dcc5]">
          <Carousel
            leftArrow={<Arrow />}
            rightArrow={<Arrow right={true} />}
            show={mobileDevice ? 2 : 5}
            responsive={true}
            useArrowKeys={true}
            swiping={true}
            className="mb-5"
          >
            {books.map((item) => (
              <Book key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BookList;

export const Arrow = ({ right }) => {
  return (
    <button
      className={`p-1 bg-[#02598b] rounded-full text-white mx-2 mt-32 ${
        right && "rotate-180"
      } `}
    >
      {leftIcon}
    </button>
  );
};

const leftIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 "
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);
