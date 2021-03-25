//== Inline Critical CSS (https://github.com/addyosmani/critical) ==//

const critical = require('critical');

critical.generate({
  inline: true,
  base: '_site/',
  src: 'index.html',
  target: {
    html: 'index.html',
    css: 'critical.css',
  },
  dimensions: [
    {
      width: 320,
      height: 740,
    },
    {
      width: 1300,
      height: 900,
    },
  ]
}, (err, output) => {
  if (err) {
    console.error(err);
  } else if (output) {
    console.log('Generated critical CSS - nice!');
  }
});
