import React from "react";
import glamorous from "glamorous";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn
} from "material-ui/Table";

import CenterTextProgress from "./center-text-progress";
import EditProduct from "./edit-product";
import SelectableCell from "./selectable-cell";

const { toCurrencyString } = require("../util/helper-functions");

const Container = glamorous.div({
  display: "flex",
  justifyContent: "center",
  margin: "10px"
});

const TableRow = glamorous.tr({
  display: "flex",
  justifyContent: "space-between",
  height: "55px",
  borderBottom: "solid lightgrey 1px"
});

const TableRowColumn = glamorous.td(props => {
  return {
    display: "flex",
    flex: props.wide ? `1 0 ${props.wide}rem` : "1 0 2rem",
    justifyContent: "center",
    alignItems: "center",
    padding: ".3em",
    textAlign: "center",
    color: props.color ? props.color : "grey",
    fontSize: "1rem",
    fontWeight: props.rowType && props.rowType === "footer" ? "600" : "300"
  };
});

const tableHeaderStyles = {
  padding: ".3em",
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: "300"
};

const VariantTable = props => {
  const product = props.product;
  const totalCountIn = product.variants.reduce(
    (acc, variant) => acc + variant.countIn + variant.add,
    0
  );
  const totalComp = product.variants.reduce(
    (acc, variant) => acc + variant.comp,
    0
  );
  const totalCountOut = product.variants.reduce(
    (acc, variant) => acc + variant.countOut,
    0
  );
  const totalSold = totalCountIn - totalComp - totalCountOut;

  const generateVariantRow = (variant, index) => {
    const variantCountIn = variant.countIn + variant.add;
    const variantsSold = variantCountIn - variant.comp - variant.countOut;
    const gross = toCurrencyString(variantsSold * props.product.price);

    return (
      <TableRow key={index}>
        <TableRowColumn color={"#26BCD4"} wide={3}>
          {variant.size}
        </TableRowColumn>
        <TableRowColumn>
          <SelectableCell
            value={variant.countIn}
            productId={product.id}
            variantId={variant.id}
            propertyName="countIn"
          />
        </TableRowColumn>
        <TableRowColumn color={"#44E171"}>
          <SelectableCell
            value={variant.add}
            productId={product.id}
            variantId={variant.id}
            propertyName="add"
          />
        </TableRowColumn>
        <TableRowColumn color={"#26BCD4"}>{variantCountIn}</TableRowColumn>
        <TableRowColumn color={"#FC5556"}>
          <SelectableCell
            value={variant.comp}
            productId={product.id}
            variantId={variant.id}
            propertyName="comp"
          />
        </TableRowColumn>
        <TableRowColumn>
          <SelectableCell
            value={variant.countOut}
            productId={product.id}
            variantId={variant.id}
            propertyName="countOut"
          />
        </TableRowColumn>
        <TableRowColumn color={"#26BCD4"}>{variantsSold}</TableRowColumn>
        <TableRowColumn wide={3} color={"#26BCD4"}>
          {gross}
        </TableRowColumn>
      </TableRow>
    );
  };

  return (
    <Container>
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableRowColumn wide={3}>Size</TableRowColumn>
            <TableRowColumn>Count In</TableRowColumn>
            <TableRowColumn>Add</TableRowColumn>
            <TableRowColumn>Total In</TableRowColumn>
            <TableRowColumn>Comp</TableRowColumn>
            <TableRowColumn>Count Out</TableRowColumn>
            <TableRowColumn>Total Sold</TableRowColumn>
            <TableRowColumn wide={3}>Gross</TableRowColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {props.product &&
            props.product.variants.map((variant, i) => {
              return generateVariantRow(variant, i);
            })}
          <TableRow key={"summary"} selected={false}>
            <TableRowColumn wide={3} rowType={"footer"}>
              <EditProduct product={product} />
            </TableRowColumn>
            <TableRowColumn />
            <TableRowColumn />
            <TableRowColumn color={"#26BCD4"} rowType={"footer"}>
              {totalCountIn}
            </TableRowColumn>
            <TableRowColumn color={"#FC5556"} rowType={"footer"}>
              {totalComp}
            </TableRowColumn>
            <TableRowColumn rowType={"footer"}>{totalCountOut}</TableRowColumn>
            <TableRowColumn color={"#26BCD4"} rowType={"footer"}>
              <CenterTextProgress
                size={50}
                thickness={3}
                value={totalSold / totalCountIn * 100}
              >
                {totalSold}
              </CenterTextProgress>
            </TableRowColumn>
            <TableRowColumn wide={3} color={"#26BCD4"} rowType={"footer"}>
              {toCurrencyString(totalSold * product.price)}
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default VariantTable;
