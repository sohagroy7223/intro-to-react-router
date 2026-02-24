import React from "react";
import { Link } from "react-router";

const SinglePost = ({ post }) => {
  const { id, title } = post;
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "8px" }}>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>Show details</Link>
    </div>
  );
};

export default SinglePost;
