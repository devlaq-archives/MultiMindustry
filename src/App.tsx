import React from 'react';
import './App.css';
import '@mui/material';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Drawer,
  Tab,
  Toolbar,
  Typography
} from "@mui/material";
import {Article, Settings} from "@mui/icons-material";
import {ErrorBoundary} from "./components/ErrorBoundary";
import {Menu} from "./components/Menu";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Multimin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open
        >
          <Toolbar/>
          <Menu/>
        </Drawer>
      </ErrorBoundary>
    </div>
  );
}

export default App;
