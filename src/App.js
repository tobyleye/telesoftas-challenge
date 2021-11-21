import "./styles.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { User } from "./views/User";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={User}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
