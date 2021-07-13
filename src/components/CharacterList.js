import React, { Component } from 'react';

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
                <div key={ character.id } className="characterCard">
                    <img src={ character.image }/>
                    <div className="grid-item">
                        { character.name } -  { character.status }-{ character.type }
                        { character.gender } -  { character.location.name }
                    </div> 
                </div>
            ) : null
        }
      </div>
    );
  }
}

export default CharacterList;