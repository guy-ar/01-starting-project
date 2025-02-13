import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTask } from "../model/task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
    private   tasks = DUMMY_TASKS

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(newTask: NewTask, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.date,
            userId: userId
        });
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

}