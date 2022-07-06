import React from "react";
import {Box, Fab} from "@mui/material";
import {Add} from "@mui/icons-material";


class Instances extends React.Component {

  render() {
    return(
      <Box sx={{ width: "100%", height: "100%" }}>
        <Fab
          sx={{ bottom: 16, right: 16 }}
        >
          <Add/>
        </Fab>
      </Box>
    )
  }

}

export {
  Instances
};