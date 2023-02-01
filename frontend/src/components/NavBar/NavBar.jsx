import React from "react";
import NavBarItem1 from "@components/NavBar/NavBarItem1";
import NavBarItem from "@components/NavBar/NavBarItem";

function NavBar() {
  return (
    <div className="w-2/12 h-screen bg-[#201E2D] fixed border-r border-opacity-30 border-white text-[#6C788F]">
      <h1 className="flex justify-center pt-5 text-2xl">Mon SAPL</h1>
      <div className="flex flex-col items-center mt-12">
        <NavBarItem1 />
      </div>
      <div className="w-[80%] m-auto p-2 mt-12">
        <h2 className="pl-3 text-xl">Espace Membre</h2>
      </div>
      <div className="flex flex-col items-center">
        <NavBarItem />
      </div>
    </div>
  );
}

export default NavBar;
