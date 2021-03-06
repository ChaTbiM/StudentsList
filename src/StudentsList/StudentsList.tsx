import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import style from "./StudentsList.style";
// interfaces
import { Dispatch } from "../interfaces";
import {
  IStudent,
  IStudentsListProps,
  IStudentListItemProps,
} from "./interfaces";
import initialState from "../store/initialState";
// constants
import {
  searchStudent,
  sortAscStudents,
  sortDescStudents,
  selectStudent,
} from "../store/action";

const StudentsList: React.FC<IStudentsListProps> = ({
  students,
  dispatch,
  selectedStudent,
}) => {
  const classes = style();

  const renderStudentsList: JSX.Element[] = students.map(
    (student: IStudent, index: number) => {
      const listItemProps: IStudentListItemProps = {
        key: `student-${student.id}`,
        name: student.fullName,
        id: String(student.id),
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

  const searchHandler = (
    dispatch: Dispatch,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    let searchedName: any = (e.target as any).value;
    let initialStudents: IStudent[] = initialState().students;
    searchStudent(dispatch, initialStudents, searchedName);
  };

  const sortAscHandler = (dispatch: Dispatch, students: IStudent[]): void => {
    console.log(students, "students asc");
    sortAscStudents(dispatch, students);
  };

  const sortDescHandler = (dispatch: Dispatch, students: IStudent[]): void => {
    sortDescStudents(dispatch, students);
  };

  const changeSelectedStudentHandler = (
    id: number,
    dispatch: Dispatch,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    selectStudent(dispatch, id);
  };

  return (
    <div className={classes.students__container}>
      <form className={classes.students__form} noValidate autoComplete="off">
        <TextField
          onChange={(e) => searchHandler(dispatch, e)}
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
