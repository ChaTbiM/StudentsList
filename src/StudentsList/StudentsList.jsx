import React from "react";
// import StudentsListItem from "./StudentsListItem";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import style from "./StudentsList.css.js";

export default function StudentsList(props) {
  const classes = style();
  const renderStudentsList = props.students.map((student) => {
    return (
      <ListItem
        button
        key={`student-${student.id}`}
        name={student.fullName}
        id={student.id}
        className={classes.students__list__item}
      >
        <ListItemText primary={student.fullName} />
      </ListItem>
    );
  });
  return (
    <div className={classes.students__container}>
      <List className={classes.students__list}>{renderStudentsList}</List>
    </div>
  );
}
