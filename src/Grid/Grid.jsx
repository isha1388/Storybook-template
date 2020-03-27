import * as React from 'react';
import {Grid as MGrid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Grid() {
    return <MGrid>
        <Typography noWrap>{'hello there!'}</Typography>
        </MGrid>
  }