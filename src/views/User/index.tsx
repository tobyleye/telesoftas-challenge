import UserPosts from "./user-posts";
import UserSearch from "./user-search";
import { Route, RouteComponentProps } from "react-router-dom";


export function User() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        maxWidth: 980,
        margin: "20px auto",
      }}
    >
      <UserSearch />
      {/* discard local state by re-rendering component when a new user is selected,  */}
      <Route
        path="/user/:id"
        render={({ match }: RouteComponentProps<{id: string;}>) => (
          <UserPosts id={match.params.id} key={match.params.id} />
        )}
      ></Route>
    </div>
  );
}
