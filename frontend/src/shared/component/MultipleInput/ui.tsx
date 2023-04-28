import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import "./style.scss";
import { IconFill } from "../IconFill/ui";
import ContentEditable from "react-contenteditable";

export const MultipleInput = () => {
  const text = React.useRef("");
  const [visible, setVisible] = React.useState(true);
  const [placeholder, setPlaceholder] = React.useState("");

  const handleChange = (e) => {
    text.current = e.target.value;
  };
  const handleFocus = () => {
    setPlaceholder("Press ‘space’ for AI, ‘/’ for commands…");
  };
  const handleBlur = () => {
    setPlaceholder("");
  };
  return (
    <div
      className="multipleInput"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {visible && <Helpers />}
      <ContentEditable
        html={text.current}
        onChange={handleChange}
        placeholder={placeholder}
        onBlur={handleBlur}
        tagName={"p"}
        className="multipleInput__label"
        onFocus={handleFocus}
      />
    </div>
  );
};

const Helpers = () => {
  return (
    <div className="multipleInput__helpers">
      <IconFill>
        <AddIcon />
      </IconFill>
      <IconFill>
        <DragIndicatorIcon />
      </IconFill>
    </div>
  );
};
