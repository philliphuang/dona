import * as React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import RoundUpComponent from './components/RoundUpComponent';
import FixedComponent from './components/FixedComponent';
import InputComponent from './components/InputComponent';
import MultiTypeComponent from './components/MultiTypeComponent';
import MultiRecipientComponent from './components/MultiRecipientComponent';
import CustomComponent from './components/CustomComponent';

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
      component = <MultiTypeComponent config={config} setSelectedOption={setSelectedOption} />;
      break;
    case "multi_recipient":
      component = <MultiRecipientComponent config={config} setSelectedOption={setSelectedOption} />;
      break;
    case "custom":
      component = <CustomComponent config={config} setSelectedOption={setSelectedOption} />;
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