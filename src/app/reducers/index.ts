import { ActionReducerMap } from "@ngrx/store";
import { taskReducer }  from "../core/task.reducer";

export const reducers: ActionReducerMap<any> = {
  task: taskReducer
}