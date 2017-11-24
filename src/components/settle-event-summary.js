import React from 'react';
import glamorous from 'glamorous'

import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const { toCurrencyString }  = require('../util/helper-functions')

const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '10px',
})

const SettleCardStyle = {
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-end',
}

const Heading = glamorous.h1({
  textAlign: 'center',
  color: '#AEAEAE'
})

const Progress = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
})

const EventTotal = glamorous.h2({
  display: 'flex',
  justifyContent: 'center',
})

const SettleEventSummary = (props) => {
  console.log(props.products)
  const totalSold = 1
  const totalIn = 1
  const totalGross = 1
  return (

    <Container>
      <Paper
        style={SettleCardStyle}
        zDepth={4}
      >
        <Heading>
          TOTAL
        </Heading>
        <Progress>
          <CircularProgress
            mode={'determinate'}
            size={300}
            value={67}
          />
        </Progress>
        <EventTotal>
          {totalGross}
        </EventTotal>
        <RaisedButton
          label={'Settle'}
          primary={true}
         />
      </Paper>
    </Container>

  );
}

export default SettleEventSummary;
