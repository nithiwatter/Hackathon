import { Button, Typography, makeStyles } from "@material-ui/core";

import React from "react";
import {
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 400,
  },
}));

export default function Success() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src="./helpful.svg" className={classes.img} />
      <TextField label="Voted" />
    </div>
  );
}
