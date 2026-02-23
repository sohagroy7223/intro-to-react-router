import React, { use } from "react";
import { useNavigate } from "react-router";

const Users2 = ({ usersPromise }) => {
  const data = use(usersPromise);
  // console.log(data);
  const navigate = useNavigate();
  return (
    <div>
      <p>Users 2 data is hare{data.length}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Users2;
