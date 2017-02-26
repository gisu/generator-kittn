/**
 * Starting Task for the first Build off the Project Structure
 */

import gulp from 'gulp'
import runSequence from 'run-sequence'

const initTask = (cb) => {

  // Overwrite the Changed Check
  global.checkChanged = false

  runSequence(
    [
      'sassdoc:generate'
    ],
    [
      'copy:launch',
      'copy:fonts',
      'rebuild:js',
      'rebuild:images',
      'copy:contentimages'<% if (projectUsage === 'Integrate in Wordpress' ) { %>,
      'copy:wpconfig',
      'copy:wpplugins'<% } else if (projectUsage === 'Integrate in CraftCMS') { %>,
      'copy:craftindex',
      'copy:craftenv'<% } %>
    ],
    [
      'compiler:css',
      'compiler:html'
    ],
    cb)
}

gulp.task('init', initTask)
module.exports = initTask
