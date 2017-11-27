import React from "react";
import glamorous from "glamorous";

import { GridTile } from "material-ui/GridList";
import Info from "material-ui/svg-icons/action/info";

const { toCurrencyString } = require("../util/helper-functions");

const Container = glamorous.div({
  disply: "flex",
  width: "100%",
  height: "100%",
  padding: "10px"
});

const ProductName = glamorous.div({
  textAlign: "center"
});

const SummaryBody = glamorous.div({
  display: "flex",
  flexWrap: "wrap"
});

const ImageContainer = glamorous.div({
  flex: "1 0 200px",
  display: "flex",
  justifyContent: "center"
});

const Image = glamorous.div({
  width: "200px",
  height: "200px",
  position: "relative",
  display: "flex",
  justifyContent: "center"
});

const ImageOverlay = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "absolute",
  left: "0px",
  top: "0px",
  right: "0px",
  bottom: "0px"
});

const Icon = glamorous.div({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end"
});

const Description = glamorous.div({
  background: "rgba(38, 188, 212, 0.8)",
  color: "white",
  padding: "10px"
});

const imageIconStyles = {
  color: "#26BCD4"
};

const Summary = glamorous.div({
  flex: "1 0 150px",
  color: "#9e9e9e",
  padding: "5px"
});

const SummaryText = glamorous.div({
  color: "#9e9e9e",
  marginBottom: "5px"
});

class ProductSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({ hover: true });
  }

  handleMouseOut() {
    this.setState({ hover: false });
  }

  render() {
    const product = this.props.product;

    return (
      <Container>
        <ProductName>
          <h3>{product.name}</h3>
        </ProductName>
        <SummaryBody>
          <ImageContainer>
            <Image>
              <ImageOverlay>
                <Icon>
                  {product.description && (
                    <Info
                      style={imageIconStyles}
                      onMouseOver={this.handleMouseOver}
                      onMouseOut={this.handleMouseOut}
                    />
                  )}
                </Icon>
                {this.state.hover && (
                  <Description>{product.description}</Description>
                )}
              </ImageOverlay>
              <img
                src={require(`../data/images/product-${product.id}.jpg`)}
                alt=""
                height="200px"
                width="200px"
              />
            </Image>
          </ImageContainer>
          <Summary>
            <SummaryText>{`${toCurrencyString(product.price)}`}</SummaryText>
            {product.note && (
              <SummaryText>{`Note: ${product.note}`}</SummaryText>
            )}
          </Summary>
        </SummaryBody>
      </Container>
    );
  }
}

export default ProductSummary;
