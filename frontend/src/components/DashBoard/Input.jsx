import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PropTypes } from "prop-types";
import { addValue } from "../../redux/ValueSlice";

function Input({ getAllValues }) {
  const dispatch = useDispatch();
  const valueRef = useRef();
  const dateRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      valeur: valueRef.current.value,
      date: dateRef.current.value,
      user_id: 13,
    };
    axios.post("http://localhost:8000/api/values", data).then(() => {
      dispatch(addValue(data));
      dispatch(getAllValues());
      formRef.current.reset();
    });
  };
  return (
    <div className="w-full flex flex-col items-center mt-2">
      <h1 className="text-white text-lg">Ajouter une valeur</h1>
      <div className="w-full">
        <form
          onSubmit={(e) => handleSubmit(e)}
          ref={formRef}
          className="flex gap-10 mt-2 w-full flex justify-center text-gray-900"
        >
          <input
            type="text"
            placeholder="Valeur"
            className="w-[35%] rounded-xl pl-3 h-8 placeholder:text-gray-900 border-2 border-[#4AC088] text-sm"
            ref={valueRef}
            required
          />
          <input
            type="date"
            placeholder="Date"
            className="w-[35%] rounded-xl pl-3 h-8 placeholder:text-gray-900 border-2 border-[#4AC088] text-sm"
            ref={dateRef}
            required
          />
          <input
            type="submit"
            value="Envoyer"
            className=" cursor-pointer bg-white h-8 px-3 rounded-xl border-2 border-[#4AC088] text-sm"
          />
        </form>
      </div>
    </div>
  );
}

Input.propTypes = {
  getAllValues: PropTypes.func.isRequired,
};

export default Input;
