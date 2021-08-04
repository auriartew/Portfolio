import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Skills from './Skills.js';

function App() {
  return ( 
    <div className="App">
      
      <Router>
        <Switch>  
          <Route exact path="/" component={Home} />   
          <Route path="/skills" component={Skills} />
        </Switch> 
      </Router>
      
    </div>

  );
}

export default App;
