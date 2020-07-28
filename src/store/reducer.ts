import {
  SORT_ASC,
  SORT_DES,
  SEARCH_STUDENT,
  SELECT_STUDENT,
  CHANGE_STUDENT_AGE,
  CHANGE_STUDENT_YEAR,
} from "./constants.ts";

export default function reducer(state, action) {
  switch (action.type) {
    case SEARCH_STUDENT:
      return Object.assign({}, state, {
        selectedStudent: null,
        students: action.payload,
      });
    case SORT_ASC:
      return Object.assign({}, state, {
        selectedStudent: null,
        students: action.payload,
      });
    case SORT_DES:
      return Object.assign({}, state, {
        selectedStudent: null,
        students: action.payload,
      });
    case SELECT_STUDENT:
      return Object.assign({}, state, { selectedStudent: action.payload });
    case CHANGE_STUDENT_AGE:
      return Object.assign({}, state, { students: action.payload });
    case CHANGE_STUDENT_YEAR:
      return Object.assign({}, state, { students: action.payload });
    default:
      return state;
  }
}
