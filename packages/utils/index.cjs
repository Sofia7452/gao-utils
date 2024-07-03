const jest = require("jest");
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const excludeFiles = ['index.ts']; // 添加需要排除的文件名

const options = {
  projects: [__dirname],
  silent: true,
};

// test文件夹下面有没有对应src下的文件夹名字的文件
const srcDir = path.join(__dirname, 'src');
const testDir = path.join(__dirname, '__test__');

fs.readdir(srcDir, (err, files) => {
  console.log('srcDir', srcDir);
  if (err) {
    console.error('读取 src 文件夹失败:', err);
    return;
  }

  const jsFiles = files.filter(file => {
    return file.endsWith('.ts') && !excludeFiles.includes(file);
  });
  console.log('jsFiles', jsFiles);
  jsFiles.forEach(file => {
    const testFile = file.replace('.ts', '.test.ts');
    const testFilePath = path.join(testDir, testFile);
    console.log('file', file);
    if (!fs.existsSync(testFilePath)) {
      console.log(chalk.bold.red(`缺少测试文件: ${testFilePath}`));
      process.exit(1)
    }
  });
  console.log(chalk.bold.yellow("test文件都存在"));
});

jest
  .runCLI(options, options.projects)
  .then((success) => {
    // console.log('success.results', success.results);
    const { numPassedTestSuites, numFailedTestSuites, numTotalTestSuites } = success.results || {}
    if (numPassedTestSuites == numTotalTestSuites) {
      console.log(chalk.bold.yellow("jest校验执行成功！"));
      process.exit(0);
    } else {
      console.log(chalk.bold.red("jest校验执行失败！"));
      process.exit(1)
    }
  })
  .catch((failure) => {
    console.error('failure', failure);
    process.exit(1)
  });