import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '../Grid/Grid';
import Typography from '@material-ui/core/Typography';

storiesOf('Grid', module)
  .add('Grid', () => (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Typography noWrap>{'hello there!'}</Typography>
      </Grid>
    </>
  ))
