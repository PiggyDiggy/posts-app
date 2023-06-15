import { useSelector } from "react-redux";

import type { State } from "../../redux/reducers";
import { PostsList } from "../../components/PostsList";

export const PostsPage = () => {
  const posts = useSelector((state: State) => state.posts.list);
  const error = useSelector((state: State) => state.posts.error);

  return (
    <section>
      <h2>Posts</h2>
      <PostsList posts={posts} error={error} />
    </section>
  );
};
