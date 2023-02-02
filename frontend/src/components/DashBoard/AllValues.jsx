import React from "react";
import { useSelector } from "react-redux";
import AllValuesItem from "@components/DashBoard/AllValuesItem";

function AllValues() {
  const allValue = useSelector((state) => state.value.values);
  return (
    <div className="w-full h-full rounded-2xl bg-[#262837] flex flex-col gap-3 py-4 text-white relative p-2">
      <p className="text-center">Mes derniers contrôles</p>
      <div className="flex flex-col gap-6 overflow-y-scroll mt-3 ml-2">
        {allValue.map((value) => (
          <AllValuesItem value={value} key={value.id} />
        ))}
      </div>
    </div>
  );
}

export default AllValues;
