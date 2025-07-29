import { useEffect, useState } from "react";
import "./App.css";
import PostsVirtualised from "./Components/PostsVirtualised";
import { fetchPosts } from "./utils/PostsApi";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts({setPosts});
  }, []);

  return (
    <div className="App">
      <PostsVirtualised posts={posts} />
    </div>
  );
}

export default App;
