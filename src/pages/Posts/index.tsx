import { useSelector } from "react-redux";

import type { State } from "../../redux/reducers";
import { PostsList } from "../../components/PostsList";

export const PostsPage = () => {
  const { error, list, status } = useSelector((state: State) => state.posts);

  return (
    <section>
      <h2>Posts</h2>
      {status === "LOADING" ? "Loading..." : <PostsList posts={list} error={error} />}
    </section>
  );
};
