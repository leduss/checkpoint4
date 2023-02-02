import "./Tailwind.css";
import LoginPage from "@components/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import UserSignUp from "@components/login/UserSignUp";
import Login from "@components/login/Login";
import { useState } from "react";
import NavBar from "@components/NavBar/NavBar";
import BigContainer from "@components/BigContainer";
import DashBoard from "@components/DashBoard/DashBoard";
import Account from "@components/Account";
import Forum from "@components/Forum";

function App() {
  const [welcomeMessageLogin, setWelcomeMessageLogin] = useState("");
  const [color, setColor] = useState("");
  return (
    <div className="text-zinc-700">
      <NavBar />
      <Routes>
        <Route
          path="/connexion"
          element={
            <LoginPage
              setWelcomeMessageLogin={setWelcomeMessageLogin}
              setColor={setColor}
              color={color}
            />
          }
        >
          <Route
            path="login"
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
        <Route path="home" element={<BigContainer />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="compte" element={<Account />} />
          <Route path="forum" element={<Forum />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
