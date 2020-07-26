import { makeStyles } from "@material-ui/core/styles";

let useStyles;

export default useStyles = makeStyles((theme) => ({
  students__container: {
    width: "100%",
  },
  students__list: {
    maxHeight: "200px",
    overflowY: "scroll",
  },
  students__list__item: {},
}));
