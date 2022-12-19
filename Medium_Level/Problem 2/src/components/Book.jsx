import React from "react";

const Book = ({ item }) => {
  const btnColor =
    item.status === "Not in Library" || item.status === "Checked Out"
      ? "bg-gray-600"
      : "bg-[#02598b]";
  return (
    <div className="lg:w-[170px] w-[150px] p-3 flex flex-col items-center gap-4 ">
      <div className="w-full">
        <img className="w-full lg:h-[230px] h-[190px]" src={item.img} alt="" />
      </div>
      <button
        className={`px-2 py-1.5 rounded-md w-full text-white ${btnColor}`}
      >
        {item.status}
      </button>
    </div>
  );
};

export default Book;
