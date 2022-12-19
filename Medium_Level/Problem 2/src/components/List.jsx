import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";

const List = () => {
  const [mobileDevice, setMobileDevice] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMobileDevice(true);
      } else {
        setMobileDevice(false);
      }
    });
  }, []);
  const listItem = [
    {
      id: 1,
      img: "https://openlibrary.org/static/images/onboarding/read.png",
      title: "Read Free Library Books Online",
      desc: "Millions of books available through Controlled Digital",
    },
    {
      id: 2,
      img: "https://openlibrary.org/static/images/onboarding/track.png",
      title: "Keep Track of your Favorite Books",
      desc: "Organize your Books using Lists & the Reading Log",
    },
    {
      id: 3,
      img: "https://openlibrary.org/static/images/onboarding/library_explorer.png",
      title: "Try the virtual Library Explorer",
      desc: "Digital shelves organized like a physical library",
    },
    {
      id: 4,
      img: "https://openlibrary.org/static/images/onboarding/fulltext.png",
      title: "Try Fulltext Search",
      desc: "Find matching results within the text of millions of books",
    },
    {
      id: 5,
      img: "https://openlibrary.org/static/images/onboarding/librarian.png",
      title: "Be an Open Librarian",
      desc: "Dozens of ways you can help improve the library",
    },
    {
      id: 6,
      img: "https://openlibrary.org/static/images/onboarding/feedback.png",
      title: "Send us feedback",
      desc: "Your feedback will help us improve these cards",
    },
  ];
  return (
    <div className="max-w-[1060px] w-full mx-auto bg-white">
      <div>
        <h1 className="p-5 text-[#02598b] text-lg font-[700] mb-4">
          Welcome to Open Library
        </h1>
        <div className="flex items-center">
          <Carousel
            leftArrow={<ArrowLeft />}
            rightArrow={<ArrowRight />}
            show={mobileDevice ? 1 : 3}
            responsive={true}
            useArrowKeys={true}
            swiping={true}
            className="flex mb-5"
          >
            {listItem.map((item) => (
              <ListCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default List;

export const ArrowLeft = () => {
  return (
    <button className="p-1 bg-[#02598b] rounded-full text-white mx-2 mt-10">
      {leftIcon}
    </button>
  );
};
export const ArrowRight = () => {
  return (
    <button className="p-1 bg-[#02598b] rounded-full text-white mx-2 rotate-180 mt-10">
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
