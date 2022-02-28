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
import DonationComponent from '@demo-organization/demo-scope.ui.donation-component';

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

function CheckoutDemo() {
  const [selectedOption, setSelectedOption] = React.useState();

  const itemCents = 949
  const shippingCents = 299;
  const taxRate = 0.07;
  const taxCents = Math.round((itemCents + shippingCents) * taxRate);
  const preDonationCents = itemCents + shippingCents + taxCents;

  const transactionCents = 
    selectedOption ? 
    selectedOption.transaction_cents : 
    preDonationCents;

	return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <Box sx={{p:4}}>
            <Typography variant="h4" gutterBottom>
              Your Cart
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Paper 
            elevation={4}
            sx={{
              my:4,
              p:4,
              height:640,
              display:"flex", 
              flexDirection: "column", 
              justifyContent:"space-between"
            }}
          >
            <Box>
              <Typography variant="h4" align="center" gutterBottom>
                Order Summary
              </Typography>
              <List disablePadding>
                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary="Item total" />
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
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {centsToDollars(transactionCents)}
                </Typography>
              </ListItem>
              <Button variant="contained" fullWidth>Pay with Solana Pay</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
	);
}

export default CheckoutDemo;