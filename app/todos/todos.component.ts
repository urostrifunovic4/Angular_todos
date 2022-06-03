import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../Models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos?: Todo[];

  constructor(private todoService: TodoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const userId=Number(this.route.snapshot.paramMap.get('userId'));
    this.getTodos(userId);
  }

  getTodos(userId: number){
    this.todoService.getAllTodos(userId).subscribe(data=>{
      this.todos=data;
    }

    );
  }


}
