import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DonationComponent from '@demo-organization/demo-scope.ui.donation-component';

export const dummyDonationConfigs = [
  {
    id: 0,
    name: "Round up to the nearest dollar",
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
  {
    id: 1,
    name: "Donate a fixed amount",
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
  {
    id: 2,
    name: "Customer enters donation amount",
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
  {
    id: 3,
    name: "Multiple donation types",
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
  {
    id: 4,
    name: "Multiple donation recipients",
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
  {
    id: 5,
    name: "Complex custom configurations",
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
];

function ConfigPage() {
  const [selectedOption, setSelectedOption] = React.useState();
  // TODO: load real data
  
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{mt:2, mb:2}}>
        {dummyDonationConfigs.map((config, index) => (
          <Card key={index}>
            <CardContent>
              <DonationComponent config={config} setSelectedOption={setSelectedOption}/>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default ConfigPage;