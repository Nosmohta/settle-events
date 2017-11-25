import React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";

import Popover from "material-ui/Popover";
import RaisedButton from "material-ui/RaisedButton";

const Cell = glamorous.div({
  display: "flex",
  width: "inherit",
  height: "inherit",
  justifyContent: "center",
  alignItems: "center"
});

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap = event => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Cell>
        <RaisedButton onClick={this.handleTouchTap} label={"More"}>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            targetOrigin={{ horizontal: "left", vertical: "top" }}
            onRequestClose={this.handleRequestClose}
          >
            {"Change Price"}
          </Popover>
        </RaisedButton>
      </Cell>
    );
  }
}

export default connect()(EditProduct);
