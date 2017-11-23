import React, { Component } from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class VariantCount extends Component {

  render() {
    console.log("VariantCount Props: ", this.props)
    return (
      <TableRow>
        <TableRowColumn>
         {this.props.variant.variantName}
        </TableRowColumn>
        <TableRowColumn>
         {this.props.variant.countIn}
        </TableRowColumn>
        <TableRowColumn>
         {this.props.variant.add}
        </TableRowColumn>
        <TableRowColumn>
         {this.props.variant.totalIn}
        </TableRowColumn>
        <TableRowColumn>
         {this.props.variant.comp}
        </TableRowColumn>
        <TableRowColumn>
         {this.props.variant.countOut}
        </TableRowColumn>
        <TableRowColumn>
         {this.props.variant.totalSold}
        </TableRowColumn>
        <TableRowColumn>
         {this.props.variant.gross}
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default VariantCount;
