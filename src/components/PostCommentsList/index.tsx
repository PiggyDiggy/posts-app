import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

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
        <Spinner className="mt-2">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
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
