export type Dispatch = React.Dispatch<IAction>;

export interface IAction {
  type: string;
  payload: any;
  error?: any;
}

export interface IStudent {
  id: number;
  fullName: string;
  year: string;
  isSelected: boolean;
}

export interface IState {
  selectedStudent: number;
  students: Array<IStudent>;
}

export interface IStudentListItemProps {
  id: number;
  key: string;
  name: string;
}

export interface IAgeListItemProps {
  key: string;
  age: number;
}
