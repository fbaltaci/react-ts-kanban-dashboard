import { Status } from "./Status";
import { Priority } from "./Priority";

export type Task = {
  title: string;
  id: string;
  status: Status;
  priority?: Priority;
  points?: number;
};
