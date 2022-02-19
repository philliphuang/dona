import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DonationComponent from '@demo-organization/demo-scope.ui.donation-component';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

  const [activeToggleDialogOpen, setActiveToggleDialogOpen] = React.useState(false);
  const handleActiveToggleDialogClickOpen = () => {
    setActiveToggleDialogOpen(true);
  };
  const handleActiveToggleDialogClose = () => {
    setActiveToggleDialogOpen(false);
  };
  const handleActiveToggleConfirm = () => {
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
    handleActiveToggleDialogClose();
  }

  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const handleDeleteDialogClickOpen = () => {
    setDeleteDialogOpen(true);
  };
  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };
  const handleDeleteConfirm = () => {
    if (isActive) {
      setMerchantConfigs(
        (prevMerchantConfigs) => {
          return {
            "inactive_configs": prevMerchantConfigs.inactive_configs,
          };
        }
      );
    } else {
      setMerchantConfigs(
        (prevMerchantConfigs) => {
          prevMerchantConfigs.inactive_configs.splice(index, 1);
          return {
            ...prevMerchantConfigs,
            "inactive_configs": prevMerchantConfigs.inactive_configs,
          };        
        }
      )
    }
    handleDeleteDialogClose();
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
            onClick={handleActiveToggleDialogClickOpen}
          >
            {isActive ? "Set as inactive" : "Set as active"}
          </Button>
          <Dialog
            open={activeToggleDialogOpen}
            onClose={handleActiveToggleDialogClose}
            maxWidth="xs"
          >
            <DialogTitle>
              {
                isActive ? 
                'Set "' + config.name + '" as inactive?' : 
                'Set "' + config.name + '" as your active configuration?'
              }
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {
                  isActive ? 
                  "Your checkout systems will stop using this donation configuration immediately." : 
                  "Your checkout systems will begin using this donation configuration immediately."
                }
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleActiveToggleDialogClose}>Cancel</Button>
              <Button onClick={handleActiveToggleConfirm} autoFocus>
                Set as {isActive ? "Inactive" : "Active"}
              </Button>
            </DialogActions>
          </Dialog>
          <Box sx={{display: 'flex', flexGrow: 1, justifyContent:"flex-end", flexDirection: "row"}}>
            <Button 
              disabled={editing} 
              color="error" 
              onClick={handleDeleteDialogClickOpen}
            >
              Delete
            </Button>
          </Box>
          <Dialog
            open={deleteDialogOpen}
            onClose={handleDeleteDialogClose}
            maxWidth="xs"
          >
            <DialogTitle>
              Delete "{config.name}"?
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                You cannot undo this.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteDialogClose}>Cancel</Button>
              <Button onClick={handleDeleteConfirm} autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
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