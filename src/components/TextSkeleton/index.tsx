import Placeholder from "react-bootstrap/Placeholder";
import type { PlaceholderProps } from "react-bootstrap/esm/Placeholder";

import { getRandomNum } from "../../utils";

type Props = {
  maxLines: number;
  minLines?: number;
  width?: number | string;
  animation?: "glow" | "wave";
} & PlaceholderProps;

export const TextSkeleton = ({ maxLines, minLines = 1, width, animation, ...props }: Props) => {
  const content = Array(getRandomNum(maxLines, minLines))
    .fill(0)
    .map((_, index, arr) => (
      <Placeholder
        key={index}
        style={{ width: width || `${index === arr.length - 1 ? getRandomNum(90, 50) : "100"}%` }}
        {...props}
      />
    ));

  return (
    <>
      {animation ? (
        <Placeholder style={{ width: "100%" }} animation={animation}>
          {content}
        </Placeholder>
      ) : (
        <div style={{ width: "100%" }}>{content}</div>
      )}
    </>
  );
};
