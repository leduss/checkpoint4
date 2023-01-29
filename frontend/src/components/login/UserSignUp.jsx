import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import dataInput from "@components/login/dataInput";
import Button from "@components/Button";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function UserSignUp({ welcomeMessageLogin, color }) {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
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
    if (data.passwordConfirm && data.password !== data.passwordConfirm) {
      setError("Les mots de passes ne correspondent pas.");
    } else {
      setError("");
    }
  }, [data]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (error === "") {
      axios
        .post(
          "http://localhost:8000/api/users/new",
          {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 201) {
            toast("Votre compte a bien été créé !", {
              type: "success",
              position: "top-left",
              autoClose: 3000,
              theme: "colored",
              transition: Slide,
              style: {
                fontSize: "1.2em",
                textAlign: "center",
                width: "30vw",
              },
            });
            setData({
              email: "",
              password: "",
              passwordConfirm: "",
              firstname: "",
              lastname: "",
            });
          }
        })
        .catch(() =>
          toast("Une erreur est survenue, veuillez réessayer.", {
            type: "error",
            position: "top-left",
            autoClose: 3000,
            theme: "colored",
            transition: Slide,
            style: {
              fontSize: "1.2em",
              textAlign: "center",
              width: "30vw",
            },
          })
        );
    } else {
      toast("Vos mots de passe ne correspondent pas", {
        type: "warning",
        position: "top-left",
        autoClose: 3000,
        theme: "colored",
        transition: Slide,
        style: {
          fontSize: "1.2em",
          textAlign: "center",
          color: "black",
          width: "30vw",
        },
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/3 h-4/6 flex flex-col justify-center m-auto relative gap-5"
    >
      <ToastContainer />
      <h1 className="text-3xl text-fontFamily-rubik font-black">
        {welcomeMessageLogin}
      </h1>
      {dataInput.map((input) => (
        <div className={input.classNameDiv} key={input.id}>
          <label className="" htmlFor={input.id}>
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
      <div className="w-full flex flex-col gap-1">
        <label className="" htmlFor="password">
          Mot de passe:
        </label>
        <div className="relative w-full">
          <input
            className={`appearance-none border-2 ${
              data.passwordConfirm && !error && "border-green-500 border-2"
            } ${
              error && "border-red-500 border-2"
            } rounded-md h-10 pl-3 outline-none border-2 border-black w-full leading-tight focus:outline-none focus:shadow-outline ${
              data.passwordConfirm &&
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
      <div className="w-full flex flex-col gap-1">
        <label className="" htmlFor="password-confirm">
          Confirmez votre mot de passe:
        </label>
        <div className="relative w-full h-16">
          <input
            className={`appearance-none border-2 ${
              data.passwordConfirm && !error && "border-green-500 border-2"
            } ${
              error && "border-red-500 border-2"
            } rounded-md h-10 pl-3 outline-none border-2 border-black w-full leading-tight focus:outline-none focus:shadow-outline ${
              data.passwordConfirm &&
              !error &&
              "focus:border-green-500 focus:border-2"
            } ${error && "focus:border-red-500 focus:border-2"}`}
            type={showConfirmPassword ? "text" : "password"}
            id="password-confirm"
            name="passwordConfirm"
            value={data.passwordConfirm}
            onChange={handleChange}
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
        className={`m-auto w-3/4 ${color} shadow-md shadow-gray-400 text-white text-lg font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-gray-400 hover:shadow-md active:scale-100 active:shadow-md active:shadow-gray-400`}
        label={welcomeMessageLogin}
        type="submit"
      />
      <p className="flex justify-center text-lg">
        Vous avez déjà un compte ? &nbsp;
        <Link to="/">
          <span className="hover:underline font-black">S’identifier</span>
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
