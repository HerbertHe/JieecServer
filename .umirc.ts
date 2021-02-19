import { defineConfig } from 'dumi';

export default defineConfig({
    title: 'Jieec Server',
    logo: '/images/logo192.png',
    favicon: 'images/favicon.ico',
    mode: 'site',
    // more config: https://d.umijs.org/config
    analytics: {
        ga: 'G-K83C9V6RR1',
    },
    navs: [
        null, // null 值代表保留约定式生成的导航，只做增量配置
        {
            title: '博客',
            path: 'https://goer.icu',
        },
        {
            title: 'GitHub',
            path: 'https://github.com/HerbertHe',
        },
        {
            title: 'Gitee',
            path: 'https://gitee.com/HerbertHe',
        },
        {
            title: '掘金',
            path: 'https://juejin.cn/user/1028798616441496',
        },
        {
            title: '知乎',
            path: 'https://www.zhihu.com/people/Herbert_He',
        },
        {
            title: 'V2EX',
            path: 'https://www.v2ex.com/member/HerbertHe',
        },
        {
            title: '链滴社区',
            path: 'https://ld246.com/member/HerbertHe',
        },
        { title: '思否', path: 'https://segmentfault.com/u/herberthe' },

        {
            title: 'CSDN',
            path:
                'https://blog.csdn.net/weixin_41776024?spm=1000.2115.3001.5343',
        },
    ],
});
