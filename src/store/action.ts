import { IStudent } from "./../StudentsList/interfaces";
import { Dispatch } from "./../interfaces";
import {
  SEARCH_STUDENT,
  SORT_ASC,
  SORT_DES,
  SELECT_STUDENT,
  CHANGE_STUDENT_AGE,
  CHANGE_STUDENT_YEAR,
} from "./constants";
const clone = require("fast-clone");

export function searchStudent(
  dispatch: Dispatch,
  students: IStudent[],
  searchedName: string
): void {
  let filteredStudents = students.filter((student: IStudent) => {
    return student.fullName.toLowerCase().includes(searchedName);
  });

  return dispatch({ type: SEARCH_STUDENT, payload: filteredStudents });
}

export function sortAscStudents(
  dispatch: Dispatch,
  students: IStudent[]
): void {
  let sortedStudents = students.sort((a, b) =>
    a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : -1
  );

  return dispatch({ type: SORT_ASC, payload: sortedStudents });
}

export function sortDescStudents(
  dispatch: Dispatch,
  students: IStudent[]
): void {
  let sortedStudents = students
    .sort((a, b) =>
      a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : -1
    )
    .reverse();

  return dispatch({ type: SORT_DES, payload: sortedStudents });
}

export function selectStudent(dispatch: Dispatch, selectStudent: number): void {
  return dispatch({ type: SELECT_STUDENT, payload: selectStudent });
}

export function changeStudentAge(
  dispatch: Dispatch,
  students: IStudent[],
  selectedStudent: number,
  updatedAge: number
): void {
  let updatedStudents = clone(students);
  updatedStudents.find(
    (el: IStudent) => el.id === selectedStudent
  ).age = updatedAge;

  return dispatch({ type: CHANGE_STUDENT_AGE, payload: updatedStudents });
}

export function changeStudentYear(
  dispatch: Dispatch,
  students: IStudent[],
  selectedStudent: number,
  updatedYear: string
): void {
  let updatedStudents = clone(students);
  updatedStudents.find(
    (el: IStudent) => el.id === selectedStudent
  ).age = updatedYear;

  return dispatch({ type: CHANGE_STUDENT_YEAR, payload: updatedStudents });
}
