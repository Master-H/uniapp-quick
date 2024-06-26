/*
 * @Description: 文件功能描述
 */
'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const yosay = require('yosay')
module.exports = () => {
 co(function *() {
  	let projectName = yield prompt('Project name: ')  // 用户输入的文件名
  	// let gitUrl = 'ssh://xxxxxx' // 模板仓库地址
  	let gitUrl = 'git@github.com:Master-H/umits.git' // 模板仓库地址
    
  let cmdStr = `git clone --depth=1 ${gitUrl} ${projectName}  && cd ${projectName} && rm -rf .git`
	console.log(yosay(chalk.red(`\n Downing ... `)))
	console.log(chalk.red(`\n 下载如果太慢直接clone,源码地址:xxx`))
	exec(cmdStr,(error) => {
      if (error) {
        console.log(error)
        process.exit()
      }
      console.log(chalk.green('\n √  completed!'))
      console.log(chalk.red(`\n 1、cd ${projectName} `))
      console.log(chalk.red(`\n 2、npm install or yarn install`))
      console.log(chalk.red(`\n 3、npm start or yarn start`))
      process.exit()
	})
  })
}
