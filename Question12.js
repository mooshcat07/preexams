const todo = [
    {
        id: 1, description: "Buy groceries",
        dueDate: "2025-08-05", done: false, 
        priority: "High",  createdAt: "2025-08-01T09:00:00Z",
    },
    {
        id: 2, description: "Finished javascriot assignment",
        dueDate: "2025-08-06", done: false, 
        priority: "Medium",  createdAt: "2025-08-02T14:30:00Z",
    },
    {
        id: 3, description: "Call plumber for kitchen leak",
        dueDate: "2025-08-04", done: true, 
        priority: "High",  createdAt: "2025-08-01T16:45:00Z",
    },
    {
        id: 4, description: "Book doctor appointement",
        dueDate: "2025-08-08", done: false, 
        priority: "Low",  createdAt: "2025-08-03T11:15:00Z",
    },
    {
        id: 5, description: "Clean the garrage",
        dueDate: "2025-08-10", done: false, 
        priority: "Medium",  createdAt: "2025-08-03T18:20:00Z",
    }
]
//foreach method
todo.forEach((tDo, _) => console.log("Description: " + tDo.description + "\nDue date: " + tDo.dueDate));
//filtering done todos
const notDoneToDos = todo.filter((tDo, _) => {
    if(!tDo.done){
        return tDo;
    }
})
// find method
const findtoDo = todo.find((tDo, _) => {
    if(tDo.description == "Clean the garrage"){
        return tDo;
    }
})

console.log(notDoneToDos);
console.log("\n");
console.log(findtoDo);