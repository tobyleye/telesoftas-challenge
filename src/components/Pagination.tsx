
interface PaginationProps {
  pagination: {
    total:number
    pages: number;
    page: number
  } | null,
  onChange: (page: number) => void,
  currentPage: number
}

export default function Pagination({ pagination, onChange, currentPage }: PaginationProps) {
  if (pagination) {
    const { total, pages, page } = pagination;
    return (
      <div>
        <p>Total: {total}</p>
        <div>
          <button disabled={page === 1} onClick={() => onChange(page - 1)}>
            Previous
          </button>
          <button disabled>current</button>
          <button
            disabled={pages <= currentPage}
            onClick={() => onChange(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  return null;
}
