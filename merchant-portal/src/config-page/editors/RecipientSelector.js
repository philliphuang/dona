import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const dummyRecipients = [
  {
    id: 0,
    name: "UNICEF",
    wallet: "loremipsumdolorsitamet",
    description: 'lorem ipsum dolor sit amet',
  },
  {
    id: 1,
    name: "American Red Cross",
    wallet: "loremipsumdolorsitamet",
    description: 'lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    name: "Charity: Water",
    wallet: "loremipsumdolorsitamet",
    description: 'lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    name: "Salvation Army",
    wallet: "loremipsumdolorsitamet",
    description: 'lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    name: "Malaria Consortium",
    wallet: "loremipsumdolorsitamet",
    description: 'lorem ipsum dolor sit amet',
  },
]

function RecipientSelector(props) {
  const { config, setConfig, option, index, setOptionByIndex } = props;
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
      options={dummyRecipients}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label="Recipient" />}
    />
  );
}

export default RecipientSelector;