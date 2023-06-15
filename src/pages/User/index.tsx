import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import type { State } from "../../redux/reducers";
import { UserCard } from "../../components/UserCard";

export const UserPage = () => {
  const { userId } = useParams();
  const { status, error, ...user } = useSelector((state: State) => state.user);

  if (isNaN(Number(userId))) {
    return <div>User id is not valid</div>;
  }

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      {status === "FAIL" ? error : <UserCard user={user} />}
    </div>
  );
};
