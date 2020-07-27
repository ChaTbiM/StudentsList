import React, { useState, useEffect } from "react";

import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";

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
  selectStudent,
} from "../store/action.ts";

const StudentsList: React.FC<{
  students: IStudent[];
  dispatch: Dispatch;
  selectedStudent: number;
}> = ({ students, dispatch, selectedStudent }) => {
  const classes = style();

  const renderStudentsList: JSX.Element[] = students.map(
    (student: IStudent, index: number) => {
      const listItemProps: IStudentListItemProps = {
        key: `student-${student.id}`,
        name: student.fullName,
        id: student.id,
      };
      return (
        <ListItem
          {...listItemProps}
          selected={selectedStudent === student.id}
          button
          className={classes.students__list__item}
          onClick={(event) =>
            changeSelectedStudentHandler(student.id, dispatch, event)
          }
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
    sortDescStudents(dispatch, students);
  };

  const changeSelectedStudentHandler = (id, dispatch, event) => {
    selectStudent(dispatch, id);
  };

  return (
    <div className={classes.students__container}>
      <form className={classes.students__form} noValidate autoComplete="off">
        <TextField
          onChange={(e) => keypressHandler(dispatch, e)}
          id="outlined-basic"
          label="Search Student"
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
