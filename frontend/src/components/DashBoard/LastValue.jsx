import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineWarning } from "react-icons/all";

function LastValue() {
  const [warning, setWarning] = useState("");
  const [color, setColor] = useState("");
  const allValue = useSelector((state) => state.value.values);
  const idealValues = useSelector((state) => state.idealValue.idealValues);
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
  useEffect(() => {
    if (
      lastValue.valeur < idealValues.min ||
      lastValue.valeur > idealValues.max
    ) {
      setWarning(<MdOutlineWarning />);
      setColor("text-orange-400");
    } else {
      setWarning("");
      setColor("text-[#4AC088]");
    }
  }, [lastValue.valeur]);
  return (
    <div className="w-full h-full rounded-2xl bg-[#262837] flex flex-col gap-6 items-center py-4 text-white">
      <h4 className="text-xl text-center underline">
        Ma dernière
        <br />
        prise de sang
      </h4>
      <p className="text-md">
        Le {new Date(lastValue.date).toLocaleDateString("fr-Fr", option)}
      </p>
      <p className={`text-4xl ${color} font-black flex gap-3 items-center`}>
        {lastValue.valeur} <span className="text-2xl">{warning}</span>
      </p>
    </div>
  );
}

export default LastValue;
