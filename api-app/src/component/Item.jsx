import React from "react";
import { Grid, Link, Paper, Typography } from "@mui/material";

export default function Item(props) {
  return (
    <Grid container gap={0}>

      <Grid item lg={12} md={12} className="">
        <img src="https://picsum.photos/id/237/340/180"></img>
      </Grid>

      <h2 style={{ margin: "auto" }}>Title</h2>

      <Typography sx={{ textAlign: "justify", padding: "0 10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quos.
      </Typography>

      <Grid item xs={12} mt={2} ml={2}>
        <Link>Read More</Link>
      </Grid>

      <Typography sx={{marginLeft: '70%',fontSize: '18px'}}>-By rtyuio</Typography>

    </Grid>
  );
}
