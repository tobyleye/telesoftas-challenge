import { useEffect, useState } from "react";
import { pagination } from "./types";

export function usePaginatedData(
  fetcher:
    | ((
        page: number
      ) => Promise<{ meta: { pagination: pagination }; data: any[] }>)
    | undefined
) {
  const [data, setData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<null | pagination>(null);
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
    error,
  };
}
