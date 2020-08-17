const path = require('path')

module.exports = {
  base: '/',
  dest: path.join(__dirname, '../../dist'),
  title: 'hduwkk',
  description: 'FE coder的日常',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'react', link: '/react/' },
    ],
    sidebar: {
      '/react/': [
        ['', '路由'],
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' }
  }
}
