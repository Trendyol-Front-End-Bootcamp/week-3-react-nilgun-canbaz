import { BrowserRouter as Router,Link } from 'react-router-dom';
import CharacterPage from '../components/CharacterPage';
function Character({match}) {
  return (
    <div className="App">
      <Link to="/">Go Back Home </Link>

      <CharacterPage characterId={match.params.id}/>
      
    </div>
  );
}
export default Character;