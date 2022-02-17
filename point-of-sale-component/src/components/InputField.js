import * as React from 'react';
import * as utils from '../utils';

import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function InputField(props) {
  const { inputAmount, setInputAmount } = props;

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
    <FormControl variant="filled">
      <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
      <FilledInput
        type="number"
        onChange={handleChange}
        value={inputAmount}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </FormControl>
  );
}

export default InputField;