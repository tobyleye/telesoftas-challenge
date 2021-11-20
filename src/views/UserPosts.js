import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserPosts } from "../api";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { usePaginatedData } from "../usePaginatedData";

export default function UserPosts() {
  const { id } = useParams();

  const fetcher = useCallback((page) => getUserPosts(id, page), [id]);

  const { data, pagination, loading, error, page, setPage } = usePaginatedData(
    fetcher
  );
  console.log({ data });

  return (
    <div>
      <Link to="/">Go back</Link>
      {error ? (
        <div>An error occured</div>
      ) : loading ? (
        <Loading />
      ) : (
        <ul>
          {data.map((p) => {
            return (
              <li key={p.id}>
                <article>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              </li>
            );
          })}
        </ul>
      )}
      {pagination && (
        <Pagination
          currentPage={page}
          pagination={pagination}
          onChange={setPage}
        />
      )}
    </div>
  );
}
