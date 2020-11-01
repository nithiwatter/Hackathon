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
  buttonContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Success(props) {
  const classes = useStyles();
  const { setPage } = props;
  return (
    <div className={classes.root}>
      <div>
        <img src="./authen.svg" style={{ height: 200, margin: 24 }} />
        <Typography variant="h4" align="center">
          Your Secret Key:
        </Typography>
        <Typography variant="body1">
          228e37805e8552113b67fe3f41a05568f9ddec331940ef276a08981b63277d2d
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            style={{ color: "white", width: 300 }}
            onClick={() => setPage(5)}
          >
            Go Vote!
          </Button>
        </div>
      </div>
    </div>
  );
}
