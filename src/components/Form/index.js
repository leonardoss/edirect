import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Feedback from './FormFeedback/FormFeedback';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { isEmpty } from '../../helpers/utils';

import withStyles from '@material-ui/core/styles/withStyles';
import LockIcon from '@material-ui/icons/LockOutlined';
import {
  Typography,
  Grid,
  Avatar,
  Button,
  Divider,
  Paper,
  Input,
  InputLabel,
  FormControl,
} from '@material-ui/core';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    maxWidth: 400,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: { username: '', password: '', general: '' },
      usernameValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'error';
  }

  validateField = (fieldName, value) => {
    let fieldErrors = this.state.errors,
      usernameValid = this.state.usernameValid,
      passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'username':
        usernameValid = value.length >= 4;
        fieldErrors.username = usernameValid
          ? ''
          : 'Please, fill the field (minimum 4 characteres)';
        break;
      case 'password':
        passwordValid = value.length >= 4;
        fieldErrors.password = passwordValid
          ? ''
          : 'Please, fill the field (minimum 4 characteres)';
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: fieldErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid,
    });
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        '/login',
        {
          email: this.state.username,
          password: this.state.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(response => {
        const userInfo = {
          id: response.data.user.id,
          displayName: response.data.user.name,
          email: response.data.user.email,
          projects: response.data.user.projects,
        };
        this.props.isAuthenticated(userInfo);
      })
      .catch(error => {
        this.setState({
          errors: {
            ...this.state.errors,
            general: 'Invalid credentials',
          },
        });
      });
  };

  componentWillReceiveProps = (newProps, nextContext) => {
    if (!isEmpty(newProps.user)) {
      this.props.history.push('/dashboard');
    }
  };

  render() {
    const { state } = this;
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="subheading">Please, sign-in</Typography>
        <form
          className={classes.form}
          onSubmit={event => this.handleSubmit(event)}
        >
          <Divider />

          <Grid item xs={12}>
            <FormControl
              margin="normal"
              required
              fullWidth
              className={`form-item ${this.errorClass(state.errors.username)}`}
            >
              <InputLabel htmlFor="username">E-mail / User</InputLabel>
              <Input
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
                value={state.username}
                onChange={event => this.handleUserInput(event)}
              />
              <Feedback message={state.errors.username} />
            </FormControl>
            <FormControl
              margin="normal"
              required
              fullWidth
              className={`form-item ${this.errorClass(state.errors.password)}`}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.password}
                onChange={event => this.handleUserInput(event)}
              />
              <Feedback message={state.errors.password} />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="secondary"
              className={classes.submit}
              disabled={!state.formValid}
            >
              Sign-in
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              <Feedback message={state.errors.general} />
            </Typography>
          </Grid>
        </form>
      </Paper>
    );
  }
}

Form.propTypes = {
  isAuthenticated: PropTypes.func,
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    store => ({
      user: store.UserReducer.user,
    }),
    {
      ...actions,
    }
  )
)(Form);
