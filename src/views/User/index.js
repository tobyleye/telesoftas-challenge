import UserPosts from "./user-posts";
import UserSearch from "./user-search";
import { Route } from "react-router-dom";

export function User() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        maxWidth: 980,
        margin: '20px auto'
      }}
    >
      <UserSearch />
      <Route path="/user/:id">
        <UserPosts />
      </Route>
    </div>
  );
}
