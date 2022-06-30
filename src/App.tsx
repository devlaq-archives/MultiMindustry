import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@mui/material';
import {BottomNavigation, BottomNavigationAction, Box, Button, ButtonGroup, Paper, Tabs} from "@mui/material";
import {Article, Settings} from "@mui/icons-material";


function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="App">
      <Box>
        <Button>
          {value}
        </Button>
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomNavigation
              showLabels
              value={value}
              onChange={handleChange}
          >
            <BottomNavigationAction label="Instances" icon={<Article />} />
            <BottomNavigationAction label="Settings" icon={<Settings />} />
          </BottomNavigation>
        </Box>
      </Box>
    </div>
  );
}

export default App;
