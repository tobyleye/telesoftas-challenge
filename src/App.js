import "./styles.css";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { User } from "./views/User";

export default function App() {
  return (
    <div>
      <main>
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/user/:id"]} exact component={User}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
    </main>

    <footer style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right:0,
      padding: 20,
      fontSize: 14,
      color: '#344'
    }}>
      <div>{process.env.REACT_APP_NAME}</div>
    </footer>
    </div>
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
