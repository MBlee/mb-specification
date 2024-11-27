import chalk from "chalk";
const namespace = (cmd) => {
    cmd.command("namespace")
        .description('命名规则')
        .action(() => {
        console.log(chalk.cyan("CLI："));
        console.log(chalk.magenta("  mb-*"));
        console.log(chalk.magenta("  mb-shell*"));
        console.log(chalk.magenta("  mb-speci*"));
        console.log(chalk.cyan("\nMultiple："));
        console.log(chalk.magenta("  mba-app*"));
        console.log(chalk.magenta("  mba-template*"));
        console.log(chalk.magenta("  mba-widget*"));
        console.log(chalk.cyan("\nArticle："));
        console.log(chalk.magenta("  mbb-cfg*"));
        console.log(chalk.magenta("  mbb-code*"));
        console.log(chalk.magenta("  mbb-hint*"));
    });
};
export { namespace };
