import React, { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { Slider } from "./ui/slider";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [bgColor, setBgColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedStorageValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: bgColor,
    };
    setUpdateStorage(updatedStorageValue);
    localStorage.setItem("value", JSON.stringify(updatedStorageValue));
  }, [rounded, padding, bgColor]);

  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          defaultValue={[rounded || 0]}
          max={256}
          step={1}
          onValueChange={(e) => setRounded(e[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          defaultValue={[padding || 0]}
          max={256}
          step={1}
          onValueChange={(e) => setPadding(e[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Background Color
        </label>
        <ColorPickerController
          hideController={false}
          setSelectedColor={(value) => setBgColor(value)}
        />
      </div>
    </div>
  );
}

export default BackgroundController;
