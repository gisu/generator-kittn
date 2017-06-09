const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const clear = require('clear-terminal')
const commandExists = require('command-exists')

// Importing modules
const promptsFunction = require('./modules/prompt')
const pkg = require('../../package.json')

// Package JSON
const writePackageJson = require('./modules/writing/packageJSON')

// Copy Source Files
const copySources = require('./modules/writing/copySources')

// And Action!
module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.pkg = pkg

    this.promptsFunction = promptsFunction.bind(this)

    // Package.json
    this.writePackageJson = writePackageJson.bind(this)

    // Copy Sources
    this.copySources = copySources.bind(this)

    // Command Checks
    this.commands = {
      composer: false,
      yarn: false,
      git: false,
      wget: false,
      wp: false
    }
  }

    // Initializing
  async initializing () {
    this.log(`${chalk.magenta('Cleaning Directory')}`)

    for (const command in this.commands) {
      try {
        await commandExists(command)
        this.commands[command] = true
      } catch (e) {
        if (e) this.log(e)
      }
    }
  }

  prompting () {
    // Custom Greeting
    var welcome =
          '\n ' + chalk.styles.cyan.open +
          '\n        ___                      ___         ___            ___      ' +
          '\n       /\\__\\          ___       /\\  \\       /\\  \\          /\\__\\     ' +
          '\n      /:/  /         /\\  \\      \\:\\  \\      \\:\\  \\        /::|  |    ' +
          '\n     /:/__/          \\:\\  \\      \\:\\  \\      \\:\\  \\      /:|:|  |    ' +
          '\n    /::\\__\\____      /::\\__\\     /::\\  \\     /::\\  \\    /:/|:|  |__  ' +
          '\n   /:/\\:::::\\__\\  __/:/\\/__/    /:/\\:\\__\\   /:/\\:\\__\\  /:/ |:| /\\__\\ ' +
          '\n   \\/_|:|~~|~    /\\/:/  /      /:/  \\/__/  /:/  \\/__/  \\/__|:|/:/  / ' +
          '\n      |:|  |     \\::/__/      /:/  /      /:/  /           |:/:/  /  ' +
          '\n      |:|  |      \\:\\__\\      \\/__/       \\/__/            |::/  /   ' +
          '\n      |:|  |       \\/__/                                   /:/  /    ' +
          '\n       \\|__|                                               \\/__/     ' +
          '\n  ' + chalk.styles.cyan.close +
          '\n                                                       v.' + chalk.bold(this.pkg.version) +
          '\n  ' +
          '\n   Authors: Sascha Fuchs (@gisugosu) ' +
          '\n   URL    : http://kittn.de   ' +
          '\n '
    clear()
    this.log(welcome)

    // Now ask some questions already
    const prompts = promptsFunction()
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  async writing () {
    this.log(`${chalk.magenta('Writing package.json')}`)

    // Additional Props
    this.props.projectpath = process.cwd()

    // Write Package.json
    this.writePackageJson().writing(this)

    // Copy Source Files and Folders
    this.copySources().writing(this)
  }

  install () {
    if (this.commands.yarn) {
      this.yarnInstall()
    } else {
      this.npmInstall()
    }

    // Goodbye
    this.on('end', () => {
      const goodbye =
              '\n ' + chalk.styles.yellow.open +
              '\n                    __    .__  __    __ ' +
              '\n                    |  | _|__|/  |__/  |_  ____ ' +
              '\n                    |  |/ /  \\   __\\   __\\/    \\ ' +
              '\n                    |    <|  ||  |  |  | |   |  \\ ' +
              '\n                    |__|_ \\__||__|  |__| |___|  / ' +
              '\n                    \\/                   \\/  ' +
              '\n  ' + chalk.styles.yellow.close + chalk.styles.green.open +
              '\n   Now we are finished. Make your last settings and start `npm run init`.' +
              '\n      When npm is finished activate `npm run dev` and happy Coding.' +
              '\n ' + chalk.styles.green.close
      this.log(goodbye)
    })
  }
}