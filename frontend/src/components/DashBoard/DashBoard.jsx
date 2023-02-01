import React from "react";
import Chart from "@components/DashBoard/Chart";
import LastValue from "@components/DashBoard/LastValue";
import Doctor from "@components/DashBoard/Doctor";

function DashBoard() {
  return (
    <div className="w-[100%] h-[100%] relative">
      <div className="w-2/3 h-2/3 absolute left-3 top-3">
        <Chart />
      </div>
      <div className="w-[17rem] h-52 absolute left-3 top-[70vh]">
        <LastValue />
      </div>
      <div className="w-[17rem] h-52 absolute left-72 top-[70vh]">
        <Doctor />
      </div>
    </div>
  );
}

export default DashBoard;
