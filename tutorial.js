
/**
*The complete solution for node.js command-line interfaces, 
*inspired by Ruby's commander.
*nodeJS命令工具行完美解决方案，灵感来自Ruby的命令行
*/
const program = require('commander');

//process.argv代表执行node时候的命令行参数

/**
*@description 定义命令
*@function program.option(arg1, arg2, arg3, arg4, ...)
*@param arg1 {string} like{-p, --peppers} 一条横线代表快捷标示符，
*    两条横线代表全拼，-pbc代表-p -b -c,--template-engine代表--templateEngine
*@param arg2 {string} like{Add peppers} 命令描述
*@param arg3 {function} 指令执行的方法
*@param arg4 {number string array ...} 参数
*/

/**
*@description 版本号定义
*@function program.version(arg1)
*@param arg1 {string} like{'0.0.1'} 版本号
*/

/**
*@description 格式化参数<这个参数是node命令行执行时候的所有参数,process.argv>
*@function program.parse(arg1)
*@param arg1 {string || array} like{'-pc'||'--peppers--cheese'} 版本号
*/


//const inquirer = require('inquirer')
//const chalk = require('chalk')
/*
program

    .command('module')
    .alias('m')
    .description('创建新的模块')
    .option('-a, --name [moduleName]', '模块名称')
    .action(option => {
        console.log('Hello World')
        //为什么是Hello World 给你个眼神，自己去体会...
    })
    program.parse(process.argv)
*/

// let argv = [    
//                 '/usr/local/bin/node',
//                 '/Users/liujianchuan/work/github/nodeJS/tutorial.js',
//                 '-p'
//             ];
/**            
program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(argv);

console.log(argv);

console.log('you ordered a pizza with:');
console.log(program.cheese);
console.log('%s', '11');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', 'hello');
console.log('- pineapple');
*/

/**
function range(val) {
  return val.split('..').map(Number);
}

function list(val) {
  return val.split(',');
}

function collect(val, memo) {
  memo.push(val);
  return memo;
}

function increaseVerbosity(v, total) {
  return total + 1;
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .option('-f, --float <n>', 'A float argument', parseFloat)
  .option('-r, --range <a>..<b>', 'A range', range)
  .option('-l, --list <items>', 'A list', list)
  .option('-o, --optional [value]', 'An optional value')
  .option('-c, --collect [value]', 'A repeatable value', collect, [])
  .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
  .parse(process.argv);

console.log(' int: %j', program.integer);
console.log(' float: %j', program.float);
console.log(' optional: %j', program.optional);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
console.log(' collect: %j', program.collect);
console.log(' verbosity: %j', program.verbose);
console.log(' args: %j', program.args);

*/

/**

let _argv = ['', '', '-i', '111.1', '11.1', '2.3']
console.log(parseInt);
const list = (v) => v.split(',');
program
  .version('0.0.1')
  .usage('[11 sdfsdfsdfs')
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .option('-l, --list <n>', 'An integer argument', list, '1,2,3')
  .parse(_argv);

console.log(' integer: %j', program.integer);
console.log(' list: %j', program.list);


program
  .version('0.0.1')
  .option('-s --size <size>', 'Pizza size', /^(large|medium|small)$/i, 'medium')
  .option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i, false)
  .parse(process.argv);

console.log(' size: %j', program.size);
console.log(' drink: %j', program.drink);



*/


/**
program
  .version('0.0.1')
  .command('rmdir <dir> [otherDirs...]')
  .action(function (dir, otherDirs) {
    console.log('rmdir %s', dir);
    if (otherDirs) {
      otherDirs.forEach(function (oDir) {
        console.log('rmdir %s', oDir);
      });
    }
  });

program.parse(process.argv);
*/


program
  .version('0.0.1')
  //.command('install [name]', 'install one or more packages')
  //.command('search [query]', 'search with optional query')
  .command('list', 'list packages installed', {isDefault: true})
  .action(function(cmd, arg){
    console.log(cmd);
    console.log(arg);
  })
  .parse(process.argv);























