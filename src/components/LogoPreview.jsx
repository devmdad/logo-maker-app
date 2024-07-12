import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState(null);

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "DevMdAd_Logo_Maker.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, size, color, rotate }) => {
    const LucidIcon = icons[name];
    return (
      LucidIcon && (
        <LucidIcon
          size={size}
          color={color}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      )
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            size={storageValue?.iconSize}
            color={storageValue?.iconColor}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
