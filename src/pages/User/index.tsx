import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";

import { IconBack } from "../../components/IconBack";
import type { State } from "../../redux/reducers";
import { UserCard } from "../../components/UserCard";
import { UserCardSkeleton } from "../../components/UserCard/skeleton";
import { PostsList } from "../../components/PostsList";
import { PostsListSkeleton } from "../../components/PostsList/skeleton";

export const UserPage = () => {
  const { userId } = useParams();
  const { error, status = "LOADING", info: user } = useSelector((state: State) => state.user);

  let content;

  if (isNaN(Number(userId))) {
    content = <div className="mt-2">User id is not valid</div>;
  } else if (status === "FAIL") {
    content = <div className="mt-2">{error}</div>;
  } else if (status === "LOADING") {
    content = (
      <section>
        <UserCardSkeleton />
        <h4>User Posts</h4>
        <PostsListSkeleton maxPosts={5} />
      </section>
    );
  } else {
    content = (
      <section>
        <UserCard user={user} />
        <h4>User Posts</h4>
        <PostsList withPagination={false} posts={user.posts} />
      </section>
    );
  }

  useEffect(() => {
    // @ts-ignore
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div>
      <Link className="text-muted fw-semibold text-decoration-none" to="/">
        <Stack direction="horizontal" gap={1}>
          <IconBack />
          <span>Back</span>
        </Stack>
      </Link>
      {content}
    </div>
  );
};
