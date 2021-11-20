import { useEffect, useState } from "react";

export function usePaginatedData(fetcher) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof fetcher === "function") {
      (async () => {
        setLoading(true);
        try {
          const { data, meta } = await fetcher(page);
          setData(data);
          setPagination(meta.pagination);
          setLoading(false);
        } catch (err) {
          setError(true);
          setLoading(false);
        }
      })();
    }
  }, [fetcher, page]);

  return {
    data,
    pagination,
    page,
    setPage,
    loading,
    error
  };
}
