import React from 'react';
import './App.css';
import '@mui/material';
import {BottomNavigation, BottomNavigationAction, Box, Button} from "@mui/material";
import {Article, Settings} from "@mui/icons-material";
import {BottomNavigationContext, BottomNavigationView} from "./components/BottomNavigationView";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="App">
      <BottomNavigationContext enabled={value}>
        <BottomNavigationView id={0}>
          <Button>
            1
          </Button>
        </BottomNavigationView>
        <BottomNavigationView id={1}>
          <Button>
            2
          </Button>
        </BottomNavigationView>
      </BottomNavigationContext>
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
        >
          <BottomNavigationAction value={0} label="Instances" icon={<Article />} />
          <BottomNavigationAction value={1} label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default App;
