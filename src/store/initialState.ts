import { IState } from "./interfaces";
export default function initialState(): IState {
  return {
    selectedStudent: 1,
    students: [
      {
        id: 1,
        fullName: "mustapha chatbi",
        age: 23,
        year: "2nd",
      },
      {
        id: 2,
        fullName: "Lamine Irban",
        age: 33,
        year: "5th",
      },
      {
        id: 3,
        fullName: "abdenour betir",
        age: 26,
        year: "4th",
      },
      {
        id: 4,
        fullName: "z-mustapha chatbi 2 ",
        age: 23,
        year: "2nd",
      },
      {
        id: 5,
        fullName: "mustapha chatbi 3",
        age: 23,
        year: "2nd",
      },
      {
        id: 6,
        fullName: "mustapha chatbi 4",
        age: 23,
        year: "2nd",
      },
      {
        id: 7,
        fullName: "mustapha chatbi 5",
        age: 23,
        year: "2nd",
      },
    ],
  };
}
