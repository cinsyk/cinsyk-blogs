const { forEachDir } = require("./public/untils/until");
let sidebar = forEachDir("./docs", { ignore: ['.vuepress'] }, {}, 0);

module.exports = {
    title: '前端小酌',
    description: '前端 HTML CSS JavaScript Vue Angular Docker Node Mongodb',
    themeConfig: {
        // 导航栏 Logo
        logo: '/images/logo.jpg',
        // 导航栏链接
        nav: [
            { text: '首页', link: '/' },
            { text: '拾遗', link: '/resource/' },
            { text: '基础', link: '/frontend/' },
            { text: '进阶', link: '/forwards/' },
            { text: 'Github', link: 'https://github.com/cinsyk', target: '_blank' },
            { text: '鄂ICP备18012555号', link: 'https://beian.miit.gov.cn/#/Integrated/index', target: '_blank' },
        ],
        // 侧边栏
        sidebar,
        // 搜索结果数量
        searchMaxSuggestions: 5,
        lastUpdated: '上次更新',
    }
}