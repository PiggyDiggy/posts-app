import { useParams, Link } from "react-router-dom";

export const UserPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <div>UserId: {userId}</div>
      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};
