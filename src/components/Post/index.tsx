import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import UserPlaceholder from "../../assets/user-placeholder.png";
import type { Post as PostType } from "../../entities/post";
import type { State } from "../../redux/reducers";
import { loadComments } from "../../redux/actions/comments";
import { PostComments } from "../PostCommentsList";

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  const [commentsOpened, setCommentsOpened] = useState(false);
  const postComments = useSelector((state: State) => state.comments[post.id]);
  const dispatch = useDispatch();

  const toggleCommentsOpen = () => {
    if (postComments === undefined) {
      dispatch(loadComments(post.id));
    }
    setCommentsOpened((current) => !current);
  };

  return (
    <div>
      <Stack gap={2}>
        <Stack direction="horizontal" gap={3}>
          <Link to={`/user/${post.userId}`}>
            <Image width={40} height={40} src={UserPlaceholder} alt="Author" title="Author" />
          </Link>
          <div className="fw-semibold fs-5 text-break">{post.title}</div>
        </Stack>
        <div>{post.body}</div>
      </Stack>
      <Button className="mt-2" size="sm" onClick={toggleCommentsOpen}>
        {commentsOpened ? "Hide Comments" : "Show Comments"}
      </Button>
      {commentsOpened && <PostComments comments={postComments.comments} status={postComments.status} />}
    </div>
  );
};
