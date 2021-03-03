import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class MapButton extends Component {
    constructor(props){
        super()
    }
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.props.changeMap(this.props.title, this.props.mapStyleLink)}
        >
          {this.props.title}
        </Button>
      </div>
    );
  }
}
