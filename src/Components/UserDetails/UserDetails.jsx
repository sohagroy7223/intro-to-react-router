import React from "react";
import { Link } from "react-router";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const data = useLoaderData();
  const { website, company, username } = data;
  const navigate = useNavigate();
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
      <button onClick={() => navigate(-1)}>return page</button>
      {/* <Link to={"/users"}>back</Link> */}
    </div>
  );
};

export default UserDetails;
