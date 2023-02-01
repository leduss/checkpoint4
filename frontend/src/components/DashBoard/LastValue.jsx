import React from "react";
import { useSelector } from "react-redux";

function LastValue() {
  const allValue = useSelector((state) => state.value.values);
  let lastValue;
  if (allValue.length > 0) {
    lastValue = allValue[allValue.length - 1];
  } else {
    lastValue = { date: "2021-09-01T00:00:00.000Z", valeur: 0 };
  }
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="w-full h-full bg-yellow-400 rounded-2xl bg-[#262837] flex flex-col gap-6 items-center justify-center py-4 text-white">
      <h4 className="text-2xl text-center underline">
        Ma dernière
        <br />
        prise de sang
      </h4>
      <p className="text-md">
        Le {new Date(lastValue.date).toLocaleDateString("fr-Fr", option)}
      </p>
      <p className="text-4xl text-[#4AC088] font-black">{lastValue.valeur}</p>
    </div>
  );
}

export default LastValue;
