import React from "react";
import "./headline.scss";

const Headline = ({ headline }) => {
  const headlineArr = headline?.trim()?.split(" ");
  const midIndex = Math.floor(headlineArr.length / 2);

  return (
    <div className="headline">
      <div className="txt position-relative text-center text-uppercase">
        <h1 className="headline-text text-dark-blue fw-bold text-capitalize" data-text={headline}>
          {headlineArr.slice(0, midIndex).join(" ")}{" "}
          <span className="text-light-green">
            {headlineArr[midIndex]}
          </span>{" "}
          {headlineArr.slice(midIndex + 1).join(" ")}
        </h1>
      </div>
    </div>
  );
};

export default Headline;
