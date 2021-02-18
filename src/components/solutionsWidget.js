import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const SolutionFor = ({ to }) => {
  return (
    <div className="solution_wrapper">
      <img alt={to.name} className="solution_img" src={to.img} />
      <div>Solutions for</div>
      <Text strong>{to.name}</Text>
    </div>
  );
};

export default SolutionFor;
