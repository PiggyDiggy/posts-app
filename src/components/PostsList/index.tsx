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
        <ul>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
