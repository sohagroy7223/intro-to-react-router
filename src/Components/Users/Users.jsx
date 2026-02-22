import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <p>all users is here</p>
    </div>
  );
};

export default Users;
