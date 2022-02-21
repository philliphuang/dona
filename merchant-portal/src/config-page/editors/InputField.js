import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

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
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={inputAmount / 100}
        type="number"
        onChange={handleChange}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label={label}
      />
    </FormControl>
  );
}

export default InputField;