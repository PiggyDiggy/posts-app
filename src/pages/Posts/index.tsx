import { useSelector, useDispatch } from "react-redux";

import { changePage } from "../../redux/actions/posts";
import type { State } from "../../redux/reducers";
import { PostsList } from "../../components/PostsList";
import { PostsListSkeleton } from "../../components/PostsList/skeleton";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const { error, list, status, page, perPage } = useSelector((state: State) => state.posts);

  const setPage = (newPage: number) => {
    dispatch(changePage(newPage));
  };

  return (
    <section>
      <h2>Posts</h2>
      {status === "LOADING" ? (
        <PostsListSkeleton maxPosts={10} minPosts={2} />
      ) : (
        <div>
          <PostsList
            withPagination={true}
            page={page}
            perPage={perPage}
            onPageChange={setPage}
            posts={list}
            error={error}
          />
        </div>
      )}
    </section>
  );
};
