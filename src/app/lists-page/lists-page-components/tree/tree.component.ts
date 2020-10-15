import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit {
  @Input() task: any;
  @Output() updateTaskEvent = new EventEmitter<object>()
  @Output() deleteTaskEvent = new EventEmitter<string>()

  // updateTask({id: id, title: title}){
    // this.value = value;    
    // this.updateTaskEvent.emit({id, title});
  // }
  
  deleteTask(value) {
    this.deleteTaskEvent.emit(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
