'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

/* eslint-disable new-cap, no-multi-str, no-template-curly-in-string, no-unused-vars, no-undef, prettier/prettier */
const { gulpDependencies, gulpScripts } = require('../generators/app/modules/package/dependencies/partials/gulp')

const run = () => helpers.run(path.join(__dirname, '../generators/app'))

describe('generator-kittn:app', () => {
  beforeAll(() => {
    return run().withPrompts({
      projectusage: 'html'
    })
  })

  // Test for Basic Files
  describe('Gulp Files and Dependencies', () => {
    it('copies gulp tasks', () => {
      assert.file([
        'gulpfile.babel.js',
        'gulpfile/lib/',
        'gulpfile/tasks/',
        'gulpfile/tasks/browsersync.js'
      ])
    })

    it('adds gulp devDependencies', () => {
      assert.jsonFileContent('package.json', {
        devDependencies: gulpDependencies
      })
    })

    it('adds gulp scripts', () => {
      assert.jsonFileContent('package.json', {
        scripts: gulpScripts
      })
    })
  })
})
