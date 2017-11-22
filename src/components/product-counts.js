import React, { Component } from 'react';

import VariantCount from '../components/variant-count';

class ProductCounts extends Component {

  render() {
    console.log("ProductCounts Props: ", this.props)
    return (
        <div className="ProductCounts">
          Product counts....
          {this.props.product &&
            this.props.product.variants.map(variant => {
              return (
                <VariantCount variant={variant} />
              )
            })
          }
        </div>
    );
  }
}

export default ProductCounts;
