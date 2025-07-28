import { useEffect, useState } from "react";
import "./App.css";
import PostsVirtualised from "./Components/PostsVirtualised";

function App() {
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
    <div className="App">
      <PostsVirtualised posts={posts} />
    </div>
  );
}

export default App;
