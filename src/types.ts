import type {Dispatch} from "react";

export type LayoutProps = {
    children: React.ReactNode;
}

export type TaskProps = {
    id: number;
    text: string;
    completed: boolean;
}

export type Action =
    | {type: "ADD", payload: string}
    | {type: "DELETE", payload: number}
    | {type: "EDIT", payload: {id: number, text: string }}
    | {type: "COMPLETE", payload: number}
    | {type: "CLEAR_ALL"}

export type TaskFormProps = {
    dispatch: Dispatch<Action>;
}

export type TasksListProps = {
    tasks: TaskProps[],
    dispatch: Dispatch<Action>
}

export type TaskListItemProps = {
    task: TaskProps,
    dispatch: Dispatch<Action>
}