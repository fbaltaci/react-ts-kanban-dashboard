import { StatusType } from "./StatusType";
import { PriorityType } from "./PriorityType";

export type TaskType = {
  title: string;
  id: string;
  status: StatusType;
  priority?: PriorityType;
  points?: number;
};
