import React from "react";

const ListCard = ({ item }) => {
  return (
    <div className="w-[310px] h-full bg-[#fcfbf7] p-3 flex items-center gap-4 border rounded-md">
      <div className="w-1/4">
        <img className="w-full" src={item.img} alt="" />
      </div>
      <div className="w-3/4">
        <h1 className="text-base">{item.title}</h1>
        <p className="text-sm text-[#a19b9e]">{item.desc}</p>
      </div>
    </div>
  );
};

export default ListCard;
