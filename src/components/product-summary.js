import React from 'react';
import glamorous from 'glamorous'

const { toCurrencyString }  = require('../util/helper-functions')

const Container = glamorous.div({
  disply: 'flex',
  width: '100%',
  height: '100%',
  padding: '10px'
})

const ProductName = glamorous.div({
  textAlign: 'center'
})

const SummaryBody = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
})

const ImageContainer = glamorous.div({
  flex: '1 0 150px',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px',
})

const Summary = glamorous.div({
  flex: '1 0 150px',
  color: '#9e9e9e',
  padding: '5px',
})

const SummaryText = glamorous.div({
  color: '#9e9e9e',
  marginBottom: '5px'
})

const ProductSummary = (props) => {

  return (
    <Container>
      <ProductName>
        <h3>{props.product.name}</h3>
      </ProductName>
      <SummaryBody>
        <ImageContainer>
          <img src={require(`../data/images/product-${props.product.id}.jpg`)} alt="" height="200px" width="200px" />
        </ImageContainer>
        <Summary>
          <SummaryText>
            {`${toCurrencyString(props.product.price)}`}
          </SummaryText>
          <SummaryText>
            {`Description: ${props.product.description}`}
          </SummaryText>
        </Summary>
      </SummaryBody>
    </Container>
  );
}

export default ProductSummary;
