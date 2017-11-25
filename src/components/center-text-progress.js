import React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";

import CircularProgress from "material-ui/CircularProgress";

const Container = glamorous.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "inherit",
  width: "inherit"
});

const Progress = glamorous.div(props => {
  return {
    position: "relative",
    height: `${props.size}px`,
    width: `${props.size}px`,
    top: "0px",
    left: "0px"
  };
});

const circularProgressStyle = {
  position: "absolute",
  top: "0px",
  left: "0px"
};

const ProgressCenter = glamorous.div(props => {
  return {
    height: `${props.size}px`,
    width: `${props.size}px`,
    lineHeight: `${props.size}px`,
    color: "inherit",
    fontSize: "inherit",
    top: "0px",
    left: "0px"
  };
});

const CenterTextProgress = props => {
  const { children, size, value, thickness } = props;

  return (
    <Container>
      <Progress size={size}>
        <CircularProgress
          style={circularProgressStyle}
          mode={"determinate"}
          size={size}
          thickness={thickness}
          value={value}
        />
        <ProgressCenter size={size}>{children}</ProgressCenter>
      </Progress>
    </Container>
  );
};

export default connect()(CenterTextProgress);
