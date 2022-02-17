import * as React from 'react';
import * as utils from './utils';
import DonationComponent from "./DonationComponent";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const dummyDonationConfigs = {
  "Round up to the nearest dollar": {
    id: 0,
    type: "single",
    options: [
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  "Donate a fixed amount": {
    id: 1,
    type: "single",
    options: [
      {
        type: "fixed",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  "Customer enters donation amount": {
    id: 2,
    type: "single",
    options: [
      {
        type: "input",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  "Multiple donation types": {
    id: 3,
    type: "multi_type",
    options: [
      {
        type: "fixed",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "fixed",
        donation_cents: 300,
        purchase_cents: 286,
        transaction_cents: 586,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "fixed",
        donation_cents: 500,
        purchase_cents: 286,
        transaction_cents: 786,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "input",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  "Multiple donation recipients": {
    id: 4,
    type: "multi_recipient",
    options: [
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 1,
          name: "American Red Cross",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 2,
          name: "Charity: Water",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
  "Custom": {
    id: 5,
    type: "custom",
    options: [
      {
        type: "fixed",
        donation_cents: 100,
        purchase_cents: 286,
        transaction_cents: 386,
        recipient: {
          id: 0,
          name: "UNICEF",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "input",
        donation_cents: 500,
        purchase_cents: 286,
        transaction_cents: 786,
        recipient: {
          id: 1,
          name: "American Red Cross",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
      {
        type: "roundup",
        donation_cents: 14,
        purchase_cents: 286,
        transaction_cents: 300,
        recipient: {
          id: 2,
          name: "Charity: Water",
          wallet: "loremipsumdolorsitamet",
          description: 'lorem ipsum dolor sit amet',
        }
      },
    ],
  },
};

function DemoComponent(props) {
  const { label, config } = props;
  const [selectedOption, setSelectedOption] = React.useState();
  let donationDollars, recipientName;
  if (selectedOption) {
    donationDollars = utils.centsToDollars(selectedOption.donation_cents);
    recipientName = selectedOption.recipient.name;
  }

  return ( 
    <Stack spacing={1}>
      <Typography variant="h6">{label}</Typography>
      <Box sx={{bgcolor:"#e7ebf0", pt:4, pb:4, borderRadius: 2}}>
        <DonationComponent config={config} setSelectedOption={setSelectedOption}/>
      </Box>
      {
        selectedOption &&
        <Alert severity="info">Selected donation option: ${donationDollars} to {recipientName}</Alert>
      }
    </Stack>
  );
}

function Demo() {
	return (
		<Container maxWidth="sm" sx={{mt:2, mb:2}}>
      <Typography variant="h4" align="center">Checkout Donations Demo</Typography>
      <Stack 
        spacing={2} 
        sx={{pt:2, pb:2}}
        divider={<Divider />}
      >
      	{Object.entries(dummyDonationConfigs).map((example, index) => (
          <DemoComponent key={index} label={example[0]} config={example[1]}/>
				))}
      </Stack>
    </Container>
	);
}

export default Demo;