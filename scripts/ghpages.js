var ghpages = require('gh-pages')

ghpages.publish('build', {
  branch: 'master',
}, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Published to ghpages')
  }
})
