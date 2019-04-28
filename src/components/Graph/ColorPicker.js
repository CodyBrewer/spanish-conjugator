import React, { useState } from "react";
import { GithubPicker } from "react-color";
// import { dynamicColor } from "../constants/colors";

const ColorPicker = () => {
  const [fill, setFill] = useState("#fff");

  const onHandleChange = (color, event) => setFill(color.hex);
  return (
    <div>
      <GithubPicker color={fill} onChange={onHandleChange} />
    </div>
  );
};
export default ColorPicker;
