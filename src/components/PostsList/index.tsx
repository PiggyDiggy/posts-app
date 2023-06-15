import ListGroup from "react-bootstrap/ListGroup";

import type { Post as PostType } from "../../entities/post";
import { Post } from "../Post";

type Props = {
  posts: PostType[];
  error?: string;
};

export const PostsList = ({ posts, error }: Props) => {
  return (
    <div>
      {error || (
        <ListGroup className="my-2">
          {posts.map((post) => (
            <ListGroup.Item key={post.id}>
              <Post post={post} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};
