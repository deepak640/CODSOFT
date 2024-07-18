import React from "react";

const List = () => {
  return (
    <>
      <ul className="tasks">
        {[...Array(5)].map((_, index) => {
          return <li className="items" key={index}>hello</li>;
        })}
      </ul>
    </>
  );
};

export default List;
