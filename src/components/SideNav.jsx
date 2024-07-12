import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNav({selectedIndex}) {
  const [active, setActive] = useState(0);
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((item, index) => (
          <h2
            className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white
            ${index === active && "bg-primary text-white"}
            `}
            key={item.id}
            onClick={() => {
              setActive(index);
              selectedIndex(index);
            }}
          >
            <item.icon />
            {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
