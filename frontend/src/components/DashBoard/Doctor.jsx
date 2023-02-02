import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { MdOutlineEdit, MdOutlineCheck } from "react-icons/all";
import { getDoctor, editDoctor } from "../../redux/doctorSlice";

function Doctor() {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const getOneDoctor = useSelector((state) => state.doctor.doctors);
  const nameLaboRef = useRef();
  const adresseLaboRef = useRef();
  const villeLaboRef = useRef();
  const phoneLaboRef = useRef();
  const oneDoctor = () => {
    axios.get("http://localhost:8000/api/doctors/13").then((response) => {
      dispatch(getDoctor(response.data));
    });
  };
  useEffect(() => {
    oneDoctor();
  }, []);
  const handleSubmit = () => {
    setEdit(false);

    const data = {
      namedoctor: nameLaboRef.current.value,
      adressedoctor: adresseLaboRef.current.value,
      villedoctor: villeLaboRef.current.value,
      teldoctor: phoneLaboRef.current.value,
    };
    axios
      .put(`http://localhost:8000/api/doctors/${getOneDoctor.id}`, data)
      .then(() => {
        dispatch(editDoctor([data, getOneDoctor.id]));
      });
  };
  const handleClick = () => {
    setEdit(!edit);
  };
  return (
    <div className="w-full h-full bg-yellow-400 rounded-2xl bg-[#262837] flex flex-col gap-3 py-4 text-white relative p-2">
      <h4 className="text-xl text-center underline">Mon docteur</h4>
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
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.namedoctor || "Nom de votre docteur"}
            ref={nameLaboRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.adressedoctor || "Son adresse"}
            ref={adresseLaboRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.villedoctor || "Sa ville"}
            ref={villeLaboRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.teldoctor || "Son numéro de téléphone"}
            ref={phoneLaboRef}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-md">
            Dr{" "}
            {nameLaboRef.current
              ? nameLaboRef.current.value
              : getOneDoctor.namedoctor}
          </p>
          <p className="text-md">
            Adresse:{" "}
            {adresseLaboRef.current
              ? adresseLaboRef.current.value
              : getOneDoctor.adressedoctor}
          </p>
          <p className="text-md">
            Ville:{" "}
            {villeLaboRef.current
              ? villeLaboRef.current.value
              : getOneDoctor.villedoctor}
          </p>
          <p className="text-md">
            Téléphone:{" "}
            {phoneLaboRef.current
              ? phoneLaboRef.current.value
              : getOneDoctor.teldoctor}
          </p>
        </div>
      )}
    </div>
  );
}

export default Doctor;
