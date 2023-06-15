import ListGroup from "react-bootstrap/ListGroup";

import { getRandomNum } from "../../utils";
import { PostSkeleton } from "../Post/skeleton";

type Props = {
  maxPosts: number;
  minPosts?: number;
};

export const PostsListSkeleton = ({ maxPosts, minPosts = 1 }: Props) => {
  const posts = Array(getRandomNum(maxPosts, minPosts)).fill(0);

  return (
    <div>
      <ListGroup className="my-2">
        {posts.map((_, index) => (
          <ListGroup.Item key={index}>
            <PostSkeleton />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
