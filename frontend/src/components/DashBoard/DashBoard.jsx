import React from "react";
import Chart from "@components/DashBoard/Chart";
import LastValue from "@components/DashBoard/LastValue";
import Doctor from "@components/DashBoard/Doctor";
import Labo from "@components/DashBoard/Labo";
import AllValues from "@components/DashBoard/AllValues";
import Value from "@components/DashBoard/Value";

function DashBoard() {
  return (
    <div className="w-[100%] h-[100%] relative">
      <div className="w-2/3 h-2/3 absolute left-3 top-3">
        <Chart />
      </div>
      <div className="w-[16rem] h-52 absolute left-3 top-[70vh]">
        <LastValue />
      </div>
      <div className="w-[16rem] h-52 absolute left-[17.7rem] top-[70vh]">
        <Doctor />
      </div>
      <div className="w-[16rem] h-52 absolute left-[34.6rem] top-[70vh]">
        <Labo />
      </div>
      <div className="w-[30%] h-2/3 absolute right-3 top-3">
        <AllValues />
      </div>
      <div className="w-[30%] h-52 absolute right-3 bottom-3">
        <Value />
      </div>
    </div>
  );
}

export default DashBoard;
