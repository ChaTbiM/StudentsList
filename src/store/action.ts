import { Dispatch, IStudents, IStudent } from "./../interfaces";
import { SEARCH_STUDENT } from "./constants";

export function searchStudent(
  dispatch: Dispatch,
  students: IStudents,
  searchedName: string
) {
  let filteredStudents = students.filter((student: IStudent) => {
    return student.fullName.toLowerCase().includes(searchedName);
  });

  //   return filteredStudents;

  return dispatch({ type: SEARCH_STUDENT, payload: filteredStudents });
}
