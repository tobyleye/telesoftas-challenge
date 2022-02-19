import { useCallback } from "react";
import { Link } from "react-router-dom";
import { getUserPosts } from "../../api.ts";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import { usePaginatedData } from "../../usePaginatedData";

export default function UserPosts({ id }) {
  const fetcher = useCallback((page) => getUserPosts(id, page), [id]);

  const { data, pagination, loading, error, page, setPage } =
    usePaginatedData(fetcher);

  return (
    <div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: 25,
        }}
      >
        &times;
      </Link>
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
      <Pagination
        currentPage={page}
        pagination={pagination}
        onChange={setPage}
      />
    </div>
  );
}
