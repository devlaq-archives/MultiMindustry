import React from "react";
import {Box, Slide} from "@mui/material";

interface BottomNavigationViewProps {
  id: number
  children: React.ReactElement
}

class BottomNavigationView extends React.Component<BottomNavigationViewProps> {

  render() {
    return (
        this.props.children
    )
  }

}

interface BottomNavigationContextProps {
  enabled: number
  children: React.ReactElement<BottomNavigationViewProps>[]
}

class BottomNavigationContext extends React.Component<BottomNavigationContextProps> {

  override render() {
    this.props.children.forEach(c => {
      console.log(`${c.props.id}, ${this.props.enabled}, ${c.props.id === this.props.enabled}`)
    })
    return this.props.children.filter(v => v.props.id === this.props.enabled)[0]
  }

}

export {
  BottomNavigationView,
  BottomNavigationContext
};