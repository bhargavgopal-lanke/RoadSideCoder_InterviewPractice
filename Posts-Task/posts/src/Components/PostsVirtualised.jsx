import { FixedSizeList } from "react-window";
import PostCard from "./PostCard";

const PostsVirtualised = ({ posts }) => {
  const Post = ({ index, style }) => (
    <div style={style}>
      <PostCard key={posts[index].id} post={posts[index]} />
    </div>
  );
  return (
    <div>
      <FixedSizeList
        height={window.innerHeight}
        itemCount={posts.length}
        itemSize={190}
        width="100%"
        className="scroll-container"
      >
        {Post}
      </FixedSizeList>
    </div>
  );
};

export default PostsVirtualised;
