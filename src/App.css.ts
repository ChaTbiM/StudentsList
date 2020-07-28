import { makeStyles } from "@material-ui/core/styles";

let useStyles;

export default useStyles = makeStyles((theme) => ({
  App: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  root: {
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    alignItems: "stretch",
  },
  paper: {
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
