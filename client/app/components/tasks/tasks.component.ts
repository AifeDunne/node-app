import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
    tasks: Task[];
    box: string;
	contentType: string;
	boxContent: string;
    
    constructor(private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }
    
    updateStatus(task){
        var _task = {_id:task._id, box: task.box, contentType: task.contentType, boxContent:task.boxContent }
        this.taskService.updateStatus(_task).subscribe(tasks => {
                task.boxContent = task.boxContent;
            });
    }
}
