#! /usr/bin/env node

import { program } from "commander";
import { listTasks } from "./commands/listTasks.js";
import { addTasks } from "./commands/addTasks.js";
import { markDoneTasks } from "./commands/markDoneTasks.js";

program.command("list").description("List all Todo Tasks").action(listTasks);
program
    .command("add <task>")
    .description("Add a new Todo Task")
    .action(addTasks);
program
    .command("mark-done")
    .option(
        "-t, --tasks <tasks...>",
        "The tasks to mark done. If not specified, all the tasks will be mark as done"
    )
    .action(markDoneTasks);

program.parse();
