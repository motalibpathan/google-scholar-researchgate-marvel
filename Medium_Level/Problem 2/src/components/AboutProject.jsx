import React from "react";

const AboutProject = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto bg-white  shadow-2xl p-5 text-gray-500 mb-10">
      <h1 className="text-2xl mb-3 font-bold ">About the Project</h1>
      <div className="flex gap-5">
        <div className="lg:w-1/2 w-full">
          <p className="mb-2 text-base">
            Open Library is an open, editable library catalog, building towards
            a web page for every book ever published. <a href="#">More</a>
          </p>
          <p className="mb-3 text-xs">
            Just like Wikipedia, you can contribute new information or
            corrections to the catalog. You can browse by subjects, authors or
            lists members have created. If you love books, why not help build a
            library?
          </p>
        </div>
        <div className="lg:w-1/2 w-full space-y-2">
          <p className="text-[#02598b] underline text-lg font-bold">
            Latest Blog Posts
          </p>
          <div className="">
            <a className="underline text-[#02598b]" href="#">
              2022 Review
            </a>
            <span> - November 23, 2022</span>
          </div>
          <div>
            <a className="underline text-[#02598b]" href="#">
              Search for Books in your Reading Log
            </a>
            <span> - November 23, 2022</span>
          </div>
          <div>
            <a className="underline text-[#02598b]" href="#">
              Improvements to the Main Navigation
            </a>
            <span> - November 23, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
