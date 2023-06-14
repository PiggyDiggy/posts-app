import type { Post as PostType } from "../../entities/post";

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  return (
    <li>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </li>
  );
};
