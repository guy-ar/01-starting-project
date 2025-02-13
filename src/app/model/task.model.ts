export interface Task {
    id: string;
    userId: string; // 'u1', 'u2', 'u3'
    title: string;
    summary: string;
    dueDate: string;
}

export interface NewTask {
    title: string;
    summary: string;
    date: string;
}