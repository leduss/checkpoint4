import React, { useEffect } from "react";
import Chart from "@components/DashBoard/Chart";
import AllValues from "@components/DashBoard/AllValues";
import Value from "@components/DashBoard/Value";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getValue } from "../../redux/IdealValueSlice";

function DashBoard() {
  const dispatch = useDispatch();
  const [selectedYear, setSelectedYear] = React.useState("2022");
  const oneValue = () => {
    axios.get("http://localhost:8000/api/values/ideal/13").then((response) => {
      dispatch(getValue(response.data));
    });
  };
  useEffect(() => {
    oneValue();
  }, []);
  return (
    <div className="w-[100%] h-[100%] flex">
      <div className="w-2/3 h-screen p-2">
        <Chart selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      </div>
      <div className="w-1/3 h-screen flex flex-col gap-3">
        <div className="h-4/6 p-2">
          <AllValues selectedYear={selectedYear} />
        </div>
        <div className="h-2/6 p-2">
          <Value />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
