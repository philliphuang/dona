import * as React from 'react';
import * as utils from './utils';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function RoundUpComponent(props) {
  const { option, setSelectedOption } = props;
  const transactionDollars = utils.centsToDollars(option.transaction_cents);
  const donationDollars = utils.centsToDollars(option.donation_cents);
  const recipientName = option.recipient.name;

  const handleChange = (event) => {
    setSelectedOption(event.target.checked ? option : null);
  };

  return (
    <FormGroup>
      <FormControlLabel 
        control={<Checkbox />}
        onChange={handleChange}
        label={`Round up to ${transactionDollars} by adding a ${donationDollars} donation to ${recipientName}`} 
      />
    </FormGroup>
  );
}

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
          component = <p>fixed</p>;
          break;
        case "input":
          component = <p>input</p>;
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
  return component;
}

export default DonationComponent;