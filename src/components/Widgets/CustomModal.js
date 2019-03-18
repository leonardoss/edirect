import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  modal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

class CustomModal extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.openModal}
        onClose={this.props.handleClose}
      >
        <div className={classes.modal}>
          <form noValidate autoComplete="off">
            <Typography variant="title" id="modal-title">
              Create a new project
            </Typography>
            <Divider />
            <TextField
              id="multiline-static"
              label="Project name"
              multiline
              rows="4"
              defaultValue=""
              margin="normal"
              fullWidth
              name="newProjectTitle"
              value={this.props.newProjectTitle}
              onChange={this.props.handleInputChange}
            />
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.props.onClickSave}
            >
              Save
            </Button>
          </form>
        </div>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomModal);
