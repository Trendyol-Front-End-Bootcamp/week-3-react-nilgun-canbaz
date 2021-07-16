import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Character from "./pages/Character";

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/character/:id" exact component={Character} />
        </Router>
      </div>
    
  );
}
export default App;
