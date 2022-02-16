import * as React from 'react';
import * as utils from '../utils';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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

export default InputComponent;