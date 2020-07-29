import { Dispatch } from "../interfaces";
import { IStudent } from "../StudentsList/interfaces";

export interface ILevelListProps {
  dispatch: Dispatch;
  students: IStudent[];
  selectedStudent: number;
  className?: string;
}

export interface ILevelListItemProps {
  key: string;
  year: string;
}
