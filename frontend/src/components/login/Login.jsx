import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "@components/Button";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Login({ welcomeMessageLogin, color }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      onSubmit=""
      className="w-2/3 h-3/6 flex flex-col justify-center m-auto relative gap-5"
    >
      <h1 className="text-3xl font-black">{welcomeMessageLogin}</h1>
      <div className="w-full flex flex-col gap-1">
        <label className="" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="rounded-md h-10 pl-3 outline-none border-2 border-black w-full"
          placeholder="Votre email"
          name="email"
          onChange=""
          value=""
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="" htmlFor="password">
          Mot de passe:
        </label>
        <div className="relative w-full">
          <input
            className="rounded-md h-10 pl-3 outline-none border-2 border-black w-full leading-tight focus:outline-none focus:shadow-outline"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value=""
            onChange=""
            placeholder="Votre mot de passe"
          />{" "}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
      </div>
      <Button
        handleClick=""
        className={`m-auto w-3/4 ${color} text-lg shadow-md shadow-gray-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-gray-400 hover:shadow-md active:scale-100 active:shadow-md active:shadow-gray-400`}
        label={welcomeMessageLogin}
        type="submit"
      />
      <p className="flex justify-center text-lg">
        Vous n'avez pas de compte ? &nbsp;
        <Link to="/signup">
          <span className="hover:underline font-black">S’inscrire</span>
        </Link>
      </p>
    </form>
  );
}
Login.propTypes = {
  welcomeMessageLogin: PropTypes.objectOf.isRequired,
  color: PropTypes.objectOf.isRequired,
};

export default Login;
