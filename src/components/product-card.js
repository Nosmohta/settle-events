import React from "react";
import { css } from "glamor";
import glamorous from "glamorous";
import _ from "lodash";

import Paper from "material-ui/Paper";

import ProductSummary from "../components/product-summary";
import ProductVariantTable from "../components/product-variant-table";

const ProductCardStyle = css({
  display: "flex",
  margin: "10px"
});

const ProductSummaryContainer = glamorous.div({
  display: "flex",
  flex: "2 1 200px"
});

const VariantTableContainer = glamorous.div({
  display: "flex",
  flex: "5 1 700px",
  margin: "10px"
});

class ProductCard extends React.Component {
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
      <Paper className={ProductCardStyle} zDepth={2}>
        <ProductSummaryContainer>
          <ProductSummary product={this.props.product} />
        </ProductSummaryContainer>
        <VariantTableContainer>
          <ProductVariantTable product={this.props.product} />
        </VariantTableContainer>
      </Paper>
    );
  }
}

export default ProductCard;
