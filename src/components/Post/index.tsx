import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import type { Post as PostType } from "../../entities/post";
import type { State as CommentsState } from "../../redux/reducers/comments";
import { loadComments } from "../../redux/actions/comments";
import { PostComments } from "../PostComments";

type Props = {
  post: PostType;
};

type State = { comments: CommentsState };

export const Post = ({ post }: Props) => {
  const [commentsOpened, setCommentsOpened] = useState(false);
  const comments = useSelector((state: State) => state.comments?.[post.id]?.comments);
  const dispatch = useDispatch();

  const toggleCommentsOpen = () => {
    if (comments === undefined) {
      dispatch(loadComments(post.id));
    }
    setCommentsOpened((current) => !current);
  };

  return (
    <li>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <button onClick={toggleCommentsOpen}>{commentsOpened ? "Hide Comments" : "Load Comments"}</button>
      {commentsOpened && <PostComments comments={comments} />}
    </li>
  );
};
