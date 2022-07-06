import React from "react";
import {Box, Fade, Grow, Slide} from "@mui/material";
import {Error} from "@mui/icons-material";

interface ErrorBoundaryState {
  error: any
}

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {

  constructor(props: any) {
    super(props);
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: any) {
    return { error: error.toString() }
  }

  override render() {
    if(this.state.error) {
      return(
          <Slide in={true} direction={"down"}>
            <Box>
              <Error/>
              <h1>
                {this.state.error}
              </h1>
            </Box>
          </Slide>
      )
    }
    return this.props.children;
  }

}

export {
  ErrorBoundary
};