import CharacterList from '../src/components/CharacterList';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('CharacterListEnzyme', ()=>{
  it('should get data', (done) => {
    const mockData = {
      "results": [
        {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
          },
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4"
          ],
          "url": "https://rickandmortyapi.com/api/character/1",
          "created": "2017-11-04T18:48:46.250Z"
        }
      ]
    }
    axios.get.mockResolvedValue({ data: mockData });
    const wrapper = shallow(<CharacterList/>, {
      disableLifecycleMethods: true
    });

    wrapper.instance().getCharacters();
    process.nextTick(()=>{
      expect(wrapper.state('isLoading')).toBeFalsy();
      expect(wrapper.state().characters).toEqual(mockData.results);
      done();
    });
  });

  it('should handle error', (done) => {
  
    axios.get.mockRejectedValue();
    const wrapper = shallow(<CharacterList/>);

    wrapper.instance().getCharacters();
    process.nextTick(()=>{
      expect(wrapper.state('isLoading')).toBeTruthy();
      expect(wrapper.state().characters).toEqual([]);
      done();
    });
  });
 

});