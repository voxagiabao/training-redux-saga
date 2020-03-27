import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thêm mới công việc"}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
            margin="normal"
            className={classes.textField}
          />
          <TextField
            id="standard-name"
            label="Description"
            margin="normal"
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
