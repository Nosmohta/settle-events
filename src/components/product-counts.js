import React, { Component } from "react";
import glamorous from "glamorous";
import _ from "lodash";

import Paper from "material-ui/Paper";

import ProductSummary from "../components/product-summary";
import VariantTable from "../components/variant-table";

const ProductCardStyle = {
  display: "flex",
  margin: "10px"
};

const ProductSummaryContainer = glamorous.div({
  display: "flex",
  flex: "2 1 200px"
});

const VariantTableContainer = glamorous.div({
  display: "flex",
  flex: "5 1 700px",
  margin: "10px"
});

class ProductCounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps.product, this.state.product);
  }

  render() {
    return (
      <Paper style={ProductCardStyle} zDepth={2}>
        <ProductSummaryContainer>
          <ProductSummary product={this.props.product} />
        </ProductSummaryContainer>
        <VariantTableContainer>
          <VariantTable product={this.props.product} />
        </VariantTableContainer>
      </Paper>
    );
  }
}

export default ProductCounts;
