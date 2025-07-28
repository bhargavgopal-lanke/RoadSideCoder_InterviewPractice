import React, { useEffect, useState } from "react";

const PostsVirtualised = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=50"
    );
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 &&
        posts.map((x) => {
          return (
            <div className="posts-sec" key={x.id}>
              <h1>{x.title}</h1>
              <p>{x.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PostsVirtualised;
