import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const dummyDonationConfigs = [];

function ConfigPage() {

  // TODO: load real data
  
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{mt:2, mb:2}}>
        {dummyDonationConfigs.map((config, index) => (
          <Card>
            <CardContent>
              <Typography>{config.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default ConfigPage;