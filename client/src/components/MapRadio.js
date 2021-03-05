import React, { Component } from 'react'
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio"

const styles = {
    radioContainer: {
        
    }
}

export default class MapRadio extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        switch(e.target.value){
            case "Runoff":
                this.props.changeMap("Runoff", "mapbox://styles/kanakahacks/ckkex8tti0fni17qpb5vhmjd2")
                break;
            case "Recharge":
                this.props.changeMap("Recharge", "mapbox://styles/kanakahacks/ckkj3885701qs18lcfdyms3k0")
                break;
            case "Interception":
                this.props.changeMap("Interception", "mapbox://styles/kanakahacks/ckkj4fpf902h617o0nbcyy6yi")
                break;
            case "ET":
                this.props.changeMap("ET", "mapbox://styles/kanakahacks/ckkj59vqf1if617lnmh73qaj1")
                break;
            case "Rainfall":
                this.props.changeMap("Rainfall", "mapbox://styles/kanakahacks/ckkj69k4b111k17mn3wz0071p")
                break;
            default:
                return null;
        }
    }
    render() {
        return (
            <div style={styles.radioContainer}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Maps</FormLabel>
                    <RadioGroup aria-label="Maps" name="mapRadio" value={this.props.selectedMap} onChange={this.handleChange}>
                        <FormControlLabel value="Runoff" checked={this.props.selectedMap==="Runoff" ? true : false} control={<Radio />} label="Runoff" />
                        <FormControlLabel value="Recharge" control={<Radio />} label="Recharge" />
                        <FormControlLabel value="Interception" control={<Radio />} label="Interception" />
                        <FormControlLabel value="ET" control={<Radio />} label="ET" />
                        <FormControlLabel value="Rainfall" control={<Radio />} label="Rainfall" />
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
}