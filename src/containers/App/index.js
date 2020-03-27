import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import styles from "./styles";
import Taskboard from "../Taskboard/index";
import theme from "../../commons/Theme/index";

class App extends Component {
  render() {
    const test = null;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
