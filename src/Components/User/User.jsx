import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const User = ({ user }) => {
  const [showDetail, setShowDetail] = useState(false);
  const { id, name, email, phone } = user;

  const handelClick = () => {
    setShowDetail(!showDetail);
  };

  const userStyle = {
    border: "2px solid blue",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };

  // const navigate = useNavigate();

  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={handelClick}>{showDetail ? "hide" : "show"} info</button>
      {/* <button onClick={() => navigate("/users2")}>Detail of: {id}</button> */}
    </div>
  );
};

export default User;
