import React from "react";
import { NavLink } from "react-router-dom";
import data2 from "@components/NavBar/data2";

function NavBarItem() {
  return (
    <div className="flex flex-col gap-2 w-[80%] bg-[#4AC088] bg-opacity-20 p-2 rounded-lg">
      {data2.map((element) => (
        <NavLink
          key={element.id}
          to={element.path}
          className={({ isActive }) =>
            isActive
              ? "decoration-none bg-[#4AC088] rounded-lg w-full  flex items-center justify-center h-10 pl-3"
              : "decoration-none bg-transparent rounded-lg w-full flex items-center justify-center h-10 pl-3 hover:bg-[#4AC088] hover:text-gray-300"
          }
        >
          <div className="w-full flex items-center  gap-5 font-normal">
            <p className="text-xl">{element.icon}</p>
            <p className="text-sm">{element.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default NavBarItem;
