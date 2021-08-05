import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  HomePage,
  RegisterOngPage,
  ProfilePage,
  NewIncidentPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegisterOngPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/incidents/new" component={NewIncidentPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
