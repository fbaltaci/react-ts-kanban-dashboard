import { Status } from "./Status";

export type Task = {
  title: string;
  id: string;
  status: Status;
  points?: number;
};
