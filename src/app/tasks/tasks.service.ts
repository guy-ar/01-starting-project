import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTask } from "../model/task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
    private   tasks = DUMMY_TASKS

    constructor() {
        this.tasks = localStorage.getItem('tasks') 
            ? JSON.parse(localStorage.getItem('tasks')!) : DUMMY_TASKS
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
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
        this.saveTasks();
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

}