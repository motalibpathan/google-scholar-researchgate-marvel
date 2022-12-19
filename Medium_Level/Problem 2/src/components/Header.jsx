import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#333]">
        <div className="max-w-[1060px] w-full lg:p-0 p-5 mx-auto flex justify-between items-center">
          <div className="py-3">
            <img
              className="w-[160px]"
              src="https://openlibrary.org/static/images/ia-logo.svg"
              alt=""
            />
          </div>
          <div className="text-white">
            <span>Donate</span>
            <span>Language</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1060px] w-full lg:p-0 p-5 mx-auto ">
        <div className="py-5 flex flex-wrap justify-between items-center space-y-3">
          <img
            className="w-[189px] text-base"
            src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"
            alt=""
          />
          <div>
            <a className="text-base mr-5" href="#">
              My Books
            </a>
            <a className="text-base" href="#">
              Browse
            </a>
          </div>
          <div className="flex border border-gray-400 bg-white rounded">
            <select className="py-3 px-2" name="" id="">
              <option value="">All</option>
              <option value="">Author</option>
              <option value="">Text</option>
              <option value="">Subject</option>
              <option value="">List</option>
              <option value="">Advanced</option>
            </select>
            <input
              type="text"
              className="border-none outline-none px-3"
              placeholder="Search"
            />
            <img
              className="px-4 cursor-pointer "
              src="https://openlibrary.org/static/images/search-icon.svg"
              alt=""
            />
          </div>
          <div className="flex justify-end gap-3">
            <a href="#">Login</a>
            <a
              className="px-2 py-0.5 rounded-md text-white bg-[#0376b8]"
              href="#"
            >
              Sign up
            </a>
            <img
              className="w-[22px] cursor-pointer"
              src="https://openlibrary.org/static/images/hamburger-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
