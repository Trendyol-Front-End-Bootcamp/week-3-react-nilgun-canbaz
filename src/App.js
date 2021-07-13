import Navbar from './components/Navbar';
import Home from "./pages/Home";
import CharacterDetail from "./pages/Character";

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Route path="/character/:id" exact component={CharacterDetail} />
    </div>
    </Router>
  );
}
export default App;
