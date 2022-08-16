import Conf from "conf";
const config = new Conf();
import chalk from "chalk";

export function listTasks() {
    // check if todolist exists or not
    const todoList = config.get("todo-list");

    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold(
                "Tasks in green are done. Tasks in red are yet to be done"
            )
        );
        // loop over all elements
        todoList.forEach((task, index) => {
            // if task has done property to true:
            if (task.done) {
                console.log(chalk.greenBright(`${index}. ${task.text}`));
            }
            // if task.done is false
            else {
                console.log(chalk.redBright(`${index}. ${task.text}`));
            }
        });
    } else {
        console.log(chalk.yellow.bold("you don't have any tasks yet"));
    }
}
