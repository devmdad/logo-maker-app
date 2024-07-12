import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Smile, icons } from "lucide-react";
import { LuIconsList } from "../constants/icons";

function IconList({ selectedIcon }) {
  const [open, setOpen] = useState(false);

  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  const Icon = ({ name, size, color }) => {
    const LucidIcon = icons[name];
    return LucidIcon && <LucidIcon size={size} color={color} />;
  };
  //   console.log([icons]);
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <label>Icon</label>
        <div className="p-3 my-2 cursor-pointer bg-gray-200 rounded w-[50px] h-[50px] flex items-center justify-center">
          <Icon name={icon} color={"#000"} size={20} />
        </div>
      </div>
      <Dialog open={open}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Choose Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                {LuIconsList.map((icon, index) => (
                  <div
                    className="border p-3 flex rounded items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpen(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
