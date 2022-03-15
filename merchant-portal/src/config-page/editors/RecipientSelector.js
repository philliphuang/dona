import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { RecipientsContext } from '../../MerchantPortal';

function RecipientSelector(props) {
  const { config, setConfig, option, index, setOptionByIndex } = props;
  const recipients = React.useContext(RecipientsContext);
  const [value, setValue] = React.useState(
    config ? config.options[0].recipient : option.recipient
  );
  
  React.useEffect(() => {
    if (config) {
      setValue(config.options[0].recipient);
    } else if (option) {
      setValue(option.recipient);
    }
  }, [config, option]);

  React.useEffect(() => {
    if (setConfig) {
      setConfig(
        (prevConfig) => {
          return {
            ...prevConfig,
            "options": prevConfig.options.map(
              (option) => {
                return (
                  {
                    ...option,
                    "recipient": value,
                  }
                )
              }
            )
          };
        }
      );
    } else if (setOptionByIndex) {
      setOptionByIndex(
        index,
        {
          ...option,
          recipient: value,
        }
      );
    }
  }, [value]);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      disableClearable
      options={recipients}
      isOptionEqualToValue={(option, value) => option.public_key === value.public_key}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label="Recipient" />}
    />
  );
}

export default RecipientSelector;