import Conf from "conf";
const config = new Conf();
import chalk from "chalk";

export function markDoneTasks({ tasks }) {
    let todoList = config.get("todo-list");

    // check if todolist exists or not
    if (todoList && todoList.length) {
        // loop over all elements
        todoList.map((task, index) => {
            // check if entered tasks' index exists or not
            if (tasks.toString().split(",")[index] > todoList.length) {
                console.log(
                    `task: ${tasks.toString().split(",")[index]} not found!`
                );
            } else {
                // check if the index of todolist exists in the tasks array entered by the user, and if it exists, mark it as done.
                if (tasks.indexOf(index.toString()) !== -1) {
                    todoList[index].done = true;
                }

                // if(todoList[index] === tasks.toString)
                // return task;
            }
        });
        config.set("todo-list", todoList);
        console.log(
            chalk.green.bold("Task/s have been marked as done as successfully")
        );
    }
}
