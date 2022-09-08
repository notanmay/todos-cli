import Conf from "conf";
const config = new Conf();
import chalk from "chalk";

export function deleteTasks({ tasks }) {
    let todoList = config.get("todo-list");

    // sort the tasks array given by the user in ascending order
    tasks.sort((a, b) => a - b);

    if (todoList) {
        // iterate over the tasks array from the last element to first element, so that splicing the todoList array does not mess up the indexes
        for (let i = tasks.length - 1; i >= 0; i--) {
            todoList.splice(tasks[i], 1);
        }
        config.set("todo-list", todoList);
        console.log(chalk.green.bold("Task/s have been deleted successfully"));
    }
}
