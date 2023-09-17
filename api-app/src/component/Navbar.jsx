import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Interface = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        display={"flex"}
        flexWrap={'wrap'}
        alignItems={"center"}
        justifyContent={"space-around"}
        p={3}
        sx={{ backgroundColor: "#3F3D56",color: 'whitesmoke', fontWeight: '500', fontFamily: 'Roboto'}}
      >
        <h3 style={{padding: '0 6px'}}>Home</h3>
        <h3 style={{padding: '0 6px'}}>Trending</h3>
        <h3 style={{padding: '0 6px'}}>International</h3>
        <h3 style={{padding: '0 6px'}}>Business</h3>
        <Grid item>
          <input style={{padding: '10px', placeholder: 'Search here'}}></input>
        </Grid>
      </Grid>
    </>
  );
};

export default Interface;
