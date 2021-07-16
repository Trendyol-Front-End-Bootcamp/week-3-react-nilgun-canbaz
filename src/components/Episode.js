import React, { Component } from 'react';
import axios from 'axios';

class Episodes extends Component {

    state = {
        data : [] 
    }
    //Data is pulled from api for partitions
	componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/episode/'+this.props.episodeId)
        .then(res => {
            const data = res.data;
            this.setState({ data });
          })		
	}

	render() {
        return (
            <div>
                {this.state.data.name} 
            </div>
        );
  }
}

export default Episodes;