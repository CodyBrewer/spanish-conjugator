import React from "react";
import svg404 from "../assets/page_not_found.svg";

const PageNotFound = () => {
  console.log("hello page not found");

  return (
    <div>
      <svg src={svg404} />
    </div>
  );
};

export default PageNotFound;
