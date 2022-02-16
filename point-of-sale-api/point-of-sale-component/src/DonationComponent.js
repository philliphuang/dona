import * as React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import RoundUpComponent from './components/RoundUpComponent';
import FixedComponent from './components/FixedComponent';
import InputComponent from './components/InputComponent';

function DonationComponent(props) {
  const { config, setSelectedOption } = props;

  let component;
  switch(config.type) {
    case "single":
      const option = config.options[0];
      switch(option.type) {
        case "roundup":
          component = <RoundUpComponent option={option} setSelectedOption={setSelectedOption} />;
          break;
        case "fixed": 
          component = <FixedComponent option={option} setSelectedOption={setSelectedOption} />;
          break;
        case "input":
          component = <InputComponent option={option} setSelectedOption={setSelectedOption} />;
          break;
        default: 
          component = <p>Invalid donation type.</p>;
      }
      break;
    case "multi_type":
      component = <p>multi_type</p>;
      break;
    case "multi_recipient":
      component = <p>multi_recipient</p>;
      break;
    case "custom":
      component = <p>custom</p>;
      break;
    default:
      component = <p>Invalid donation config type.</p>;
  }
  return (
    <Container maxWidth="xs">
      <Paper sx={{p:2}}>
        {component}
      </Paper>
    </Container>
  );
}

export default DonationComponent;