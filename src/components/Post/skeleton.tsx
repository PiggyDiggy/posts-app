import Stack from "react-bootstrap/Stack";
import Placeholder from "react-bootstrap/Placeholder";

import { TextSkeleton } from "../TextSkeleton";

export const PostSkeleton = () => {
  return (
    <div>
      <Stack gap={2}>
        <Stack direction="horizontal" gap={3}>
          <div className="flex-shrink-0 rounded-circle bg-secondary" style={{ height: 40, width: 40 }}></div>
          <TextSkeleton animation="wave" size="lg" maxLines={2} />
        </Stack>
        <TextSkeleton animation="wave" bg="secondary" maxLines={3} />
      </Stack>
      <Placeholder.Button style={{ width: 128 }} className="mt-2" size="sm" />
    </div>
  );
};
