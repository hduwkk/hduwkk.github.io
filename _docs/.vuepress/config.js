const path = require('path')

module.exports = {
  base: '/',
  dest: path.join(__dirname, '../../docs'),
  title: 'hduwkk',
  description: 'FE coder的日常',
  themeConfig: {
    nav: [
      { text: '总结', link: '/summary/' },
      { text: 'react', link: '/react/' }
    ],
    sidebar: {
      '/summary/': [
        ['', '总结'],
        ['build', '构建环境']
      ],
      '/react/': [
        ['', '路由'],
        'one'
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' }
  }
}
