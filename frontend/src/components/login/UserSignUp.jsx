import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import dataInput from "@components/login/dataInput";
import Button from "@components/Button";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function UserSignUp({ welcomeMessageLogin, color }) {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleChange = (event) => {
    setData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  useEffect(() => {
    if (passwordConfirm && data.password !== passwordConfirm) {
      setError("Les mots de passes ne correspondent pas.");
    } else {
      setError("");
    }
  }, [data]);
  return (
    <form className="w-2/3 h-4/6 flex flex-col justify-center m-auto relative gap-5">
      <h1 className="text-2xl text-fontFamily-rubik font-black text-gray-900">
        {welcomeMessageLogin}
      </h1>
      {dataInput.map((input) => (
        <div className={input.classNameDiv} key={input.id}>
          <label className="text-sm" htmlFor={input.id}>
            {input.label}
          </label>
          <input
            type={input.type}
            className={input.classNameInput}
            placeholder={input.placeholder}
            name={input.name}
            onChange={handleChange}
            value={data[input.name]}
          />
        </div>
      ))}
      <div className="w-full flex flex-col gap-1 text-gray-900">
        <label className="text-sm" htmlFor="password">
          Mot de passe:
        </label>
        <div className="relative w-full">
          <input
            className={`appearance-none border-2 bg-white text-gray-900 ${
              passwordConfirm && !error && "border-green-500 border-2"
            } ${
              error && "border-red-500 border-2"
            } rounded-md h-10 pl-3 outline-none border-2 text-sm border-gray-900 placeholder:text-gray-900 placeholder:italic w-full leading-tight focus:outline-none focus:shadow-outline ${
              passwordConfirm &&
              !error &&
              "focus:border-green-500 focus:border-2"
            } ${error && "focus:border-red-500 focus:border-2"}`}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
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
      <div className="w-full flex flex-col gap-1 text-gray-900">
        <label className="text-sm" htmlFor="password-confirm">
          Confirmez votre mot de passe:
        </label>
        <div className="relative w-full h-16">
          <input
            className={`appearance-none border-2 bg-white text-gray-900 ${
              passwordConfirm && !error && "border-green-500 border-2"
            } ${
              error && "border-red-500 border-2"
            } rounded-md h-10 pl-3 outline-none border-2 text-sm border-gray-900 placeholder:text-gray-900 placeholder:italic w-full leading-tight focus:outline-none focus:shadow-outline ${
              passwordConfirm &&
              !error &&
              "focus:border-green-500 focus:border-2"
            } ${error && "focus:border-red-500 focus:border-2"}`}
            type={showConfirmPassword ? "text" : "password"}
            id="password-confirm"
            name="passwordConfirm"
            onChange={(event) => setPasswordConfirm(event.target.value)}
            value={passwordConfirm}
            placeholder="Confirmez votre mot de passe"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-2"
          >
            {showConfirmPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
          <p className="text-rose-600/75 text-sm italic absolute bottom-0 w-full">
            {error}
          </p>
        </div>
      </div>
      <Button
        handleClick=""
        className={`m-auto w-3/4 ${color} shadow-md shadow-gray-400 text-white  font-black py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-gray-400 hover:shadow-md active:scale-100 active:shadow-md active:shadow-gray-400`}
        label={welcomeMessageLogin}
        type="submit"
      />
      <p className="flex justify-center text-gray-900">
        Vous avez déjà un compte ? &nbsp;
        <Link to="/connexion/login">
          <span className="hover:underline font-black ">S’identifier</span>
        </Link>
      </p>
    </form>
  );
}
UserSignUp.propTypes = {
  welcomeMessageLogin: PropTypes.objectOf.isRequired,
  color: PropTypes.objectOf.isRequired,
};

export default UserSignUp;
