import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { TextSkeleton } from "../TextSkeleton";

export const UserCardSkeleton = () => {
  return (
    <Card className="my-4" style={{ width: "fit-content" }}>
      <Card.Body>
        <TextSkeleton animation="glow" as={Card.Title} maxLines={1} />
        <TextSkeleton animation="glow" as={Card.Subtitle} bg="secondary" maxLines={1} />
        <ListGroup className="mb-2" variant="flush">
          <ListGroup.Item className="px-0">
            <TextSkeleton animation="glow" as={ListGroup.Item} bg="secondary" width={300} maxLines={1} />
          </ListGroup.Item>
          <ListGroup.Item className="px-0">
            <TextSkeleton animation="glow" as={ListGroup.Item} bg="secondary" maxLines={1} />
          </ListGroup.Item>
          <ListGroup.Item className="px-0">
            <TextSkeleton animation="glow" as={ListGroup.Item} bg="secondary" maxLines={1} />
          </ListGroup.Item>
        </ListGroup>
        <TextSkeleton animation="glow" as={Card.Link} bg="primary" maxLines={1} />
      </Card.Body>
    </Card>
  );
};
