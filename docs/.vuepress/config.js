/**
 * https://vuepress.vuejs.org/zh/config/
 */
module.exports = {
  title: 'vue-imart-manage',
  description: 'vue-imart-manage',
  logo: 'logo.png',
  host: '127.0.0.1',
  port: '9090',
  dest: 'dist', // build dest directory base current project root
  base: '/',
  // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '预览', link: 'https://kangjiancheng.github.io/vue-imart-manage' },
      {
        text: 'Languages',
        items: [
          { text: '简体中文', link: '/language/chinese/' },
          { text: 'English', link: '/language/english/' }
        ]
      },
    ],

    sidebar: [
      {
        title: '指南',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/guide/', '介绍'],
          ['/guide/step', '使用帮助'],
        ]
      },
    ],
    lastUpdated: 'Last Updated', // string | boolean


    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'kangjiancheng/vuepress-demo',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: 'GitHub',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'kangjiancheng/vuepress-demo',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: 'Edit this page'
  },
}
