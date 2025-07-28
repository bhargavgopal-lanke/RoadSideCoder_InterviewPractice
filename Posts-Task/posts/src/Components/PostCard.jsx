import React from "react";

const PostCard = ({ key, post }) => {
  return (
    <div key={key}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
