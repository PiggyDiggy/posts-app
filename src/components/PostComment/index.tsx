import type { Comment } from "../../entities/comment";

type Props = {
  comment: Comment;
};

export const PostComment = ({ comment }: Props) => {
  return (
    <div>
      <div className="fw-semibold text-break">{comment.email}</div>
      <div className="text-secondary">{`> ${comment.body}`}</div>
    </div>
  );
};
