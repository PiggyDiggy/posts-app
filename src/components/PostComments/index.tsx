import type { Comment } from "../../entities/comment";
import { PostComment } from "../PostComment";

type Props = {
  comments: Comment[];
};

export const PostComments = ({ comments }: Props) => {
  if (!comments) {
    return null;
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <PostComment comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  );
};
