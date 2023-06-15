import { useSelector } from "react-redux";

import type { State } from "../../redux/reducers";
import { PostsList } from "../../components/PostsList";
import { PostsListSkeleton } from "../../components/PostsList/skeleton";

export const PostsPage = () => {
  const { error, list, status } = useSelector((state: State) => state.posts);

  return (
    <section>
      <h2>Posts</h2>
      {status === "LOADING" ? (
        <PostsListSkeleton maxPosts={10} minPosts={2} />
      ) : (
        <PostsList posts={list} error={error} />
      )}
    </section>
  );
};
