/**
 * https://vuepress.vuejs.org/zh/config/
 */
const previewURL = 'http://47.252.80.127:8080'

module.exports = {
  locales: {
    '/': {
      lang: 'English',
      title: 'Documents | TRON-FACTORY',
    },
    '/zh/': {
      lang: '简体中文',
      title: '文档 | TRON-FACTORY',
    }
  },

  themeConfig: {
    logo: '/logo.png',
    locales: {
      '/': {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Preview', link: 'http://47.252.80.127:8080' },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
              ]
            },
          ],
        },
      },

      '/zh/': {
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '预览', link: previewURL },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '指南',
              collapsable: false,
              children: [
                '',
              ]
            },
          ],
        },
      }
    },

    repo: 'http://39.106.174.213/kangjiancheng/tron-factory-doc',
    repoLabel: 'GitLab',
    docsDir: 'docs', // 文档根目录
    editLinks: true,
  }
}
