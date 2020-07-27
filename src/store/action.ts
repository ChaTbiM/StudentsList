import { Dispatch, IStudent } from "./../interfaces";
import { SEARCH_STUDENT, SORT_ASC, SORT_DES } from "./constants";

export function searchStudent(
  dispatch: Dispatch,
  students: IStudent[],
  searchedName: string
) {
  let filteredStudents = students.filter((student: IStudent) => {
    return student.fullName.toLowerCase().includes(searchedName);
  });

  return dispatch({ type: SEARCH_STUDENT, payload: filteredStudents });
}

export function sortAscStudents(dispatch: Dispatch, students: IStudent[]) {
  let sortedStudents = students.sort((a, b) =>
    a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : -1
  );

  return dispatch({ type: SORT_ASC, payload: sortedStudents });
}

export function sortDescStudents(dispatch: Dispatch, students: IStudent[]) {
  let sortedStudents = students
    .sort((a, b) =>
      a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : -1
    )
    .reverse();

  return dispatch({ type: SORT_DES, payload: sortedStudents });
}
