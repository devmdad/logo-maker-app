import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  useEffect(() => {
    const updatedStorageValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon,
    };
    setUpdateStorage(updatedStorageValue);
    localStorage.setItem("value", JSON.stringify(updatedStorageValue));
  }, [size, rotate, color, icon]);

  return (
    <div>
      <div>
        <IconList selectedIcon={(icon) => setIcon(icon)} />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Size <span>{size}px</span>
        </label>
        <Slider
          defaultValue={[size]}
          max={512}
          step={1}
          onValueChange={(e) => setSize(e[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rotate <span>{rotate}°</span>
        </label>
        <Slider
          defaultValue={[rotate]}
          max={360}
          step={1}
          onValueChange={(e) => setRotate(e[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Icon Color
        </label>
        <ColorPickerController
          hideController={true}
          setSelectedColor={(value) => setColor(value)}
        />
      </div>
    </div>
  );
}

export default IconController;
