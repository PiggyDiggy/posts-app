import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import type { User } from "../../entities/user";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <Card className="my-4" style={{ width: "fit-content" }}>
      <Card.Body>
        <Card.Title className="fw-semibold">{user.name}</Card.Title>
        <Card.Subtitle className="text-muted mb-2">{user.username}</Card.Subtitle>
        <ListGroup className="mb-2" variant="flush">
          <ListGroup.Item className="px-0">City: {user.city}</ListGroup.Item>
          <ListGroup.Item className="px-0">Email: {user.email}</ListGroup.Item>
          <ListGroup.Item className="px-0">Phone: {user.phone}</ListGroup.Item>
        </ListGroup>
        <Card.Link href={`//${user.website}`}>{user.website}</Card.Link>
      </Card.Body>
    </Card>
  );
};
