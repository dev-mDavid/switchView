import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as actions from "../core/task.action";
import * as fromTask from "../core/task.reducer";

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.sass']
})
export class ListsPageComponent {
name: string

tasks: Observable<any>;

// helloWorld = [
//   { name: 'Sun'  },
//   { name: 'Moon'}
// ]
// randomNum = () => (Math.random())

// addThing(name) {
//   this.helloWorld.push(name)  
// }



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
