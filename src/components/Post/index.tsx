import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import type { Post as PostType } from "../../entities/post";
import type { State } from "../../redux/reducers";
import { loadComments } from "../../redux/actions/comments";
import { PostComments } from "../PostCommentsList";

type Props = {
  post: PostType;
};

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
      <div>
        <Link to={`user/${post.userId}`}>Author</Link>
      </div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <button onClick={toggleCommentsOpen}>{commentsOpened ? "Hide Comments" : "Load Comments"}</button>
      {commentsOpened && <PostComments comments={comments} />}
    </li>
  );
};
