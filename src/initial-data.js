const initialData = {
    tasks: {
        "task-1": {id: "task-1", content: "Make your bed"},
        "task-2": {id: "task-2", content: "Prepare coffee"},
        "task-3": {id: "task-3", content: "Check the weather"},
        "task-4": {id: "task-4", content: "Start the car"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
    },
    //to maintain column order later on:
    columnOrder: ["column-1"],
};
export default initialData;
