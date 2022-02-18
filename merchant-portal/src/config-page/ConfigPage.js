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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ConfigCard(props) {
  const { index, isActive, initialConfig, setMerchantConfigs } = props;
  const [config, setConfig] = React.useState(initialConfig);
  const [editing, setEditing] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState();

  React.useEffect(() => {
    setConfig(initialConfig);
  }, [initialConfig]);

  const handleEditClick = () => {
    if (editing) {
      // save
    }
    setEditing(!editing);
  };

  const handleActiveToggleClick = () => {
    // TODO: modal to confirm this
    if (isActive) {
      setMerchantConfigs(
        (prevMerchantConfigs) => {
          return {
            "inactive_configs": [config, ...prevMerchantConfigs.inactive_configs],
          };
        }
      );
    } else {
      setMerchantConfigs(
        (prevMerchantConfigs) => {
          if (prevMerchantConfigs.active_config) {
            prevMerchantConfigs.inactive_configs.splice(index, 1);
            return {
              "active_config": config,
              "inactive_configs": [prevMerchantConfigs.active_config, ...prevMerchantConfigs.inactive_configs],
            };
          } else {
            prevMerchantConfigs.inactive_configs.splice(index, 1);
            return {
              "active_config": config,
              "inactive_configs": prevMerchantConfigs.inactive_configs,
            };
          }
         
        }
      )
    }
  }

  const handleDeleteClick = () => {
    // show modal, confirm delete
  }

  return (
    <div>
      <Card variant="outlined" sx={isActive ? {borderColor:"success.light", borderWidth:2} : {}}>
        <CardContent>
          <Typography variant="h6" sx={{mb:2}}>{config.name}</Typography>
          <Box sx={{bgcolor:"#e7ebf0", pt:4, pb:4, mt:2,  borderRadius: 2}}>
            <DonationComponent config={config} setSelectedOption={setSelectedOption}/>
          </Box>
        </CardContent>
        <CardActions>
          <Button 
            onClick={handleEditClick} 
            color={editing ? "success" : "primary"}
          >
            {editing ? "Save" : "Edit"}
          </Button>
          <Button 
            disabled={editing} 
            onClick={handleActiveToggleClick}
          >
            {isActive ? "Set as inactive" : "Set as active"}
          </Button>
          <Box sx={{display: 'flex', flexGrow: 1, justifyContent:"flex-end", flexDirection: "row"}}>
            <Button 
              disabled={editing} 
              color="error" 
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Box>
        </CardActions>
        <Collapse in={editing} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>Editing options</Typography>
          </CardContent>
        </Collapse>
      </Card>
      {
        isActive &&
        <Box sx={{m:1, display: 'flex', flexGrow: 1, justifyContent:"center", flexDirection: "row"}}>
        <CheckCircleOutlineIcon sx={{color:'success.light', mr:1}}/>
        <Typography align="center" sx={{fontWeight:"medium"}} color="success.light">ACTIVE</Typography>
        </Box>
      }
    </div>
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
      </Stack>
    </Container>
  );
}

export default ConfigPage;