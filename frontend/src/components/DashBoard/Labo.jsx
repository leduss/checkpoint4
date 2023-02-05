import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { MdOutlineEdit, MdOutlineCheck } from "react-icons/all";
import { getLabo, editlabo } from "../../redux/laboSlice";

function Labo() {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const getOneLabo = useSelector((state) => state.labo.labos);
  const nameLaboRef = useRef();
  const adresseLaboRef = useRef();
  const villeLaboRef = useRef();
  const phoneLaboRef = useRef();
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
      namelabo: nameLaboRef.current.value,
      adresselabo: adresseLaboRef.current.value,
      villelabo: villeLaboRef.current.value,
      tellabo: phoneLaboRef.current.value,
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
            ref={nameLaboRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneLabo.adresselabo}
            ref={adresseLaboRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneLabo.villelabo}
            ref={villeLaboRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneLabo.tellabo}
            ref={phoneLaboRef}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-md">
            {nameLaboRef.current
              ? nameLaboRef.current.value
              : getOneLabo.namelabo}
          </p>
          <p className="text-md">
            Adresse:{" "}
            {adresseLaboRef.current
              ? adresseLaboRef.current.value
              : getOneLabo.adresselabo}
          </p>
          <p className="text-md">
            Ville:{" "}
            {villeLaboRef.current
              ? villeLaboRef.current.value
              : getOneLabo.villelabo}
          </p>
          <p className="text-md">
            Téléphone:{" "}
            {phoneLaboRef.current
              ? phoneLaboRef.current.value
              : getOneLabo.tellabo}
          </p>
        </div>
      )}
    </div>
  );
}

export default Labo;
