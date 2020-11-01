import React from "react";
import {
  makeStyles,
  Typography,
  Button,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
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
  container: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
}));

const categories = ["A", "B", "C"];

export default function Final() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img src="./vote.svg" style={{ height: 140, margin: 24 }} />
        <Typography variant="h4" align="center">
          Choose your candidate!
        </Typography>
        <div className={classes.container}>
          <FormControl>
            <InputLabel htmlFor="category-simple">Candidate</InputLabel>
            <Select style={{ width: 300 }}>
              {categories.map((category) => (
                <MenuItem value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ color: "white" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
