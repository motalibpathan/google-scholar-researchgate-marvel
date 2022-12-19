import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import Subject from "./Subject";

const BrowseBySubject = ({ books }) => {
  const [mobileDevice, setMobileDevice] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMobileDevice(true);
      } else {
        setMobileDevice(false);
      }
      console.log(window.innerWidth);
    });
  }, []);

  const subjects = [
    {
      id: 1,
      img: "https://openlibrary.org/static/images/categories/art.svg",
      total: "81752",
      title: "Art",
    },
    {
      id: 2,
      img: "https://openlibrary.org/static/images/categories/science_fiction.svg",
      total: "851752",
      title: "Science Fiction",
    },
    {
      id: 3,
      img: "https://openlibrary.org/static/images/categories/fantasy.svg",
      total: "84652",
      title: "Fantasy",
    },
    {
      id: 4,
      img: "https://openlibrary.org/static/images/categories/biographies.svg",
      total: "96541",
      title: "Biographies",
    },
    {
      id: 5,
      img: "https://openlibrary.org/static/images/categories/recipes.svg",
      total: "84652",
      title: "Recipes",
    },
    {
      id: 6,
      img: "https://openlibrary.org/static/images/categories/romance.svg",
      total: "65478",
      title: "Romance",
    },
    {
      id: 7,
      img: "https://openlibrary.org/static/images/categories/textbooks.svg",
      total: "65478",
      title: "Textbooks",
    },
    {
      id: 8,
      img: "https://openlibrary.org/static/images/categories/children.svg",
      total: "65478",
      title: "Children",
    },
  ];

  return (
    <div className="max-w-[1060px] w-full mx-auto bg-white  shadow-2xl">
      <div>
        <h1 className="p-5 text-[#02598b] text-lg font-[700] mb-0 underline">
          Browse by Subject
        </h1>
        <div className="flex items-center ">
          <Carousel
            leftArrow={<Arrow />}
            rightArrow={<Arrow right={true} />}
            show={mobileDevice ? 2 : 5}
            responsive={true}
            useArrowKeys={true}
            swiping={true}
            className="mb-5"
          >
            {subjects.map((subject) => (
              <Subject key={subject.id} subject={subject} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BrowseBySubject;

export const Arrow = ({ right }) => {
  return (
    <button
      className={`p-1 bg-[#02598b] rounded-full text-white mx-2 mt-10 ${
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
