import type { Comment } from "../../entities/comment";

type Props = {
  comment: Comment;
};

export const PostComment = ({ comment }: Props) => {
  return (
    <li>
      <div>{comment.email}</div>
      <div>{comment.body}</div>
    </li>
  );
};
