import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit {
  @Input() task: any;
  @Output() deleteTaskEvent = new EventEmitter<string>()

  deleteTask(value) {
    this.deleteTaskEvent.emit(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
