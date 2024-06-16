const jest = require("jest");
const chalk = require('chalk');
const options = {
  projects: [__dirname],
  silent: true,
};

jest
  .runCLI(options, options.projects)
  .then((success) => {
    // console.log('success.results', success.results);
    const { numPassedTestSuites, numFailedTestSuites, numTotalTestSuites } = success.results || {}
    if (numPassedTestSuites == numTotalTestSuites) {
      process.exit(0);
    } else {
      console.log(chalk.bold.red("jest命令执行失败！"));
      process.exit(1)
    }
  })
  .catch((failure) => {
    console.error('failure', failure);
    process.exit(1)
  });