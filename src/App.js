import "./styles.css";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { User } from "./views/User";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/user/:id"]} exact component={User}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div
      style={{
        background: "lightblue",
        padding: 20,
        textAlign: "center",
      }}
    >
      <p>looks like you lost your way. Dont worry we will help you find it.</p>
      <Link to="/">I'm lost</Link>
    </div>
  );
}
