import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Placeholder from "react-bootstrap/Placeholder";

import { TextSkeleton } from "../TextSkeleton";
import UserPlaceholder from "../../assets/user-placeholder.png";

export const PostSkeleton = () => {
  return (
    <div>
      <Stack gap={2}>
        <Stack direction="horizontal" gap={3}>
          <div>
            <Image width={40} height={40} src={UserPlaceholder} alt="Author" title="Author" />
          </div>
          <TextSkeleton animation="wave" size="lg" maxLines={2} />
        </Stack>
        <TextSkeleton animation="wave" bg="secondary" maxLines={3} />
      </Stack>
      <Placeholder.Button style={{ width: 128 }} className="mt-2" size="sm" />
    </div>
  );
};
