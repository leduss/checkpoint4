import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function LoginPage({ setWelcomeMessageLogin, setColor, color }) {
  const location = useLocation();
  const changeColor = () => {
    switch (location.pathname) {
      case "/":
        setColor("bg-gradient-to-r from-green-500 to-blue-500");
        setWelcomeMessageLogin("Connectez-vous");
        break;
      case "/signup":
        setColor("bg-gradient-to-r from-red-500 to-yellow-400");
        setWelcomeMessageLogin("Créez votre compte");
        break;
      default:
        setColor("");
    }
  };
  useEffect(() => {
    changeColor();
  }, [location.pathname]);
  return (
    <div className="w-screen h-screen flex bg-white">
      <div className="w-5/12 h-screen bg-white flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div
        className={`w-8/12 rounded-l-3xl h-full z-50 flex justify-center items-center ${color} relative`}
      >
        <div className="bg-white/10 backdrop-blur w-2/4 h-2/4 rounded-3xl flex justify-center items-center">
          <p className="flex items-center m-auto font-black opacity-100 text-6xl">
            Bienvenue
          </p>
        </div>
        <div
          className={`w-20 h-20 ${color} absolute right-56 top-56 -z-10 rounded-full `}
        />
        <div
          className={`w-20 h-20 ${color} absolute left-56 bottom-56 -z-10 rounded-full`}
        />
      </div>
    </div>
  );
}
LoginPage.propTypes = {
  setWelcomeMessageLogin: PropTypes.objectOf.isRequired,
  setColor: PropTypes.objectOf.isRequired,
  color: PropTypes.objectOf.isRequired,
};
export default LoginPage;
