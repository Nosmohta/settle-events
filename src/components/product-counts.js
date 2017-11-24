import React, { Component } from 'react';
import glamorous from 'glamorous'
import _ from 'lodash';

import Paper from 'material-ui/Paper';

import ProductSummary from '../components/product-summary';
import VariantList from '../components/variant-list';

const ProductCardStyle = {
  display: 'flex',
  minWidth: '750px',
  maxWidth: '1500px',
  padding: '10px',
  marginBottom: '10px'
}

const ProductSummaryContainer = glamorous.div({
  display: 'flex',
  flex: '2 0 200px',
})

const VariantListContainer = glamorous.div({
  display: 'flex',
  flex: '5 0 500px',
})

class ProductCounts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: props.product
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps.product, this.state.product )
  }

  render() {
    return (
      <Paper
        style={ProductCardStyle}
        zDepth={2}
      >
          <ProductSummaryContainer>
            <ProductSummary product={this.props.product} />
          </ProductSummaryContainer>
          <VariantListContainer>
            <VariantList product={this.props.product} />
          </VariantListContainer>
      </Paper>
    );
  }
}

export default ProductCounts;
