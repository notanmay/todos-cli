import Conf from "conf";
const config = new Conf();
import chalk from "chalk";

export function addTasks(task) {
    // get todolist
    let todoList = config.get("todo-list");

    // if todolist doesn't exist, set it as an empty array
    if (!todoList) {
        todoList = [];
    }

    // push the task entered by the uesr to the array, where done is set to false by default
    todoList.push({
        text: task,
        done: false,
    });

    config.set("todo-list", todoList);

    console.log(chalk.green.bold("Task has been added successfully!"));
}
