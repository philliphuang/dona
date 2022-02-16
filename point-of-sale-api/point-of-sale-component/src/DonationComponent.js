import * as React from 'react';
import * as utils from './utils';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


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
        label={`Round up to $${transactionDollars} with a $${donationDollars} donation to ${recipientName}`} 
      />
    </FormGroup>
  );
}

function FixedComponent(props) {
  const { option, setSelectedOption } = props;
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
        label={`Donate $${donationDollars} to ${recipientName}`} 
      />
    </FormGroup>
  );
}

function InputComponent(props) {
  const { option, setSelectedOption } = props;
  const recipientName = option.recipient.name;
  const donationDollars = utils.centsToDollars(option.donation_cents);
  const [checked, setChecked] = React.useState(false);
  const [inputAmount, setInputAmount] = React.useState(donationDollars);

  React.useEffect(() => {
    let inputOption = null;
    if (inputAmount > 0) {
      inputOption = { 
        ...option,
        donation_cents: inputAmount * 100,
      };
    }
    setSelectedOption(checked ? inputOption : null);
	}, [checked, inputAmount]);

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event) => {
    // TODO: replace this with something much more legit
    setInputAmount(
      (Number(event.target.value)).toLocaleString(
        "en-US", 
        {
          style:"decimal", 
          currency:"USD", 
          maximumFractionDigits:2,
        }
      )
    );
  };

  return (
    <FormGroup>
      <FormControlLabel 
        control={<Checkbox />}
        onChange={handleCheckedChange}
        label={`Donate to ${recipientName}`} 
      />
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
        <FilledInput
          type="number"
          onChange={handleChange}
          value={inputAmount}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
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