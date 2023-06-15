import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import type { State } from "../../redux/reducers";
import { UserCard } from "../../components/UserCard";
import { PostsList } from "../../components/PostsList";

export const UserPage = () => {
  const { userId } = useParams();
  const { error, status = "LOADING", info: user } = useSelector((state: State) => state.user);

  if (isNaN(Number(userId))) {
    return <div>User id is not valid</div>;
  }

  return (
    <div>
      {status === "LOADING" ? (
        "Loading..."
      ) : (
        <div>
          <div>
            <Link to="/">Back</Link>
          </div>
          {status === "FAIL" ? error : <UserCard user={user} />}
          <PostsList posts={user.posts} />
        </div>
      )}
    </div>
  );
};
