import React from "react";

const User = ({ user }) => {
  const { name, email, phone } = user;

  const userStyle = {
    border: "2px solid blue",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default User;
