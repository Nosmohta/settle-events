import React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";

import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";

import CenterTextProgress from "./center-text-progress";

import { toggleSettledState } from "../actions";

const {
  toCurrencyString,
  createEventSummary
} = require("../util/helper-functions");

const Container = glamorous.div({
  display: "flex",
  justifyContent: "flex-end",
  margin: "10px"
});

const settleCardStyle = {
  flex: "1 0 340px",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-end",
  padding: "10px"
};

const Heading = glamorous.h1({
  textAlign: "center",
  color: "#AEAEAE"
});

const Progress = glamorous.div({
  display: "flex",
  justifyContent: "center"
});

const ProgressCenter = glamorous.div({
  textAlign: "center",
  color: "#AEAEAE",
  fontSize: "1.5rem"
});

const EventTotal = glamorous.h2({
  display: "flex",
  justifyContent: "center",
  color: "#AEAEAE"
});

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "4rem"
};

const buttonLabelStyle = {
  fontSize: "2rem",
  color: "white"
};

const SettleEventSummary = props => {
  const eventSummary = createEventSummary(props.products);

  const settleEvent = () => {
    props.dispatch(toggleSettledState());
  };

  return (
    <Container>
      <Paper style={settleCardStyle} zDepth={4}>
        <Heading>{"SUMMARY"}</Heading>
        <Progress>
          <CenterTextProgress
            size={300}
            thickness={10}
            value={eventSummary.totalSold / eventSummary.totalIn * 100}
          >
            <ProgressCenter>
              {`${eventSummary.totalSold} Units Sold`}
            </ProgressCenter>
          </CenterTextProgress>
        </Progress>
        <EventTotal>{toCurrencyString(eventSummary.gross)}</EventTotal>
        <RaisedButton
          label={"Settle"}
          backgroundColor={props.settled ? "#FC5556" : "#26BCD4"}
          fullWidth={true}
          buttonStyle={buttonStyle}
          labelStyle={buttonLabelStyle}
          onClick={settleEvent}
        />
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    settled: state.inventory.settled
  };
};

export default connect(mapStateToProps)(SettleEventSummary);
