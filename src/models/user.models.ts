import { Task } from "./task.models";

export interface User {
    id?: string,
    fullName: string,
    password: string,
    tasks: Task[],
}
