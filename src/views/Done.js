import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

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
    </div>
  );
}
