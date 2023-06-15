import type { User } from "../../entities/user";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>
        Website: <a href={`http://${user.website}`}>{user.website}</a>
      </div>
    </div>
  );
};
