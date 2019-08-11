new Vue({
    el: '#vue-app',
    data: {
        name: '周秉颐',
        job: '前端 / Python 开发工程师',
        aboutMeItems: [{
                aboutMe: '男 / 1996.5'
            },
            // {
            //     aboutMe: '现居住地：北京'
            // },
            {
                aboutMe: '电话: 13639013520'
            }
        ],
        Email: '邮箱: <a href="mailto:zhoubingyiya@gmail.com" target="_blank">zhoubingyiya@gmail.com</a>',

        //教育经历
        educationExperience: '教育经历',
        educations: {
            One: {
                name: '大连民族大学 · 软件工程 · 本科',
                time: '2015.9 - 2019.7',
                content: '获奖经历：第七届全国大学生电子商务“创新，创意及创业”挑战赛辽宁赛区三等奖；大连民族大学“挑战杯”选拔赛二等奖；大连民族大学计算机科学与工程学院网页设计大赛二等奖；'
            },
        },

        // 实习经历
        exercitationExperience: '实习经历',
        exercitations: {
            One: {
                name: '贵阳朗玛信息技术股份有限公司',
                time: '2019.3 - 2019.5',
                content: '开发电视机顶盒相关 App。做了清明节等相关等活动页面，使用 Ajax 数据加载，用于抽奖的活动；使用 原生 js 做了电视机遥控器焦点的跟踪。相关技术：用 thinkPhP 框架，原生JS，Ajax。'
            },
        },

        // 项目介绍
        projectExperience: '项目经历',
        projects: {
            One: {
                name: '购物网站',
                content: '使使用 HTML、CSS、JavaScript完成页面基本布局,使用 Python/ Django 进行后端开发，数据库使用 MySQL。通过 JavaScript(jQuery框架) 实现效果，如轮播图及回到顶部，导航下拉菜单及三级菜单实现。'
            },
            Two: {
                name: '报表系统',
                content: '使用 HTML、CSS、JavaScript完成页面基本布局,使用 Python/ Django 进行后端开发，数据库使用 MySQL。用 JavaScript 实现在页面直接查找数据，不直接查找数据库，负责开发小组的工作调度、人员职能安排与分配、网站的功能策划与需求分析。'

            },
            // Three: {
            //     name: '新闻管理系统',
            //     content: '负责编写详细需求分析和客户管理模块,使用 HTML、CSS 完成页面基本布局,使用 JSP 进行后端开发，实现了新闻添加、新闻修改、新闻删除等几大功能。'

            // },
            four: {
                name: '房租信息爬取及数据分析',
                content: '使用 Python 爬取贝壳找房数据，使用 pandas 进行数据清理，describe 方法计算出最大值、最小值、平均值等进行分析；使用 Matplotlib 将得到的数据分析得到的数据表格进行可视化输出。'
            },
            five: {
                name: '课表导入日历脚本',
                content: 'python2.7，配置 Excel 表格记录课程名，时间，教室等信息，配置 JSON 文件记录每个课程等节数，上下课时间。根据日历的文档记录成事件提醒，生成 ics 文件。'
            },
        },

        // 技能介绍
        skills: '技能',
        skillItems: [
            {
                skill: 'HTML、CSS、JavaScript'
            },
            {
                skill: 'Python、Django'
            },
            {
                skill: '熟悉 W3C 标准，了解 Web 语义化'
            },
            {
                skill: '了解 Vue.js、node.js、jQuery、Echarts、Ajax'
            },
            {
                skill: 'MySQL、MongoDB'
            },
            {
                skill: 'Google、Git、PhotoShop'
            }
        ],

        // 自我评价
        selfEvaluation: '自我评价',
        selfItems: [
            {
                self: '能手写就手写，不依赖插件，手写代码更简洁高效，也更能提升自己技术。'
            },
            {
                self: '对互联网产品和Web技术有强烈兴趣，有优秀的学习能力和强烈的进取心。'
            },
            {
                self: '喜欢钻研各种新技术，经常到 Github 学习代码。'
            },
            {
                self: '较强的事业心和责任心。'
            }
        ],

        resumeOnGithub: '<a class="footer-link" href="https://github.com/zhoubingyi/resume">简历链接（Github）</a>'
    }
});
