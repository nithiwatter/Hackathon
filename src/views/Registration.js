import React from "react";
import {
  TextField,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
import DescriptionIcon from "@material-ui/icons/Description";
import HowToVoteIcon from "@material-ui/icons/HowToVote";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "4px solid",
    // borderColor: theme.palette.primary.main,
    // borderRadius: 10,
    padding: theme.spacing(4),
    width: 500,
  },
  textfield: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  fileContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  img: {
    position: "absolute",
    width: 400,
    bottom: 50,
    right: 40,
  },
  img2: {
    position: "absolute",
    width: 400,
    bottom: 50,
    left: 20,
  },
}));

export default function Registration(props) {
  const { setPage } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (files) => {
    setOpen(false);
    setFiles(files);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HowToVoteIcon style={{ color: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "white" }}
          >
            Registration
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Paper className={classes.root}>
          <div>
            <div className={classes.textfield}>
              <TextField label="First Name" variant="outlined" />
            </div>
            <div className={classes.textfield}>
              <TextField label="Last Name" variant="outlined" />
            </div>
            <div className={classes.textfield}>
              <TextField label="National ID" variant="outlined" />
            </div>
            <div className={classes.textfield}>
              <TextField
                label="Address"
                variant="outlined"
                multiline
                rows={4}
                style={{ minWidth: 300 }}
              />
            </div>
            {files.length !== 0 && (
              <div className={classes.fileContainer}>
                {files.map((file) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <DescriptionIcon />
                    </IconButton>
                    <Typography>{file.name}</Typography>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleOpen}
                variant="contained"
                color="primary"
                style={{ color: "white" }}
              >
                Add Required Files
              </Button>
              <DropzoneDialog
                open={open}
                showPreviews={true}
                maxFileSize={5000000}
                onSave={handleSave}
                onClose={handleClose}
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: 300, color: "white" }}
                onClick={() => setPage(1)}
              >
                Submit
              </Button>
            </div>
          </div>
          <img src="./verified2.svg" className={classes.img}></img>
          <img src="./safe2.svg" className={classes.img2}></img>
        </Paper>
      </div>
    </>
  );
}
