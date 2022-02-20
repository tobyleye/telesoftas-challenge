import UserPosts from "./user-posts";
import UserSearch from "./user-search";
import { Route, match as matchType } from "react-router-dom";


type customMatchType = {
  params: { id: string; }
}

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
        render={({ match }: { match: customMatchType  }) => (
          <UserPosts id={match.params.id} key={match.params.id} />
        )}
      ></Route>
    </div>
  );
}
