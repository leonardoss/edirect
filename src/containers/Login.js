import React from 'react';

import Layout from '../layout';
import Form from '../components/Form';

import { Grid } from '@material-ui/core';

const Login = () => (
  <Layout>
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item xs={11} md={5}>
        <Form />
      </Grid>
    </Grid>
  </Layout>
);

export default Login;
