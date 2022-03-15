import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DonationComponent from '@riptide-dona/react-components.ui.donation-component';

import { styled, useTheme } from '@mui/material/styles';

export function centsToDollars(cents) {
  return (cents / 100).toLocaleString(
    "en-US", 
    {
      style:"currency", 
      currency:"USD"
    }
  );
}

const publicKey = "35pQAYGCE95rnzJvYFtxGhpnDpMoZKzk6f5DxJhGszE9";
const items = [
  {
    name: "Item 1",
    description: "Item 1 description",
    cents: 599,
  },
  {
    name: "Item 2",
    description: "Item 2 description",
    cents: 399,
  },
  {
    name: "Item 1",
    description: "Item 3 description",
    cents: 1699,
  }
]

function CheckoutItem(props) {
  const { item } = props;

  return (
    <ListItem disableGutters>
      <ListItemAvatar>
        <Avatar variant='rounded' sx={{ mr:4, width: 72, height: 72 }}/>
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={item.description}/>
      <Typography>{centsToDollars(item.cents)}</Typography>
    </ListItem>
  );
}

function CheckoutDemo() {
  const [selectedOption, setSelectedOption] = React.useState();
  const theme = useTheme();
  const itemCents = items.reduce((prev, current) => prev + current.cents, 0);
  const shippingCents = 299;
  const taxRate = 0.07;
  const taxCents = Math.round((itemCents + shippingCents) * taxRate);
  const preDonationCents = itemCents + shippingCents + taxCents;

  const transactionCents = 
    selectedOption ? 
    selectedOption.transaction_cents : 
    preDonationCents;

	return (
    <Box sx={{bgcolor: theme.palette.grey[100], height: '100vh'}}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={8}>
            <Stack spacing={2} sx={{py:4, mr:4}}>
              <Typography variant="h2">
                Checkout
              </Typography>
              <Paper>
                <Stack 
                  direction="row" 
                  divider={<Divider orientation="vertical" flexItem />} 
                  justifyContent="space-between"
                >
                  <Box sx={{flexGrow:1, p:4}}>
                    <Typography variant="h5" gutterBottom>Shipping Address</Typography>
                    <Typography>Mark Zuckerberg</Typography>
                    <Typography>1 Facebook Way</Typography>
                    <Typography>Menlo Park, CA</Typography>
                  </Box>
                  <Box sx={{flexGrow:1, p:4}}>
                    <Typography variant="h5" gutterBottom>Billing Address</Typography>
                    <Typography>Same as shipping address.</Typography>
                  </Box>
                </Stack>
              </Paper>
              <Paper sx={{p:4}}>
                <Typography variant="h5" gutterBottom>
                  Your Cart
                </Typography>
                <Stack spacing={2} divider={<Divider />}>
                  
                  { 
                    items.map(
                      (item, index) => <CheckoutItem item={item} key={index} />
                    ) 
                  }
                </Stack>
              </Paper>
            </Stack>
          </Grid>
          <Grid item lg={4}>
            <Paper 
              sx={{
                mt:4,
                p:4,
                height: 720,
                display:"flex", 
                flexDirection: "column", 
                justifyContent:"space-between"
              }}
            >
              <Box>
                <Typography variant="h5" align="center" gutterBottom>
                  Order Summary
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Items" />
                    <Typography>{centsToDollars(itemCents)}</Typography>
                  </ListItem>
                  <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Shipping" />
                    <Typography>{centsToDollars(shippingCents)}</Typography>
                  </ListItem>
                  <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Tax" />
                    <Typography>{centsToDollars(taxCents)}</Typography>
                  </ListItem>
                  {
                    selectedOption &&  
                    <ListItem sx={{ py: 1, px: 0 }}>
                      <ListItemText primary={"Donation to " + selectedOption.recipient.name} />
                      <Typography>{centsToDollars(selectedOption.donation_cents)}</Typography>
                    </ListItem>
                  }
                </List>
              </Box>
              <Box>
                <DonationComponent 
                  merchantPublicKey={publicKey} 
                  purchaseCents={preDonationCents}
                  setSelectedOption={setSelectedOption}
                />
                <ListItem sx={{ py: 2, px: 0 }}>
                  <ListItemText primary="Total" primaryTypographyProps={{ fontWeight: 700 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {centsToDollars(transactionCents)}
                  </Typography>
                </ListItem>
                <Button variant="contained" fullWidth size="large">Pay with Solana Pay</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
	);
}

export default CheckoutDemo;