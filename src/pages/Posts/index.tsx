import { useSelector, useDispatch } from "react-redux";

import { changePage, searchPosts } from "../../redux/actions/posts";
import type { State } from "../../redux/reducers";
import { Search } from "../../components/Search";
import { PostsList } from "../../components/PostsList";
import { PostsListSkeleton } from "../../components/PostsList/skeleton";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const { error, list, status, page, perPage, search } = useSelector((state: State) => state.posts);

  const posts = list.filter((post) => post.title.includes(search.toLowerCase()));

  const setPage = (newPage: number) => {
    dispatch(changePage(newPage));
  };

  const onSearch = (value: string) => {
    dispatch(searchPosts(value));
  };

  return (
    <section>
      <div className="d-flex justify-content-between">
        <h2>Posts</h2>
        <Search placeholder="Search Posts" value={search} onChange={onSearch} />
      </div>
      {status === "LOADING" ? (
        <PostsListSkeleton maxPosts={10} minPosts={2} />
      ) : (
        <div>
          <PostsList
            withPagination={true}
            page={page}
            perPage={perPage}
            onPageChange={setPage}
            posts={posts}
            error={error}
          />
        </div>
      )}
    </section>
  );
};
