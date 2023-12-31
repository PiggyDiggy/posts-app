import Pagination from "react-bootstrap/Pagination";

type Props = {
  pagesCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const PostsPagination = ({ pagesCount, currentPage, onPageChange }: Props) => {
  return (
    <div className="mt-4">
      <Pagination>
        {currentPage > 2 && pagesCount > 3 && (
          <>
            <Pagination.First onClick={() => onPageChange(1)} />
            <Pagination.Ellipsis />
          </>
        )}

        {currentPage === pagesCount && pagesCount > 2 && (
          <Pagination.Item onClick={() => onPageChange(currentPage - 2)}>{currentPage - 2}</Pagination.Item>
        )}
        {currentPage > 1 && (
          <Pagination.Item onClick={() => onPageChange(currentPage - 1)}>{currentPage - 1}</Pagination.Item>
        )}
        <Pagination.Item active>{currentPage}</Pagination.Item>
        {currentPage < pagesCount && (
          <Pagination.Item onClick={() => onPageChange(currentPage + 1)}>{currentPage + 1}</Pagination.Item>
        )}
        {currentPage === 1 && pagesCount > 2 && (
          <Pagination.Item onClick={() => onPageChange(currentPage + 2)}>{currentPage + 2}</Pagination.Item>
        )}

        {currentPage < pagesCount - 1 && pagesCount > 3 && (
          <>
            <Pagination.Ellipsis />
            <Pagination.Last onClick={() => onPageChange(pagesCount)} />
          </>
        )}
      </Pagination>
    </div>
  );
};
