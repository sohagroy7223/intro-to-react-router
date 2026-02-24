import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();

  const navigate = useNavigate();

  return (
    <div style={{ border: "2px solid yellow", height: "200px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};

export default PostDetails;
