import * as React from 'react';

import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export function centsToDollars(cents) {
  return (cents / 100).toLocaleString(
    "en-US", 
    {
      style:"decimal", 
      currency:"USD", 
    }
  );
}

function InputField(props) {
  const { inputAmount, setInputAmount, label } = props;

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
      ) * 100
    );
  };

  return (
    <FormControl variant="filled">
      <InputLabel htmlFor="filled-adornment-amount">{label}</InputLabel>
      <FilledInput
        type="number"
        onChange={handleChange}
        value={inputAmount / 100}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </FormControl>
  );
}

export default InputField;