export const fetchPosts = async ({ setPosts }) => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=50"
    );
    const data = await res.json();
    setPosts(data);
  } catch (err) {
    console.log(err);
  }
};
