import React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";

import ProductCounts from "../components/product-counts";
import SettleEventSummary from "../components/settle-event-summary";

const Page = glamorous.div({
  display: "flex"
});

const Column = glamorous.div({
  flex: "1 0 900px",
  display: "flex",
  flexDirection: "column"
});

const EventProductsList = glamorous.div({
  display: "flex",
  flexDirection: "column"
});

const EventCountsPage = props => {
  const products = props.eventProducts ? props.eventProducts : [];

  return (
    <Page>
      <Column>
        <EventProductsList>
          {products.map((product, i) => {
            return <ProductCounts key={i} product={product} />;
          })}
        </EventProductsList>
        <SettleEventSummary products={products} />
      </Column>
    </Page>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    eventProducts: state.inventory.eventProducts
  };
};

export default connect(mapStateToProps)(EventCountsPage);
