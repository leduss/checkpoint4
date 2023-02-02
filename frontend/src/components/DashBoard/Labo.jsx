import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { MdOutlineEdit, MdOutlineCheck } from "react-icons/all";
import { getLabo, editlabo } from "../../redux/laboSlice";

function Labo() {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const getOneLabo = useSelector((state) => state.labo.labos);
  const nameRef = useRef();
  const adresseRef = useRef();
  const villeRef = useRef();
  const phoneRef = useRef();
  const oneLabo = () => {
    axios.get("http://localhost:8000/api/labos/13").then((response) => {
      dispatch(getLabo(response.data));
    });
  };
  useEffect(() => {
    oneLabo();
  }, []);
  const handleSubmit = () => {
    setEdit(false);

    const data = {
      namelabo: nameRef.current.value,
      adresselabo: adresseRef.current.value,
      villelabo: villeRef.current.value,
      tellabo: phoneRef.current.value,
    };
    axios
      .put(`http://localhost:8000/api/labos/${getOneLabo.id}`, data)
      .then(() => {
        dispatch(editlabo([data, getOneLabo.id]));
      });
  };
  const handleClick = () => {
    setEdit(!edit);
  };
  return (
    <div className="w-full h-full bg-yellow-400 rounded-2xl bg-[#262837] flex flex-col gap-3 py-4 text-white relative p-2">
      <h4 className="text-xl text-center underline">Mon labo</h4>
      {edit ? (
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="text-[#4AC088] text-2xl absolute right-2 top-2"
        >
          <MdOutlineCheck />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="text-[#4AC088] text-2xl absolute right-2 top-2"
        >
          <MdOutlineEdit />
        </button>
      )}
      {edit ? (
        <div className="flex flex-col items-center gap-2 w-full text-gray-900">
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg px-3"
            defaultValue={getOneLabo.namelabo}
            ref={nameRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneLabo.adresselabo}
            ref={adresseRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneLabo.villelabo}
            ref={villeRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneLabo.tellabo}
            ref={phoneRef}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-md">
            {nameRef.current ? nameRef.current.value : getOneLabo.namelabo}
          </p>
          <p className="text-md">
            Adresse:{" "}
            {adresseRef.current
              ? adresseRef.current.value
              : getOneLabo.adresselabo}
          </p>
          <p className="text-md">
            Ville:{" "}
            {villeRef.current ? villeRef.current.value : getOneLabo.villelabo}
          </p>
          <p className="text-md">
            Téléphone:{" "}
            {phoneRef.current ? phoneRef.current.value : getOneLabo.tellabo}
          </p>
        </div>
      )}
    </div>
  );
}

export default Labo;
