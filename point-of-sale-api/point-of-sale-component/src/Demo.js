import DonationComponent from "./DonationComponent";

import Container from '@mui/material/Container';

function Demo() {
  const dummyDonationConfigs = {
    "Round Up Donation": {
      type: "single",
      donation_actions: [
        {
          type: "roundup",
        },
      ],
    },
    "Fixed Donation Amount": {
      type: "single",
      donation_actions: [
        {
          type: "fixed",
        },
      ],
    },
    "Customer Input": {
      type: "single",
      donation_actions: [
        {
          type: "input",
        },
      ],
    },
    "Multiple Donation Types": {
      type: "multi_type",
      donation_actions: [
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
      donation_actions: [
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
      donation_actions: [
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

	return (
		<Container maxWidth="sm">
      	{Object.entries(dummyDonationConfigs).map((donation_config, index) => (
          <div>
            <p>{donation_config[0]}</p>
            <DonationComponent key={index} donation_config={donation_config[1]} />
          </div>
				))}
    </Container>
	);
}

export default Demo;