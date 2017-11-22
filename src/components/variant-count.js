import React, { Component } from 'react';



class ProductCounts extends Component {

  render() {
    console.log("ProductCounts Props: ", this.props)
    return (
        <div className="VariantCount">
          Variant counts....
        </div>
    );
  }
}

export default ProductCounts;
