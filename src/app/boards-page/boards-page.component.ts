import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as actions from "../core/task.action";
import * as fromTask from "../core/task.reducer";


@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.sass']
})
export class BoardsPageComponent{
name: string

tasks: Observable<any>;


  constructor(private store: Store<fromTask.State>) { }
ngOnInit() {
    this.tasks = this.store.select(fromTask.selectAll)
  }

  createTask() {
    const task: fromTask.Task = {
      id: new Date().getUTCMilliseconds().toString(),
      priority: 0,
      title: 'Task Name',
      checkBox: false,
    }

    this.store.dispatch( new actions.Create(task))
  }

  updateTask(id, title) {
    this.store.dispatch( new actions.Update(id, {title: title}))
  }

  deleteTask(id) {
    this.store.dispatch( new actions.Delete(id) )

  }

}
