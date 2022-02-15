import * as React from 'react';
import * as utils from './utils';
import DonationComponent from "./DonationComponent";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const dummyDonationConfigs = {
  "Round Up Donation": {
    id: 0,
    type: "single",
    actions: [
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
  "Fixed Donation Amount": {
    type: "single",
    actions: [
      {
        type: "fixed",
      },
    ],
  },
  "Customer Input": {
    type: "single",
    actions: [
      {
        type: "input",
      },
    ],
  },
  "Multiple Donation Types": {
    type: "multi_type",
    actions: [
      {
        type: "roundup",
      },
      {
        type: "fixed",
      },
      {
        type: "input",
      },
    ],
  },
  "Multiple Recipients": {
    type: "multi_recipient",
    actions: [
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
    actions: [
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
  const [selectedAction, setSelectedAction] = React.useState();
  let donationDollars, recipientName;
  if (selectedAction) {
    donationDollars = utils.centsToDollars(selectedAction.donation_cents);
    recipientName = selectedAction.recipient.name;
  }

  return ( 
    <div>
      <p>{label}</p>
      <DonationComponent config={config} setSelectedAction={setSelectedAction}/>
      <p>Selected donation:</p>
      {
        selectedAction &&
        <p>{donationDollars} to {recipientName}</p>
      }
    </div>
  );
}

function Demo() {
	return (
		<Container maxWidth="sm">
      <Stack 
        spacing={2} 
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