import React, { Component } from 'react';
import axios from 'axios';
import Episode from './Episode';

class CharacterPage extends Component {

    state = {
        data : [],
        episodes: [],
        location: []    
    } 
	componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/'+this.props.characterId)
        .then(res => {
            const data = res.data;
            const episodes = res.data.episode;
            const location = res.data.location.name;
            this.setState({ data,episodes,location });
          })		
	}

	render() {
        return (
            <div>
                <ul>
                    <li><img src={this.state.data.image}/></li>
                    <li><b>Name:</b> {this.state.data.name}</li>
                    <li><b>Gender:</b> {this.state.data.gender}</li>
                    <li><b>Status:</b> {this.state.data.status}</li>
                    <li><b>Type:</b> {this.state.data.type}</li>
                    <li><b>Location:</b> {this.state.location}</li>
                    <li>
                        <b>Last 5 Episodes :</b>  
                        {this.state.episodes.slice(-5).map(episode => <Episode key ={episode} episodeId={episode.split('/')[5]}/>) }
                    </li>
                </ul>
            </div>
        );
  }
}

export default CharacterPage;