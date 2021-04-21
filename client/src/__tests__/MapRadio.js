import React from 'react'
import { shallow } from 'enzyme'
import MapRadio from '../components/MapRadio';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio"

const mapRadio = shallow(<MapRadio />);

const styles = {
  radioContainer: {

  }
}

it('renders correctly', () => {
  expect(mapRadio).toMatchSnapshot();
});

const wrapper
  = shallow(
    <MapRadio
      changeMap={() => { console.log("fake changeMap") }}
      selectedMap={() => { "Runoff" }}
    />
  );  

it('changes the selectedMap state', () => {
  //reads the this.props.selectedMap = to the initial state of the parent (Runoff)
  
  //clicks formcontrolLabel 
  //onChange the parent state
  //takes in a new this.props.selectedMap value
})