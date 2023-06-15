import { useSelector } from "react-redux";

import type { State } from "../../redux/reducers";
import { Post } from "../Post";

export const Posts = () => {
  const posts = useSelector((state: State) => state.posts.list);
  const error = useSelector((state: State) => state.posts.error);

  return (
    <div>
      {error || (
        <ul>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
