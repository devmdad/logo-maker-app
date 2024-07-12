import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(v) => setSelectedIndex(v)} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed w-[84%]">
          <div className="md:col-span-2 h-screen shadow-sm p-5 overflow-auto pb-24">
            {selectedIndex === 0 ? (
              <IconController />
            ) : (
              <BackgroundController />
            )}
          </div>
          <div className="md:col-span-3 bg-orange-500 pb-24">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
          <div className="md:col-span-1 bg-blue-500 pb-24">Ads</div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
};

export default App;
