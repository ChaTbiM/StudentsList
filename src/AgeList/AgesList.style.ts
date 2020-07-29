import { makeStyles } from "@material-ui/core/styles";

let useStyles;

export default useStyles = makeStyles((theme) => ({
  age__container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  age__list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    maxHeight: "200px",
    overflowY: "scroll",
  },
  age__list__item: {},
}));
