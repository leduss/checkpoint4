import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getDoctor } from "../../redux/doctorSlice";

function Doctor() {
  const dispatch = useDispatch();
  const getOneDoctor = useSelector((state) => state.doctor.doctors);

  const oneDoctor = () => {
    axios.get("http://localhost:8000/api/doctors/13").then((response) => {
      dispatch(getDoctor(response.data));
    });
  };
  useEffect(() => {
    oneDoctor();
  }, []);
  return (
    <div className="w-full h-full bg-yellow-400 rounded-2xl bg-[#262837] flex flex-col gap-3 items-center justify-center py-4 text-white">
      <h4 className="text-2xl text-center underline">Mon docteur</h4>
      <p className="text-md">Docteur {getOneDoctor.namedoctor}</p>
      <p className="text-md">Adresse: {getOneDoctor.adressedoctor}</p>
      <p className="text-md">Ville: {getOneDoctor.villedoctor}</p>
      <p className="text-md">Téléphone: {getOneDoctor.teldoctor}</p>
    </div>
  );
}

export default Doctor;
