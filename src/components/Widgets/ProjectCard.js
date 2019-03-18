import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent } from '@material-ui/core';

const styles = theme => ({
  card: {
    width: '200',
    float: 'left',
    margin: '10px',
    paddingBottom: theme.spacing.unit * 2,
  },
});

const ProjectCard = props => {
  return (
    <Card className={props.classes.card}>
      <CardContent>
        <Typography variant="headline" component="h3">
          {props.item.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ProjectCard);
