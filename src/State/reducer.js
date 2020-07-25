export default function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return {};
      break;

    default:
      return state;
      break;
  }
}
