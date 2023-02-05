import React, { useEffect, useRef, useState } from "react";
import { MdOutlineDelete, MdOutlineWarning } from "react-icons/all";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { deleteValue } from "../../redux/ValueSlice";

function AllValuesItem({ value }) {
  const [warning, setWarning] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const idealValues = useSelector((state) => state.idealValue.idealValues);
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const handleDelete = () => {
    const url = `http://localhost:8000/api/values/${value.id}`;
    axios.delete(url).then(() => {
      dispatch(deleteValue(value.id));
    });
  };
  const lastValueRef = useRef();
  const scrollingTop = () => {
    lastValueRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollingTop();
  }, [value]);
  useEffect(() => {
    if (value.valeur < idealValues.min || value.valeur > idealValues.max) {
      setWarning(<MdOutlineWarning />);
      setColor("text-orange-400");
    } else {
      setWarning("");
      setColor("text-white");
    }
  }, [value]);
  return (
    <div>
      <div className="flex justify-between">
        <p className={`text-sm w-full flex items-center gap-3 ${color}`}>
          Le {new Date(value.date).toLocaleDateString("fr-Fr", option)}, INR:{" "}
          {value.valeur} <span className="text-base">{warning}</span>
        </p>
        <button
          className="text-xl text-red-400"
          type="button"
          onClick={() => handleDelete()}
        >
          <MdOutlineDelete />
        </button>
      </div>
      <div ref={lastValueRef} />
    </div>
  );
}
AllValuesItem.propTypes = {
  value: PropTypes.objectOf.isRequired,
};

export default AllValuesItem;
