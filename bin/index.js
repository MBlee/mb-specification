#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import clipboard from "clipboardy";
import { namespace as namespaceCmd } from "./module/namespace.js";
const cmd = new Command();
cmd.version("1.0.0");
cmd.useProgram = function (program) {
    program(this);
};
cmd.useProgram(namespaceCmd);
cmd.command("show").action(() => {
    console.log(chalk.cyan("说明书详情页..."));
    clipboard.writeSync("说明书详情页...");
});
cmd.parse();
