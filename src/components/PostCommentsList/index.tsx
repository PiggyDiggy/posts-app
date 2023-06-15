import ListGroup from "react-bootstrap/ListGroup";

import type { Comment } from "../../entities/comment";
import { PostComment } from "../PostComment";

type Props = {
  status: "LOADING" | "SUCCESS" | "FAIL";
  comments: Comment[];
};

export const PostComments = ({ comments, status }: Props) => {
  return (
    <div>
      {status === "LOADING" ? (
        "Loading..."
      ) : (
        <ListGroup variant="flush" className="px-2">
          {comments.map((comment) => (
            <ListGroup.Item key={comment.id}>
              <PostComment comment={comment} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};
