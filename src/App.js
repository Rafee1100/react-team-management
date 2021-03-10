import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team/:idTeam">Team</Link>
          </li>
         
        </ul> */}

        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/team/:id">
            <TeamDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
