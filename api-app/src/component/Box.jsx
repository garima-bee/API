import React from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import Item from './Item';

export default function Box() {
  return (
    <Grid container p={2}>
      <Grid item lg={3} md={3} className="" sx={{height: '', border: '5px solid grey'}}>
        <Item />
      </Grid>
    </Grid>
  )
}
