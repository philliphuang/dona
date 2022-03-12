import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function centsToDollars(cents) {
  const dollars = (cents / 100).toLocaleString(
    "en-US", 
    {
      style:"decimal", 
      currency:"USD", 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  if (cents % 100 === 0) {
    return dollars.substring(0, dollars.length - 3);
  } else {
    return dollars;
  }
}

function DonationsPage(props) {
  const { donations } = props;

  return (
    <Container>
      <TableContainer component={Paper} sx={{my:4}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Donation Amount</TableCell>
              <TableCell>Recipient</TableCell>
              <TableCell>Donation Type</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations.map((donation, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {'$' + centsToDollars(donation.donation_amount)}
                </TableCell>
                <TableCell>{donation.recipient_name}</TableCell>
                <TableCell>{donation.donation_type}</TableCell>
                <TableCell>{donation.reference}</TableCell>
                <TableCell>{donation.date_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default DonationsPage;