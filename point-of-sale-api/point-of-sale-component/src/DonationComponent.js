import * as React from 'react';
import * as utils from './utils';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function RoundUpComponent(props) {
  const { action, setSelectedAction } = props;
  const transactionDollars = utils.centsToDollars(action.transaction_cents);
  const donationDollars = utils.centsToDollars(action.donation_cents);
  const recipientName = action.recipient.name;

  const handleChange = (event) => {
    setSelectedAction(event.target.checked ? action : null);
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
  const { config, setSelectedAction } = props;

  let component;
  switch(config.type) {
    case "single":
      const action = config.actions[0];
      switch(action.type) {
        case "roundup":
          component = <RoundUpComponent action={action} setSelectedAction={setSelectedAction} />;
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