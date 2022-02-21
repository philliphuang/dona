import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ConfigCard from './ConfigCard';
import NewConfigButton from './NewConfigButton';

function ConfigPage() {
  const [merchantConfigs, setMerchantConfigs] = React.useState();

  // TODO: save when merchantConfigs change

  console.log("merchantConfigs " + JSON.stringify(merchantConfigs));

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
      <Stack spacing={4} sx={{mt:4, mb:4}}>
        {
          merchantConfigs && 
          merchantConfigs.active_config &&
            <ConfigCard 
              initialConfig={merchantConfigs.active_config} 
              isActive={true}
              setMerchantConfigs={setMerchantConfigs}
            />
        }
        {
          merchantConfigs && 
          merchantConfigs.inactive_configs && 
          merchantConfigs.inactive_configs.map((config, index) => (
            <ConfigCard 
              key={index} 
              index={index} 
              initialConfig={config} 
              isActive={false} 
              setMerchantConfigs={setMerchantConfigs}
            />
          ))
        }
        <NewConfigButton setMerchantConfigs={setMerchantConfigs}/>
      </Stack>
    </Container>
  );
}

export default ConfigPage;