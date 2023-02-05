import React from "react";
import { useSelector } from "react-redux";
import AllValuesItem from "@components/DashBoard/AllValuesItem";
import PropTypes from "prop-types";

function AllValues({ selectedYear }) {
  const allValue = useSelector((state) => state.value.values);
  return (
    <div className="w-full h-full rounded-2xl bg-[#262837] flex flex-col gap-3 py-4 text-white relative p-2">
      <p className="text-center">Mes derniers contrôles</p>
      <div className="flex flex-col gap-6 overflow-y-scroll mt-3 ml-2">
        {allValue
          .filter((value) => {
            const date = new Date(value.date);
            return date.getFullYear() === Number(selectedYear);
          })
          .map((value) => {
            return <AllValuesItem key={value.id} value={value} />;
          })}
      </div>
    </div>
  );
}
AllValues.propTypes = {
  selectedYear: PropTypes.objectOf.isRequired,
};
export default AllValues;
