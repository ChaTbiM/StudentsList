import { Dispatch } from "../interfaces";

export interface IStudent {
  id: number;
  fullName: string;
  year: string;
  age: number;
}

export interface IStudentsListProps {
  dispatch: Dispatch;
  students: IStudent[];
  selectedStudent: number;
  className?: string;
}

export interface IStudentListItemProps {
  id: string;
  key: string;
  name: string;
}
