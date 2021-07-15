import React, { Component } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import axios from 'axios';

class CharacterList extends Component {
  state = {
    characters: [],
    isLoading: true
  };

	componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(characters => characters.data.results)
			.then(characters => {
				this.setState({
					characters,
					isLoading: false
				});
			});
	}

	render() {
	  const { isLoading } = this.state;

    return (
      <div className="CharacterList">
        { isLoading ? 'Loading...' : '' }
        {
          !isLoading ? this.state.characters.map(character =>
                <Link key={ character.id } to={`/character/${character.id}`} >
                  <div className="characterCard">
                    <img src={ character.image }/>
                    <ul className="grid-item">
                        <li><b>Name: </b> {character.name }</li>
                        <li><b>Gender: </b>{character.gender }</li>
                        <li><b>Status: </b>{character.status }</li>
                        <li><b>Type: </b>{character.type }</li>
                        <li><b>Location: </b>{character.location.name }</li>
                    </ul> 
                  </div>
                </Link>
            ) : null
        }
      </div>
    );
  }
}

export default CharacterList;