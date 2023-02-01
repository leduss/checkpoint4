import React from "react";
import { useSelector } from "react-redux";

function UserItem() {
  const user = useSelector((state) => state.user.users);
  return (
    <div>
      <h1>{user.lastname}</h1>
    </div>
  );
}

export default UserItem;
