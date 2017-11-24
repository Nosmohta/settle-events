import React from 'react';
import glamorous from 'glamorous'

import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const { toCurrencyString, createEventSummary }  = require('../util/helper-functions')

const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'flex-end',
  maxWidth: '1500px',
  margin: '10px',
})

const settleCardStyle = {
  width: '40%',
  minWidth: '340px',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-end',
  padding: '10px'
}

const Heading = glamorous.h1({
  textAlign: 'center',
  color: '#AEAEAE'
})

const Progress = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
})

const ProgressRelative = glamorous.div({
  position: 'relative',
  height: '300px',
  width: '300px',
  top: '0px',
  left: '0px',
})

const circularProgressStyle = {
  position: 'absolute',
}

const ProgressCenter = glamorous.div({
  height: '300px',
  width: '300px',
  textAlign: 'center',
  lineHeight: '300px',
  color: '#AEAEAE',
  fontSize: '1.5rem'
})

const EventTotal = glamorous.h2({
  display: 'flex',
  justifyContent: 'center',
  color: '#AEAEAE'
})

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '4rem',
}

const buttonLabelStyle = {
  fontSize: '2rem'
}

const SettleEventSummary = (props) => {
  const eventSummary = createEventSummary(props.products)

  return (
    <Container>
      <Paper
        style={settleCardStyle}
        zDepth={4}
      >
        <Heading>
          {'SUMMARY'}
        </Heading>
        <Progress>
          <ProgressRelative>
            <CircularProgress
              style={circularProgressStyle}
              mode={'determinate'}
              size={300}
              thickness={10}
              value={(eventSummary.totalSold / eventSummary.totalIn) * 100}
            />
            <ProgressCenter>
              {`${eventSummary.totalSold} Units Sold`}
            </ProgressCenter>
          </ProgressRelative>
        </Progress>
        <EventTotal>
          {toCurrencyString(eventSummary.gross)}
        </EventTotal>
        <RaisedButton
          label={'Settle'}
          primary={true}
          fullWidth={true}
          buttonStyle={buttonStyle}
          labelStyle={buttonLabelStyle}
         />
      </Paper>
    </Container>

  );
}

export default SettleEventSummary;
