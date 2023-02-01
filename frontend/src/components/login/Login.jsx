import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "@components/Button";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

function Login({ welcomeMessageLogin, color }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setDataLogin((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login({ dataLogin }));
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      onSubmit={handleLogin}
      className="w-2/3 h-3/6 flex flex-col justify-center m-auto relative gap-5 text-gray-900"
    >
      <h1 className="text-2xl font-black">{welcomeMessageLogin}</h1>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="rounded-md h-10 pl-3 outline-none text-sm border-2 border-gray-900 w-full bg-white placeholder:text-gray-900 placeholder:italic"
          placeholder="Votre email"
          name="email"
          onChange={handleChange}
          value={dataLogin.email}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm" htmlFor="password">
          Mot de passe:
        </label>
        <div className="relative w-full">
          <input
            className="rounded-md h-10 pl-3 outline-none text-sm border-2 border-gray-900 bg-white w-full placeholder:text-gray-900 placeholder:italic"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={dataLogin.password}
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
      <Button
        handleClick={() => navigate("/home/dashboard")}
        className={`m-auto w-3/4 ${color} shadow-md shadow-gray-400 text-white font-black py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-gray-400 hover:shadow-md active:scale-100 active:shadow-md active:shadow-gray-400`}
        label={welcomeMessageLogin}
        type="submit"
      />
      <p className="flex justify-center">
        Vous n'avez pas de compte ? &nbsp;
        <Link to="/connexion/signup">
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
