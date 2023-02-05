import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Graph from "@components/DashBoard/Graph";
import Input from "@components/DashBoard/Input";
import PropTypes from "prop-types";
import { getValue } from "../../redux/ValueSlice";

function Chart({ selectedYear, setSelectedYear }) {
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
  const handleChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="h-full bg-[#262837] rounded-2xl p-2 flex flex-col gap-6">
      <select
        name=""
        id=""
        onChange={handleChange}
        className="w-[25%] rounded-xl pl-3 h-8 placeholder:text-gray-900 border-2 border-[#4AC088] text-sm ml-8 mt-5"
      >
        <option value="">Filtre par année</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <Graph selectedYear={selectedYear} />
      <Input getAllValues={getAllValues} />
    </div>
  );
}
Chart.propTypes = {
  selectedYear: PropTypes.objectOf.isRequired,
  setSelectedYear: PropTypes.objectOf.isRequired,
};
export default Chart;
