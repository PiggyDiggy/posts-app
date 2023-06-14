import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import type { State as PageState } from "../../redux/reducers/posts";
import { loadPosts } from "../../redux/actions";
import { Post } from "../Post";

type State = { page: PageState };

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: State) => state.page.posts);
  const error = useSelector((state: State) => state.page.error);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
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
