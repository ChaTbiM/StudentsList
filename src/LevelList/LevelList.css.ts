import { makeStyles } from "@material-ui/core/styles";

let useStyles;

export default useStyles = makeStyles((theme) => ({
  level__container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  level__list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    maxHeight: "200px",
    overflowY: "scroll",
  },
  level__list__item: {},
}));
