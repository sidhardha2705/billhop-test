import React from "react";

import privateImg from "../assets/private.svg";
import entImg from "../assets/enterprise.svg";
import smallBizImg from "../assets/small_business.svg";

import SolutionFor from "./solutionsWidget";

const solutionsData = [
  { name: "Private individuals", img: privateImg },
  { name: "Sole traders & SME", img: smallBizImg },
  { name: "Corporate Enterprises", img: entImg },
];

const Solutions = () => {
  const solutionsMapper = (solutions) => {
    return solutions.map((solution) => {
      return <SolutionFor to={solution} />;
    });
  };

  return (
    <div className="solutions_widgets_wrapper">
      {solutionsMapper(solutionsData)}
    </div>
  );
};

export default Solutions;
