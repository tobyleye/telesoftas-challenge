import { useCallback, useState } from "react";
import { queryUsers } from "../api";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import DebouncedInput from "../components/DebouncedInput";
import Loading from "../components/Loading";
import { usePaginatedData } from "../usePaginatedData";

export default function UserSeach() {
  const [query, setQuery] = useState("aga");

  const fetcher = useCallback((page) => queryUsers(query, page), [query]);

  const { data, loading, error, pagination, page, setPage } = usePaginatedData(
    query.length >= 3 && fetcher
  );

  return (
    <div className="App">
      <div>
        <DebouncedInput defaultValue={query} onChange={setQuery} />
      </div>
      {error ? (
        <div>an error occured</div>
      ) : loading ? (
        <Loading />
      ) : (
        <div>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/user/${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              currentPage={page}
              pagination={pagination}
              onChange={setPage}
            />
          )}
        </div>
      )}
    </div>
  );
}
