import React from 'react';

import { Snackbar } from '@material-ui/core';

const CustomTooltip = props => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={props.openSnack}
      onClose={props.handleCloseSnack}
      ContentProps={{ 'aria-describedby': 'message-id' }}
      message={<span id="message-id">{props.msg}</span>}
    />
  );
};

export default CustomTooltip;
