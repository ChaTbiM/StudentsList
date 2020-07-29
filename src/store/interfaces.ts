import { IStudent } from "./../StudentsList/interfaces";

export interface IState {
  selectedStudent: number;
  students: IStudent[];
}
