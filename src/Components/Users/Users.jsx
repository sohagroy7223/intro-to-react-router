import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";
import "./users.css";
const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <p>all users is here {users.length}</p>
      <div className="user-container">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
