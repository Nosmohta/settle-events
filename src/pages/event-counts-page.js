import React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous'

import ProductCounts from '../components/product-counts'

const Page = glamorous.div({

})

const EventProductsList = glamorous.div({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
})

const EventCountsPage = (props) => {

  return (
    <Page>
      <EventProductsList>
        {props.eventProducts &&
          props.eventProducts.map(product => {
            return (
              <ProductCounts product={product}/>
            )
          })
        }
      </EventProductsList>
    </Page>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    eventProducts: state.inventory.eventProducts
  };
};

export default connect(mapStateToProps)(EventCountsPage);
