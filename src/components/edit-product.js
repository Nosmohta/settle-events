import React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";

import Divider from "material-ui/Divider";
import FlatButton from "material-ui/FlatButton";
import Popover from "material-ui/Popover";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

import { saveProductUpdate } from "../actions";
import { entryValid } from "../util/helper-functions";

const Cell = glamorous.div({
  display: "flex",
  width: "inherit",
  height: "inherit",
  justifyContent: "center",
  alignItems: "center"
});

const PopoverContainer = glamorous.div({
  margin: "0.5rem"
});

const formInputStyles = {
  color: "#9e9e9e"
};

const buttonStyles = {
  margin: "0.5rem"
};

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "none",
      validationError: false,
      fieldValue: {
        price: props.product.price,
        note: props.product.note ? props.product.note : ""
      }
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.cancleEntry = this.cancleEntry.bind(this);
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

  toggleMode(event, type) {
    event.preventDefault();
    this.setState((state, props) => {
      return {
        mode: state.mode === type ? "none" : type
      };
    });
  }

  handleChange(event, type) {
    event.preventDefault();
    this.setState({
      fieldValue: Object.assign({}, this.state.fieldValue, {
        [type]: event.target.value
      })
    });
  }

  saveEntry(event, type) {
    event.preventDefault();
    const payload = {
      propertyType: type,
      value: this.state.fieldValue[type]
    };

    if (entryValid(payload)) {
      this.props.dispatch(saveProductUpdate(this.props.product.id, payload));
      this.toggleMode(event, type);
      this.setState({
        validationError: false
      });
    } else {
      this.setState({
        validationError: true
      });
    }
  }

  cancleEntry(event, type) {
    event.preventDefault();

    this.setState((state, props) => {
      return {
        fieldValue: {
          price: props.product.price,
          note: props.product.note
        },
        validationError: false
      };
    });
    this.toggleMode(event, type);
  }

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
            <PopoverContainer>
              <FlatButton
                onClick={e => this.toggleMode(e, "price")}
                label={"Edit Price"}
              />
              <br />
              <FlatButton
                onClick={e => this.toggleMode(e, "note")}
                label={`${this.props.product.note ? "Edit Note" : "Add Note"}`}
              />
              {this.state.mode === "price" && (
                <div>
                  <br />
                  <Divider />
                  <br />
                  {"PRICE ($)"}
                  <br />
                  <TextField
                    type={"number"}
                    name={"price"}
                    errorText={
                      this.state.validationError
                        ? "Please provide a valid Input"
                        : ""
                    }
                    value={this.state.fieldValue.price}
                    onChange={e => this.handleChange(e, "price")}
                    inputStyle={formInputStyles}
                  />
                  <br />
                  <RaisedButton
                    style={buttonStyles}
                    onClick={e => this.saveEntry(e, "price")}
                    label={"SAVE"}
                  />
                  <RaisedButton
                    style={buttonStyles}
                    onClick={e => this.cancleEntry(e, "price")}
                    label={"CANCLE"}
                  />
                </div>
              )}
              {this.state.mode === "note" && (
                <div>
                  <br />
                  <Divider />
                  <br />
                  {"NOTE:"}
                  <br />
                  <TextField
                    type={"text"}
                    name={"note"}
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    value={this.state.fieldValue.note}
                    onChange={e => this.handleChange(e, "note")}
                    textareaStyle={formInputStyles}
                  />
                  <br />
                  <RaisedButton
                    style={buttonStyles}
                    onClick={e => this.saveEntry(e, "note")}
                    label={"SAVE"}
                  />
                  <RaisedButton
                    style={buttonStyles}
                    onClick={e => this.cancleEntry(e, "note")}
                    label={"CANCLE"}
                  />
                </div>
              )}
            </PopoverContainer>
          </Popover>
        </RaisedButton>
      </Cell>
    );
  }
}

export default connect()(EditProduct);
