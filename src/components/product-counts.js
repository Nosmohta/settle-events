import React, { Component } from 'react';
import glamorous from 'glamorous'

import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import VariantCount from '../components/variant-count';

const ProductCardStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: '10px'
}

const ProductInformation = glamorous.div({
  border: 'solid 1px green',
  width: '200px'

})

const VariantList = glamorous.div({
  border: 'solid 1px orange',

})

class ProductCounts extends Component {

  render() {
    console.log("ProductCounts Props: ", this.props)

    return (
      <Paper
        style={ProductCardStyle}
        zDepth={2}
      >
          <ProductInformation>
              <h3>{this.props.product.name}</h3>
              <img src={require(`../data/images/product-${this.props.product.id}.jpg`)} alt="" height="150px" width="150px" />
          </ProductInformation>
          <VariantList>
            <Table>
              <TableHeader
                adjustForCheckbox={false}
                displaySelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn>Size</TableHeaderColumn>
                  <TableHeaderColumn>Count In</TableHeaderColumn>
                  <TableHeaderColumn>Add</TableHeaderColumn>
                  <TableHeaderColumn>Total In</TableHeaderColumn>
                  <TableHeaderColumn>Comp</TableHeaderColumn>
                  <TableHeaderColumn>Count Out</TableHeaderColumn>
                  <TableHeaderColumn>Total Sold</TableHeaderColumn>
                  <TableHeaderColumn>Gross</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.props.product &&
                  this.props.product.variants.map(variant => {
                    return (
                      <VariantCount variant={variant} />
                    )
                  })
                }
              </TableBody>
            </Table>
          </VariantList>
      </Paper>

    );
  }
}

export default ProductCounts;
