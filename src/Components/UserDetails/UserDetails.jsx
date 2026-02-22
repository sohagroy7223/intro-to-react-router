import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const data = useLoaderData();
  const { website, company, username } = data;
  return (
    <div
      style={{
        border: "2px solid green ",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h3>company: {company.name}</h3>
      <h4>username: {username}</h4>
      <p>website: {website}</p>
    </div>
  );
};

export default UserDetails;
