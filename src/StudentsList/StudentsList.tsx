import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import style from "./StudentsList.css.js";
// interfaces
import { IStudent, Dispatch, IStudentListItemProps } from "../interfaces.js";
import initialState from "../store/initialState.js";
// constants
import {
  searchStudent,
  sortAscStudents,
  sortDescStudents,
} from "../store/action.ts";

const StudentsList: React.FC<{ students: IStudent[]; dispatch: Dispatch }> = ({
  students,
  dispatch,
}) => {
  const classes = style();

  const renderStudentsList: JSX.Element[] = students.map(
    (student: IStudent) => {
      const listItemProps: IStudentListItemProps = {
        key: `student-${student.id}`,
        name: student.fullName,
        id: student.id,
      };
      return (
        <ListItem
          {...listItemProps}
          button
          className={classes.students__list__item}
        >
          <ListItemText primary={student.fullName} />
        </ListItem>
      );
    }
  );

  const keypressHandler = (dispatch: Dispatch, e: Event) => {
    let searchedName: any = e.target.value;
    let initialStudents: IStudent[] = initialState().students;
    searchStudent(dispatch, initialStudents, searchedName);
  };

  const sortAscHandler = (dispatch: Dispatch, students: IStudent[]) => {
    console.log(students, "students asc");
    sortAscStudents(dispatch, students);
  };

  const sortDescHandler = (dispatch: Dispatch, students: IStudent[]) => {
    console.log(students, "students asc");
    sortDescStudents(dispatch, students);
  };

  return (
    <div className={classes.students__container}>
      <form className={classes.students__form} noValidate autoComplete="off">
        <TextField
          onChange={(e) => keypressHandler(dispatch, e)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <div className={classes.students__sort}>
          <Button onClick={() => sortAscHandler(dispatch, students)}>
            <ArrowUpwardIcon />
          </Button>
          <Button onClick={() => sortDescHandler(dispatch, students)}>
            <ArrowDownwardIcon />
          </Button>
        </div>
      </form>
      <List className={classes.students__list}>{renderStudentsList}</List>
    </div>
  );
};

export default StudentsList;
