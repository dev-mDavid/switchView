import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as actions from "../core/task.action";
import * as fromTask from "../core/task.reducer";
@Component({
  selector: 'app-time-blocks-page',
  templateUrl: './time-blocks-page.component.html',
  styleUrls: ['./time-blocks-page.component.sass']
})
export class TimeBlocksPageComponent {
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
