export type Dispatch = React.Dispatch<IAction>;

export interface IAction {
  type: string;
  payload: any;
  error?: any;
}
