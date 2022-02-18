import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DonationComponent from '@demo-organization/demo-scope.ui.donation-component';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

function ConfigCard(props) {
  const { isActive, config } = props;
  const [selectedOption, setSelectedOption] = React.useState();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{config.name}</Typography>
        <Box sx={{bgcolor:"#e7ebf0", pt:4, pb:4, mt:2,  borderRadius: 2}}>
          <DonationComponent config={config} setSelectedOption={setSelectedOption}/>
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={handleExpandClick}>Edit</Button>
        <Button>Delete</Button>
        <Button>Set as active</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Editing options</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function ConfigPage() {
  const [merchantConfigs, setMerchantConfigs] = React.useState();

  React.useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/merchants/test-id/donation-configs`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include",
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw res.status;
      }
    })
    .then(
      (result) => {
        console.log(result);
        setMerchantConfigs(result);
      },
      (error) => {
        switch(error) {
          default:
        }
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{mt:2, mb:2}}>
        {
          merchantConfigs &&
            <ConfigCard config={merchantConfigs.active_config} isActive={true}/>
        }
        {merchantConfigs && merchantConfigs.inactive_configs.map((config, index) => (
          <ConfigCard key={index} config={config} isActive={false}/>
        ))}
      </Stack>
    </Container>
  );
}

export default ConfigPage;