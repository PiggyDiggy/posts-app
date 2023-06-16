import { useEffect, useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import { PagePagination } from "../../components/PagePagination";
import type { Post as PostType } from "../../entities/post";
import { Post } from "../Post";

type PaginationProps = {
  withPagination: true;
  page: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

type Props = {
  posts: PostType[];
  error?: string;
} & (
  | PaginationProps
  | (Partial<Pick<PaginationProps, "page" | "onPageChange" | "perPage">> & { withPagination: false })
);

export const PostsList = ({ posts, error, withPagination, page, perPage, onPageChange }: Props) => {
  const previousPage = useRef<number | null>(null);

  const list = withPagination ? posts.slice(perPage * (page - 1), perPage * page) : posts;

  const changePage = (newPage: number) => {
    onPageChange?.(newPage);
  };

  useEffect(() => {
    if (!withPagination) return;

    if (previousPage.current) {
      // @ts-ignore
      window.scrollTo({ behavior: "instant", top: document.body.scrollHeight });
    }
    previousPage.current = page;
  }, [page, withPagination]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ListGroup className="my-2">
        {list.map((post) => (
          <ListGroup.Item key={post.id}>
            <Post post={post} />
          </ListGroup.Item>
        ))}
      </ListGroup>
      {withPagination && (
        <PagePagination currentPage={page} pagesCount={Math.ceil(posts.length / perPage)} onPageChange={changePage} />
      )}
    </div>
  );
};
