import React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";
import { updateVariantSettleCount } from "../actions";

const Cell = glamorous.div({
  display: "flex",
  height: "inherit",
  width: "inherit"
});

const CellStyles = {
  height: "100%",
  width: "100%",
  textAlign: "center",
  border: "none",
  color: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit"
};

class SelectableCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cellValue: this.props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveCellState = this.saveCellState.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({ cellValue: event.target.value });
  }

  saveCellState(event) {
    const payload = {
      productId: this.props.productId,
      variantId: this.props.variantId,
      propertyName: this.props.propertyName,
      newValue: this.state.cellValue ? this.state.cellValue : 0
    };

    this.props.dispatch(updateVariantSettleCount(payload));
  }

  render() {
    return (
      <Cell>
        <input
          disabled={this.props.settled}
          type="number"
          style={CellStyles}
          onChange={e => this.handleChange(e)}
          onBlur={e => this.saveCellState(e)}
          value={this.state.cellValue ? this.state.cellValue : 0}
        />
      </Cell>
    );
  }
}

const mapStateToProps = state => {
  return {
    settled: state.inventory.settled
  };
};

export default connect(mapStateToProps)(SelectableCell);
