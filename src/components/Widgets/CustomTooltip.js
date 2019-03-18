import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button, Tooltip } from '@material-ui/core';

const styles = theme => ({
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const CustomTooltip = props => {
  return (
    <Tooltip title="Add new Project">
      <Button
        variant="fab"
        color="secondary"
        className={props.classes.button}
        onClick={props.handleOpen}
      >
        <AddIcon />
      </Button>
    </Tooltip>
  );
};

export default withStyles(styles)(CustomTooltip);
