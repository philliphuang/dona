import * as React from 'react';
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
export default ConfigCard;