import React, {Component} from "react";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon} from "@mui/material";
import {Article, Settings, SvgIconComponent} from "@mui/icons-material";

interface MenuProps {
  onClick: (item: string) => void;
}

class Menu extends React.Component {

  render() {
    const items = new Map<string, React.ReactElement>();
    items.set("Mindustry", <Article/>)
    items.set("Settings", <Settings/>)

    const elements = new Array<React.ReactElement>();
    items.forEach((v, k) => {
      elements.push(
          <ListItem key={k}>
            <ListItemButton>
              <ListItemIcon>
                {v}
              </ListItemIcon>
              <ListItemText>
                {k}
              </ListItemText>
            </ListItemButton>
          </ListItem>
      )
    })

    return (
      <div>
        <List>
          {elements}
        </List>
      </div>
    );
  }
}

export {
  Menu
}