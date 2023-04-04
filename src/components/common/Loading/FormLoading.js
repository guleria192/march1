import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material";

function FormLoading({ fields = 4, height }) {
  return (
    <Grid container spacing={2} className="onboarding-container">
      {[...Array(fields)].map((_, i) => {
        return (
          <Grid item xs={12} md={6}>
            <Skeleton key={i} animation="wave" height={height} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FormLoading;
