import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { changePage, searchPosts, sortPosts } from "../../redux/actions/posts";
import type { State } from "../../redux/reducers";
import { Search } from "../../components/Search";
import { PostsList } from "../../components/PostsList";
import { SortIcon } from "../../components/Icons/SortIcon";
import { PostsListSkeleton } from "../../components/PostsList/skeleton";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const { error, list, status, page, perPage, search, sort } = useSelector((state: State) => state.posts);

  const posts = list.filter((post) => post.title.includes(search.toLowerCase()));

  if (sort === "asc") {
    posts.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sort === "dsc") {
    posts.sort((a, b) => b.title.localeCompare(a.title));
  }

  const setPage = (newPage: number) => {
    dispatch(changePage(newPage));
  };

  const onSearch = (value: string) => {
    dispatch(searchPosts(value));
  };

  const onSortButtonClick = () => {
    const order = sort === "asc" ? "dsc" : sort === "dsc" ? "none" : "asc";
    dispatch(sortPosts(order));
  };

  return (
    <section>
      <div className="d-flex justify-content-between">
        <h2>Posts</h2>
        <Stack direction="horizontal" gap={2}>
          <Search disabled={status !== "SUCCESS"} placeholder="Search Posts" value={search} onChange={onSearch} />
          <Button
            onClick={onSortButtonClick}
            variant={sort === "asc" || sort === "dsc" ? "primary" : "light"}
            disabled={status !== "SUCCESS"}
            title="Sort by post title"
          >
            <SortIcon reversed={sort === "asc"} />
          </Button>
        </Stack>
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
