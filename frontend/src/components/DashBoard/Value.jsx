import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { MdOutlineEdit } from "react-icons/all";
import { editValue } from "../../redux/IdealValueSlice";

function Value() {
  const [edit, setEdit] = useState(true);
  const minRef = useRef();
  const maxRef = useRef();
  const dispatch = useDispatch();
  const getOneValue = useSelector((state) => state.idealValue.idealValues);
  const handleSubmit = () => {
    setEdit(!edit);
    const data = {
      min: minRef.current.value,
      max: maxRef.current.value,
    };
    axios
      .put(`http://localhost:8000/api/values/ideal/${getOneValue.id}`, data)
      .then(() => {
        dispatch(editValue([data, getOneValue.id]));
      });
  };
  useEffect(() => {
    if (getOneValue.min === "" && getOneValue.max === "") {
      setEdit(false);
    }
  }, [getOneValue]);
  const handleClick = () => {
    setEdit(!edit);
  };
  return (
    <div className="w-full h-full bg-yellow-400 rounded-2xl bg-[#262837] flex flex-col gap-6 p-4 text-white">
      <h4 className="text-xl text-center underline">
        Mes valeurs idéales doivent être situées entre:{" "}
      </h4>
      {edit ? (
        <div className="w-full flex flex-col items-center gap-5">
          <button
            type="button"
            className="text-[#4AC088] text-2xl"
            onClick={handleClick}
          >
            <MdOutlineEdit />
          </button>
          <p>
            {minRef.current ? minRef.current.value : getOneValue.min} et{" "}
            {maxRef.current ? maxRef.current.value : getOneValue.max}
          </p>
        </div>
      ) : (
        <form className="flex flex-col w-full items-center gap-2 text-gray-900">
          <input
            type="text"
            className="w-[60%] rounded-xl pl-3 h-8 placeholder:text-gray-900 border-2 border-[#4AC088] text-sm focus:outline-none"
            ref={minRef}
            defaultValue={getOneValue.min || "min"}
          />
          <input
            type="text"
            className="w-[60%] rounded-xl pl-3 h-8 placeholder:text-gray-900 border-2 border-[#4AC088] text-sm focus:outline-none"
            ref={maxRef}
            defaultValue={getOneValue.max || "max"}
          />
          <input
            type="submit"
            value="Envoyer"
            className="w-[40%] cursor-pointer bg-white h-8 px-3 rounded-xl border-2 border-[#4AC088] text-sm text-gray-900"
            onClick={() => handleSubmit()}
          />
        </form>
      )}
    </div>
  );
}

export default Value;
