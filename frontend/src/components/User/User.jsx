import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/userSlice";

function User() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.user.users);
  const getAllUser = () => {
    const url = "http://localhost:8000/api/users/user/13";
    axios.get(url).then((response) => {
      dispatch(getUser(response.data));
    });
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div>
      <h1>{allUser.firstname}</h1>
      <Link to="/bla">bla</Link>
    </div>
  );
}

export default User;
