import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';

import BuildIcon from '@mui/icons-material/Build';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AssessmentIcon from '@mui/icons-material/Assessment';

import DashboardPage from './dashboard-page/DashboardPage';
import ConfigPage from './config-page/ConfigPage';
import DonationsPage from './donations-page/DonationsPage';
import AnalyticsPage from './analytics-page/AnalyticsPage';

import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';

export const RecipientsContext = React.createContext();

const drawerWidth = 240;

function LoadingPage() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={4} sx={{mt:4, mb:4}}>
        <Skeleton variant="rectangular" height={240}/>
        <Skeleton variant="rectangular" height={240}/>
        <Skeleton variant="rectangular" height={240}/>
      </Stack>
    </Container>
  );
}

function MerchantPortal(props) {
  const { publicKey } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [page, setPage] = React.useState("dashboard");
  const [loading, setLoading] = React.useState(true);
  const [merchantInfo, setMerchantInfo] = React.useState();

  React.useEffect(() => {
    if (publicKey) {
      fetch(`http://127.0.0.1:5000/api/merchants/${publicKey}/dashboard`, {
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
          setMerchantInfo(result);
          setLoading(false);
        },
        (error) => {
          switch(error) {
            default:
          }
      });
    }
  }, [publicKey]);

  let pageComponent;
  let pageTitle;
  if (loading) {
    pageComponent = <LoadingPage />;
    pageTitle = "Loading data...";
  } else {
    switch(page) {
      case "dashboard":
        pageComponent = <DashboardPage merchantInfo={merchantInfo} setPage={setPage} />;
        pageTitle = "Dashboard";
        break;
      case "configs":
        pageComponent = <ConfigPage configs={merchantInfo.configs} publicKey={publicKey} />;
        pageTitle = "Configurations";
        break;
      case "analytics":
        pageComponent = <AnalyticsPage analytics={merchantInfo.analytics} />;
        pageTitle = "Analytics";
        break;
      case "donations":
        pageComponent = <DonationsPage donations={merchantInfo.donations} />;
        pageTitle = "Donations";
        break;
      default: 
        pageComponent = <p>Invalid page.</p>;
        pageTitle = "Invalid Page";
    }
  }

  return (
    <RecipientsContext.Provider value={merchantInfo && merchantInfo.available_recipients}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer 
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              borderRight: 0,
              bgcolor: theme.palette.grey[100]
            },
          }}
        >
          <Typography variant="h4" sx={{py:2}} align="center">DONA</Typography>
          <List sx={{flexGrow:1}}>
            <ListItem 
              button 
              onClick={() => setPage("dashboard")}
              // selected={page === "dashboard"}
              sx={{
                borderTopRightRadius:32, 
                borderBottomRightRadius: 32,
                my: 1,
                backgroundColor: page === "dashboard" && theme.palette.grey[300],
              }}
            >
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem 
              button 
              onClick={() => setPage("configs")}
              sx={{
                borderTopRightRadius:32, 
                borderBottomRightRadius: 32,
                my: 1,
                backgroundColor: page === "configs" && theme.palette.grey[300],
              }}
            >
              <ListItemIcon>
                <BuildIcon/>
              </ListItemIcon>
              <ListItemText primary="Configurations" />
            </ListItem>
            <ListItem 
              button 
              onClick={() => setPage("analytics")}
              sx={{
                borderTopRightRadius:32, 
                borderBottomRightRadius: 32,
                my: 1,
                backgroundColor: page === "analytics" && theme.palette.grey[300],
              }}
            >
              <ListItemIcon>
                <AssessmentIcon/>
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItem>
            <ListItem 
              button 
              onClick={() => setPage("donations")}
              sx={{
                borderTopRightRadius:32, 
                borderBottomRightRadius: 32,
                my: 1,
                backgroundColor: page === "donations" && theme.palette.grey[300],
              }}
            >
              <ListItemIcon>
                <PointOfSaleIcon/>
              </ListItemIcon>
              <ListItemText primary="Donations" />
            </ListItem>
          </List>
          <Typography variant="overline" sx={{pb:1}} align="center">MERCHANT PORTAL</Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pb: 2,
          }}>
            <WalletDisconnectButton />
          </Box>
        </Drawer>

        {/* <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            width: 32,
            overflow: 'auto',
            background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`
          }}
        >
        </Box> */}

        <Box
          component="main"
          sx={{
            backgroundColor: theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container sx={{pt:4}}>
           <Typography variant="h2">
              {pageTitle}
            </Typography>
          </Container>
          {pageComponent}
        </Box>
        
      </Box>
    </RecipientsContext.Provider>
  );
}

export default MerchantPortal;