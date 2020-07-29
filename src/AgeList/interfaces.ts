import { Dispatch } from "../interfaces";
import { IStudent } from "../StudentsList/interfaces";

export interface IAgeListProps {
  dispatch: Dispatch;
  students: IStudent[];
  selectedStudent: number;
  className?: string;
}

export interface IAgeListItemProps {
  key: string;
  age: number;
}
