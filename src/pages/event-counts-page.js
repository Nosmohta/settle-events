import React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous'

import ProductCounts from '../components/product-counts'
import SettleEventSummary from '../components/settle-event-summary'

const Page = glamorous.div({
  marginTop: '50px',
  marginBottom: '150px'
})

const EventProductsList = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
})

const EventCountsPage = (props) => {
  const products = props.eventProducts ? props.eventProducts : []

  return (
    <Page>
      <EventProductsList>
        {products.map((product, i) => {
            return (
              <ProductCounts key={i} product={product}/>
            )
          })
        }
      </EventProductsList>
      <SettleEventSummary products={products}/>
    </Page>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    eventProducts: state.inventory.eventProducts
  };
};

export default connect(mapStateToProps)(EventCountsPage);
