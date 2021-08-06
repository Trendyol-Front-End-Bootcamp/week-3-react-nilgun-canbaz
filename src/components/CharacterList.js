import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

class CharacterList extends Component {
  state = {
    characters: [],
    isLoading: true,
    gender:null,
    status:null
  };
  getCharacters = () =>{
  
    axios.get('https://rickandmortyapi.com/api/character', {params: {
      gender: this.state.gender,
      status: this.state.status
      }})
    .then(response => response.data.results)
    .then(characters => {
      this.setState({
        characters,
        isLoading: false,
      });
    })
    .catch((err)=>err);
    
  }
  // Data is pulled from api when the page is first loaded
	componentDidMount() {
    this.getCharacters();
	}
  // After using the filter on the page, the data is retrieved from the api
  componentDidUpdate() {
    this.getCharacters();
	}

	render() {
	  const { isLoading } = this.state;

    return (
      <div className="CharacterList">
         <div className="filter">
            <select onChange={(e) => this.setState({gender: e.target.value}) }>
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
            <select onChange={(e) =>  this.setState({status: e.target.value}) }>
              <option value="">Select Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        { isLoading && 'Loading...' }
        {
          !isLoading && this.state.characters.map(character =>
            <Link key={ character.id } to={`/character/${character.id}`} >
              <div className="characterCard">
                <img alt={character.name } src={ character.image }/>
                <h2>{character.name } </h2>
                <ul className="grid-item">
                    <li><b>Gender: </b>{character.gender }</li>
                    <li><b>Status: </b>{character.status }</li>
                    <li><b>Type: </b>{character.type ? character.type  : '-'} </li>
                    <li><b>Location: </b>{character.location.name }</li>
                </ul> 
              </div>
            </Link>
            )
        }
      </div>
    );
  }
}

export default CharacterList;