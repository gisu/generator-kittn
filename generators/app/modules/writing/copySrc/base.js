const base = (context) => {
  return {
    files: [
      {
        src: 'gulpfile.babel.js',
        dest: 'gulpfile.babel.js'
      },
      {
        src: '_browserslistrc',
        dest: '.browserslistrc'
      },
      {
        src: '_nvmrc',
        dest: '.nvmrc'
      },
      {
        src: '_editorconfig',
        dest: '.editorconfig'
      },
      {
        src: '_gitignore',
        dest: '.gitignore'
      },
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/.system_additions/htaccess',
        dest: 'src/.system/.htaccess'
      },
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/.system_additions/facebook-og-image.jpg',
        dest: 'src/.system/facebook-og-image.jpg',
        simplecopy: true
      },
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/.system_additions/favicon.png',
        dest: 'src/.system/favicon.png',
        simplecopy: true
      },
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/.system_additions/placeholder.png',
        dest: 'src/.system/placeholder.png',
        simplecopy: true
      },
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/.system_additions/twitter-og-image.jpg',
        dest: 'src/.system/twitter-og-image.jpg',
        simplecopy: true
      },
      {
        src: 'README.md',
        dest: 'README.md'
      }
    ],
    folders: [
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'gulpfile',
        dest: 'gulpfile/'
      },
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/.system',
        dest: 'src/.system/'
      },
      {
        notConditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/images',
        dest: 'src/images/'
      },
      {
        conditions: {
          projectusage: 'webpackApp'
        },
        src: 'src/images_webpackApp',
        dest: 'src/images/'
      },
      {
        src: 'src/scripts',
        dest: 'src/scripts/'
      },
      {
        src: 'src/fonts',
        dest: 'src/fonts/'
      }
    ]
  }
}

module.exports = base
