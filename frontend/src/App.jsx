import "./Tailwind.css";
import LoginPage from "@components/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import UserSignUp from "@components/login/UserSignUp";
import Login from "@components/login/Login";
import { useState } from "react";

function App() {
  const [welcomeMessageLogin, setWelcomeMessageLogin] = useState("");
  const [color, setColor] = useState("");
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setWelcomeMessageLogin={setWelcomeMessageLogin}
              setColor={setColor}
              color={color}
            />
          }
        >
          <Route
            path=""
            element={
              <Login welcomeMessageLogin={welcomeMessageLogin} color={color} />
            }
          />
          <Route
            path="signup"
            element={
              <UserSignUp
                welcomeMessageLogin={welcomeMessageLogin}
                color={color}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
