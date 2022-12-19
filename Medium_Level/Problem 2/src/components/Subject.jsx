import React from "react";

const Subject = ({ subject }) => {
  return (
    <div>
      <img className="w-14 mx-auto mb-2" src={subject.img} alt="" />
      <h1 className="text-center text-sm">{subject.title}</h1>
      <p className="text-center text-xs">{subject.total} Books</p>
    </div>
  );
};

export default Subject;
