import * as React from 'react';
import CurrencyTextField from '@demo-organization/demo-scope.ui.currency-text-field';

function InputField(props) {
  const { inputAmount, setInputAmount } = props;

  return (
    <CurrencyTextField
      sx={{p:4}}
      label="Amount"
      variant="standard"
      value={inputAmount}
      currencySymbol="$"
      outputFormat="string"
      onChange={(event, value)=> setInputAmount(value)}
    />
  );
}

export default InputField;