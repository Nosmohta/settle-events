import React from 'react';
import { connect } from 'react-redux';

import '../css/App.css';

import ProductCounts from '../components/product-counts'

const EventCountsPage = (props) => {

  console.log(props)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Event Inventory Count</h1>
      </header>
      <div className="ProductsList">
        {props.eventProducts &&
          props.eventProducts.map(product => {
            return (
              <ProductCounts product={product}/>
            )
          })

        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    eventProducts: state.inventory.eventProducts
  };
};

export default connect(mapStateToProps)(EventCountsPage);
