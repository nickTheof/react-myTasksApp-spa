import {type FormEvent, useState} from "react";
import type {TaskFormProps} from "../types.ts";

const TaskForm = ({dispatch}: TaskFormProps) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text === "") return;
        dispatch({type: "ADD", payload: text});
        setText("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 border p-2 rounded"
                    placeholder="New task ..."
                />
                <button
                type="submit"
                className="bg-cf-gray hover:bg-cf-dark-gray text-white px-4 py-2 rounded transition-colors duration-150 ease-in-out">
                    Add
                </button>
            </form>
        </>
    )
}

export default TaskForm;