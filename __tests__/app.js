'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

/* eslint-disable new-cap, no-multi-str, no-template-curly-in-string, no-unused-vars, no-undef, prettier/prettier */
const { stylelintWebpackDependencies } = require('../generators/app/modules/package/dependencies/partials/stylelint')
const { typescriptDevDependencies } = require('../generators/app/modules/package/dependencies/partials/typescript')

const run = () => helpers.run(path.join(__dirname, '../generators/app'))

// Define some variables
const project = {
  name: 'Kittn',
  version: '0.0.1',
  proxy: 'kittn.local',
  projectusage: 'none'
}
const author = {
  name: 'Sascha Fuchs',
  email: 'gisu2onic@gmail.com',
  homepage: 'http://kittn.de'
}

describe('generator-kittn:app', () => {
  beforeAll(() => {
    return run().withPrompts({
      projectname: project.name,
      projectauthor: author.name,
      projectmail: author.email,
      projecturl: author.homepage,
      projectusage: project.projectusage,
      projectversion: project.version,
      projecttypescript: true
    })
  })

  // Test for Basic Files
  describe('Basic Files and Infos', () => {
    // Test package.json content
    it('fill package.json with correct Information', () => {
      assert.JSONFileContent('package.json', {
        name: project.name,
        version: project.version,
        author: {name: author.name, email: author.email, url: author.homepage}
      })
    })

    it('adds files for all projects', () => {
      assert.file([
        '.browserslistrc',
        '.editorconfig',
        '.eslintrc-dev.js',
        '.eslintrc.js',
        '.gitignore',
        '.nvmrc',
        'babel.config.js',
        'package.json',
        'README.md',
        'postcss.config.js'
      ])
    })

    it('adds scss', () => {
      assert.file([
        'src/style/',
        'src/style/_setup.scss'
      ])
    })

    it('adds javascript', () => {
      assert.file([
        'src/js/'
      ])
    })

    it('copies gulp tasks', () => {
      assert.file([
        'gulpfile.babel.js',
        'gulpfile/lib/',
        'gulpfile/tasks/',
        'gulpfile/tasks/browsersync.js'
      ])
    })

    it('adds webpack config', () => {
      assert.file([
        'webpack/webpack.config.base.babel.js',
        'webpack/webpack.dev.babel.js',
        'webpack/webpack.prod.babel.js',
        'webpack/utils.js'
      ])
    })
  })
})

// Typescript
describe('Typescript', () => {
  beforeAll(() => {
    return run().withPrompts({
      projectusage: 'html',
      projecttypescript: true
    })
  })

  it('copies typescript files', () => {
    assert.file([
      'tsconfig.json'
    ])
  })

  it('adds typescript dependencies', () => {
    assert.jsonFileContent('package.json', {
      devDependencies: typescriptDevDependencies
    })
  })
})

// Stylelint
describe('Stylelint', () => {
  beforeAll(() => {
    return run().withPrompts({
      projectusage: 'html',
      projectjsframework: 'vue',
      projectstylelint: true
    })
  })

  it('copies stylelint files', () => {
    assert.file([
      'stylelint.config.js'
    ])
  })

  it('adds stylelint webpackDependencies', () => {
    assert.jsonFileContent('package.json', {
      devDependencies: stylelintWebpackDependencies
    })
  })
})
