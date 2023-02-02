import React from "react";
import { NavLink } from "react-router-dom";
import data1 from "@components/NavBar/data1";

function NavBarItem1() {
  return (
    <div className="flex flex-col gap-2 w-[80%] bg-[#4AC088] bg-opacity-10 p-2 rounded-lg">
      {data1.map((element) => (
        <NavLink
          key={element.id}
          to=""
          className={({ isActive }) =>
            isActive
              ? "decoration-none bg-transparent rounded-lg w-full  flex items-center justify-center h-10 pl-3"
              : "decoration-none bg-transparent rounded-lg w-full flex items-center justify-center h-10 pl-3 hover:bg-[#4AC088] hover:text-gray-200"
          }
        >
          <div className="w-full flex items-center  gap-5 font-normal">
            <p className="text-sm">{element.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default NavBarItem1;
