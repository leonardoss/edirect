import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import withStyles from '@material-ui/core/styles/withStyles';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  IconButton,
} from '@material-ui/core';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

class Layout extends React.Component {
  handleNavigation(route) {
    const { history } = this.props;
    history.push(route);
  }
  render() {
    const { classes, children, user, authSignOut } = this.props;
    const initials =
      user && user.displayName
        ? user.displayName.slice(0, 2).toUpperCase()
        : false;
    return (
      <Grid container className="main" spacing={0}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.grow}
              >
                Edirect - Leonardo Silva - Developer Technical Test
              </Typography>
              {user && (
                <IconButton aria-haspopup="true" color="inherit">
                  <Avatar onClick={authSignOut}>{initials}</Avatar>
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    store => ({
      user: store.UserReducer.user,
    }),
    {
      ...actions,
    }
  )
)(withRouter(Layout));
