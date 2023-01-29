import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function LoginPage({ setWelcomeMessageLogin, setColor, color }) {
  const location = useLocation();
  const changeColor = () => {
    switch (location.pathname) {
      case "/":
        setColor("bg-gradient-to-r from-green-400 to-blue-500");
        setWelcomeMessageLogin("Connectez-vous");
        break;
      case "/signup":
        setColor("bg-gradient-to-r from-pink-500 to-yellow-400");
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
      <div className={`w-8/12 rounded-l-3xl h-full z-50 ${color}`}>
        <div className="bg-white w-2/4 h-2/4 flex m-auto mt-36 rounded-3xl bg-opacity-10">
          <p className="flex items-center m-auto text-black opacity-100">fds</p>
        </div>
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
