import React from "react";
import { useLoaderData } from "react-router";
import SinglePost from "../singlePost/SinglePost";

const Posts = () => {
  const posts = useLoaderData();
  //   console.log(posts);

  return (
    <div>
      <p>
        all posts is here{" "}
        <b>
          <i>{posts.length}</i>
        </b>
      </p>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post}></SinglePost>
      ))}
    </div>
  );
};

export default Posts;
