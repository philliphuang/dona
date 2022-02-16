import * as React from 'react';
import * as utils from './utils';
import DonationComponent from "./DonationComponent";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
  "Customer inputs donation amount": {
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
  "Multiple Donation Types": {
    id: 3,
    type: "multi_type",
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
  "Multiple Recipients": {
    type: "multi_recipient",
    options: [
      {
        type: "roundup",
      },
      {
        type: "roundup",
      },
      {
        type: "roundup",
      },
    ],
  },
  "Custom": {
    type: "custom",
    options: [
      {
        type: "roundup",
      },
      {
        type: "fixed",
      },
      {
        type: "fixed",
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
    <div>
      <Typography variant="h6">{label}</Typography>
      <Box sx={{bgcolor:"#f7f7f7", p:4, borderRadius: 2}}>
        <DonationComponent config={config} setSelectedOption={setSelectedOption}/>
      </Box>
      {
        selectedOption &&
        <Typography>Selected donation option: ${donationDollars} to {recipientName}</Typography>
      }
    </div>
  );
}

function Demo() {
	return (
		<Container maxWidth="sm">
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