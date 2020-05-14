/**
 * https://vuepress.vuejs.org/zh/config/
 */
module.exports = {
  // https://vuepress.vuejs.org/zh/guide/i18n.html
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Documents | TRON-FACTORY',
      description: 'tron-factory documents'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '文档 | TRON-FACTORY',
      description: 'tron-factory 帮助文档'
    }
  },

  // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE
  themeConfig: {
    logo: '/logo.png',
    repo: 'http://39.106.174.213/kangjiancheng/tron-factory-doc',
    repoLabel: 'GitLab',
    docsDir: 'docs', // 文档根目录
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        // 顶部导航栏
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Preview', link: 'http://47.252.80.127:8080' },
        ],
        // 侧边导航栏
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'step'
              ]
            },
          ],
        }
      },

      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        // 顶部导航栏
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '预览', link: 'http://47.252.80.127:8080' },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '指南',
              collapsable: false,
              children: [
                '',
                'step'
              ]
            },
          ],
        }
      }
    }
  }
}
