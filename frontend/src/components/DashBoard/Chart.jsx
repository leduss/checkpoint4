import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Graph from "@components/DashBoard/Graph";
import Input from "@components/DashBoard/Input";
import { getValue } from "../../redux/ValueSlice";

function Chart() {
  const dispatch = useDispatch();
  const getAllValues = () => {
    const url = "http://localhost:8000/api/values/13";
    axios.get(url).then((response) => {
      dispatch(getValue(response.data));
    });
  };
  useEffect(() => {
    getAllValues();
  }, []);
  return (
    <div className="h-full bg-[#262837] rounded-2xl p-2">
      <Graph />
      <Input getAllValues={getAllValues} />
    </div>
  );
}

export default Chart;
