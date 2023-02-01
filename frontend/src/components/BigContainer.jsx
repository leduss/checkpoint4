import React from "react";
import { Outlet } from "react-router-dom";

function BigContainer() {
  return (
    <div className="w-5/6 h-screen absolute right-0 bg-[#201E2D]">
      <Outlet />
    </div>
  );
}

export default BigContainer;
