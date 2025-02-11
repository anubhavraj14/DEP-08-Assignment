// Problem 2.  Task Tracker
// Description:
// You have an array of task objects. Each task has a taskName, a completed status (boolean), 
// and a priority (numerical value where lower numbers indicate higher priority). 

// Your tasks are:
// find: Identify the first task with a high priority (for example, priority less than 3).
// findIndex: Find the index of the first task that is not completed.
// reduce: Count how many tasks have been completed.
// (forEach): Print all task names.


const tasks = [
  { taskName: "Write report", completed: true, priority: 2 },
  { taskName: "Attend meeting", completed: false, priority: 3 },
  { taskName: "Fix bug", completed: true, priority: 1 },
  { taskName: "Update website", completed: true, priority: 4 },
];

// 1. find
// const highPriorityTask = tasks.find((task) => task.priority < 3);
// console.log(highPriorityTask);

// 2. findIndex
// const firstIncompleteTaskIndex = tasks.findIndex((task) => !task.completed);
// console.log(firstIncompleteTaskIndex);

// 3. reduce
// const completedTasksCount = tasks.reduce((acc, task) => {
//   if (task.completed) {
//     return acc + 1;
//   }
//   return acc;
// }, 0);
// console.log(completedTasksCount);

// 4. forEach
// tasks.forEach((task) => {
//   console.log(task.taskName);
// });



const result1 =  tasks.find((task) => task.priority < 3);
console.log(result1);


const result2 = tasks.findIndex((task) => !task.completed);
console.log(result2);

const result3 = tasks.reduce((acc, task) =>{
    return  acc + task.completed;
}, 0);
console.log(result3);

tasks.forEach(task => {
    console.log(task.taskName)
})

