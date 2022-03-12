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

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

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
      // TODO: update to be general merchant info endpoint
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}}>
              {pageTitle}
            </Typography>
            <WalletDisconnectButton/>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography variant="h4">DONA</Typography>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem 
              button 
              onClick={() => setPage("dashboard")}
              selected={page === "dashboard"}
            >
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem 
              button 
              onClick={() => setPage("configs")}
              selected={page === "configs"}
            >
              <ListItemIcon>
                <BuildIcon/>
              </ListItemIcon>
              <ListItemText primary="Configurations" />
            </ListItem>
            <ListItem 
              button 
              onClick={() => setPage("analytics")}
              selected={page === "analytics"}
            >
              <ListItemIcon>
                <AssessmentIcon/>
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItem>
            <ListItem 
              button 
              onClick={() => setPage("donations")}
              selected={page === "donations"}
            >
              <ListItemIcon>
                <PointOfSaleIcon/>
              </ListItemIcon>
              <ListItemText primary="Donations" />
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <DrawerHeader/>
          {pageComponent}
        </Box>
      </Box>
    </RecipientsContext.Provider>
  );
}

export default MerchantPortal;