import React from "react";
import { useLoaderData } from "react-router";
import SinglePost from "../singlePost/SinglePost";
import "./post.css";

const Posts = () => {
  const posts = useLoaderData();
  //   console.log(posts);

  return (
    <div>
      <p>all posts is here {posts.length}</p>
      <div className="post-container">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post}></SinglePost>
        ))}
      </div>
    </div>
  );
};

export default Posts;
