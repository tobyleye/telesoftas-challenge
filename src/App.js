import "./styles.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import UserSearch from "./views/UserSearch";
import UserPosts from "./views/UserPosts";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UserSearch} />
        <Route path="/user/:id" component={UserPosts} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
