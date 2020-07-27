import { SORT_ASC, SORT_DES, SEARCH_STUDENT } from "./constants";

export default function reducer(state, action) {
  switch (action.type) {
    case SEARCH_STUDENT:
      return Object.assign({}, state, { students: action.payload });
    case SORT_ASC:
      return Object.assign({}, state, { students: action.payload });
    case SORT_DES:
      return Object.assign({}, state, { students: action.payload });
    default:
      return state;
  }
}
