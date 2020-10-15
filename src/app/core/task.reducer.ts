import * as actions  from "./task.action";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";

// Main data interface
export interface Task{
  id: string,
  priority: number,
  title: string,
  checkBox: boolean,
}

// Entity adapter
export const taskAdapter = createEntityAdapter<Task>();
export interface State extends EntityState<Task> { }

// Default data / initial state

const defaultTask = {
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      title: 'New Task'
    }
  }
}

export const intialState: State = taskAdapter.getInitialState(defaultTask);

// Reducer
export function taskReducer(
  state: State = intialState,
  action: actions.TaskActions) {

  switch (action.type) {
    case actions.CREATE:
      return taskAdapter.addOne(action.task, state);

    case actions.UPDATE:
      return taskAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE:
      return taskAdapter.removeOne(action.id, state)

    default:
      return state;
  }
}

// Create default selectors
export const getTaskState = createFeatureSelector<State>('task');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = taskAdapter.getSelectors(getTaskState)