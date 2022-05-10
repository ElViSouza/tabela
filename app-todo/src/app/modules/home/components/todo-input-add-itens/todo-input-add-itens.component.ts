import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTasklist: string = "";
  constructor() { }

  ngOnInit(): void {
  }
public submitItemTaskList(){
  " dener  "
     this.addItemTasklist = this.addItemTasklist.trim();
     "dener"

     if (this.addItemTasklist){
   this.emitItemTaskList.emit(this.addItemTasklist);
   this.addItemTasklist = "";
}
}
} 
