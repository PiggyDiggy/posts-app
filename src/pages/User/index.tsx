import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import BackIcon from "../../assets/corner-up-left.svg";
import type { State } from "../../redux/reducers";
import { UserCard } from "../../components/UserCard";
import { PostsList } from "../../components/PostsList";

export const UserPage = () => {
  const { userId } = useParams();
  const { error, status = "LOADING", info: user } = useSelector((state: State) => state.user);

  let content;

  if (isNaN(Number(userId))) {
    content = <div className="mt-2">User id is not valid</div>;
  } else if (status === "LOADING") {
    content = <div className="mt-2">Loading...</div>;
  } else if (status === "FAIL") {
    content = error;
  } else {
    content = (
      <section>
        <UserCard user={user} />
        <h4>User Posts</h4>
        <PostsList posts={user.posts} />
      </section>
    );
  }

  return (
    <div>
      <Link className="text-muted fw-semibold text-decoration-none" to="/">
        <Stack direction="horizontal" gap={1}>
          <Image width={24} src={BackIcon} alt="Back" />
          <span>Back</span>
        </Stack>
      </Link>
      {content}
    </div>
  );
};
