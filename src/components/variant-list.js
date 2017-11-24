import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import SelectableCell from './selectable-cell'

const { toCurrencyString }  = require('../util/helper-functions')

const tableHeaderStyles = {
  padding: '5px',
  textAlign: 'center',
  fontSize: '1.2rem',
  fontWeight: '300',
}

const tableRowColumnStyles = {
  padding: '5px',
  textAlign: 'center',
  fontSize: '1.2rem',
  fontWeight: '300',
}

const VariantList = (props) => {
  const product = props.product
  const totalCountIn = product.variants.reduce((acc, variant) => acc + variant.countIn + variant.add, 0)
  const totalComp = product.variants.reduce((acc, variant) => acc + variant.comp, 0)
  const totalCountOut = product.variants.reduce((acc, variant) => acc + variant.countOut, 0)
  const totalSold = totalCountIn - totalComp - totalCountOut

  const generateVariantRow = (variant, index) => {
    const variantCountIn = variant.countIn + variant.add
    const variantsSold = variantCountIn - variant.comp - variant.countOut
    const gross = toCurrencyString(variantsSold * props.product.price)

    return (
      <TableRow key={index}>
        <TableRowColumn style={tableRowColumnStyles}>
          {variant.variantName}
        </TableRowColumn>
        <TableRowColumn style={tableRowColumnStyles}>
          <SelectableCell value={variant.countIn} productId={product.id} variantId={variant.id} propertyName="countIn" />
        </TableRowColumn>
        <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#44E171'})}>
          <SelectableCell value={variant.add} productId={product.id}  variantId={variant.id} propertyName="add" />
        </TableRowColumn>
        <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#26BCD4'})}>
          {variantCountIn}
        </TableRowColumn>
        <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#FC5556'})}>
          <SelectableCell value={variant.comp} productId={product.id}  variantId={variant.id} propertyName="comp"/>
        </TableRowColumn>
        <TableRowColumn style={tableRowColumnStyles}>
          <SelectableCell value={variant.countOut} productId={product.id}  variantId={variant.id} propertyName="countOut" />
        </TableRowColumn>
        <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#26BCD4'})}>
          {variantsSold}
        </TableRowColumn>
        <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#26BCD4'})}>
          {gross}
        </TableRowColumn>
      </TableRow>
    );
  }

  return (
    <Table>
      <TableHeader
        adjustForCheckbox={false}
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn style={tableHeaderStyles}>Size</TableHeaderColumn>
          <TableHeaderColumn style={tableHeaderStyles}>Count In</TableHeaderColumn>
          <TableHeaderColumn style={tableHeaderStyles}>Add</TableHeaderColumn>
          <TableHeaderColumn style={tableHeaderStyles}>Total In</TableHeaderColumn>
          <TableHeaderColumn style={tableHeaderStyles}>Comp</TableHeaderColumn>
          <TableHeaderColumn style={tableHeaderStyles}>Count Out</TableHeaderColumn>
          <TableHeaderColumn style={tableHeaderStyles}>Total Sold</TableHeaderColumn>
          <TableHeaderColumn style={tableHeaderStyles}>Gross</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.product &&
          props.product.variants.map((variant, i) => {
            return (
              generateVariantRow(variant, i)
            )
          })
        }
        <TableRow
          key={'summary'}
          selected={false}
        >
          <TableRowColumn style={tableRowColumnStyles} />
          <TableRowColumn style={tableRowColumnStyles} />
          <TableRowColumn style={tableRowColumnStyles} />
          <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#26BCD4', fontWeight: '600'})}>
            {totalCountIn}
          </TableRowColumn>
          <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: 'red', fontWeight: '600'})}>
            {totalComp}
          </TableRowColumn>
          <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {fontWeight: '600'})}>
            {totalCountOut}
          </TableRowColumn>
          <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#26BCD4', fontWeight: '600'})}>
            {totalSold}
          </TableRowColumn>
          <TableRowColumn style={Object.assign({}, tableRowColumnStyles, {color: '#26BCD4', fontWeight: '600'})}>
            {toCurrencyString(totalSold * product.price)}
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default VariantList;
