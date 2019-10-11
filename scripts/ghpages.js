var ghpages = require('gh-pages')

ghpages.publish('build', {
  branch: 'ghpages',
}, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Published to ghpages')
  }
})
