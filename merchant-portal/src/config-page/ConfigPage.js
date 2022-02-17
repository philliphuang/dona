import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const dummyDonationConfigs = [
  {
    id: 0,
    name: "roundup to UNICEF",
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
    name: "Fixed to UNICEF",
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
];

function ConfigPage() {

  // TODO: load real data
  
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{mt:2, mb:2}}>
        {dummyDonationConfigs.map((config, index) => (
          <Card>
            <CardContent>{config.type}</CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default ConfigPage;