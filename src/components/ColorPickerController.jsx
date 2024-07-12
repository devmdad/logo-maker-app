import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

function ColorPickerController({ hideController = false, setSelectedColor }) {
  const [color, setColor] = useState("rgba(255, 255, 255, 1)");
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(e) => {
          setColor(e);
          setSelectedColor(e);
        }}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
}

export default ColorPickerController;
