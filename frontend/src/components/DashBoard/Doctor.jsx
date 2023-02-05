import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { MdOutlineEdit, MdOutlineCheck } from "react-icons/all";
import { editDoctor, getDoctor } from "../../redux/doctorSlice";

function Doctor() {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const getOneDoctor = useSelector((state) => state.doctor.doctors);
  const nameRef = useRef();
  const adresseRef = useRef();
  const villeRef = useRef();
  const phoneRef = useRef();
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
      namedoctor: nameRef.current.value,
      adressedoctor: adresseRef.current.value,
      villedoctor: villeRef.current.value,
      teldoctor: phoneRef.current.value,
    };
    axios
      .put(`http://localhost:8000/api/doctors/${getOneDoctor.id}`, data)
      .then(() => {
        dispatch(editDoctor([data, getOneDoctor.id]));
        oneDoctor();
        nameRef.current.value = "";
        adresseRef.current.value = "";
        villeRef.current.value = "";
        phoneRef.current.value = "";
      });
  };
  const handleClick = () => {
    setEdit(!edit);
  };
  return (
    <div className="w-full h-full bg-yellow-400 rounded-2xl bg-[#262837] flex flex-col gap-3 py-4 text-white relative p-2">
      <h4 className="text-xl text-center underline">Mon docteur</h4>
      {edit ? null : (
        <button
          type="button"
          onClick={handleClick}
          className="text-[#4AC088] text-2xl absolute right-2 top-2"
        >
          <MdOutlineEdit />
        </button>
      )}
      {edit ? (
        <form className="flex flex-col items-center gap-2 w-full text-gray-900">
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.namedoctor}
            ref={nameRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.adressedoctor || "Son adresse"}
            ref={adresseRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.villedoctor || "Sa ville"}
            ref={villeRef}
          />
          <input
            type="text"
            className="w-[80%] h-6 rounded-lg pl-3"
            defaultValue={getOneDoctor.teldoctor || "Son numéro de téléphone"}
            ref={phoneRef}
          />
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="text-[#4AC088] text-2xl absolute right-2 top-2"
          >
            <MdOutlineCheck />
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-md">
            Dr{" "}
            {nameRef.current ? nameRef.current.value : getOneDoctor.namedoctor}
          </p>
          <p className="text-md">
            Adresse:{" "}
            {adresseRef.current
              ? adresseRef.current.value
              : getOneDoctor.adressedoctor}
          </p>
          <p className="text-md">
            Ville:{" "}
            {villeRef.current
              ? villeRef.current.value
              : getOneDoctor.villedoctor}
          </p>
          <p className="text-md">
            Téléphone:{" "}
            {phoneRef.current ? phoneRef.current.value : getOneDoctor.teldoctor}
          </p>
        </div>
      )}
    </div>
  );
}

export default Doctor;
