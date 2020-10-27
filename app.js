new Vue({
    el: '#vue-app',
    data: {
        name: '胡磊',
        // job: '兴趣方向：机器学习',
        aboutMeItems: [{
                aboutMe: '男 / 1999.12'
            },
            // {
            //     aboutMe: '现居住地：北京'
            // },
            {
                aboutMe: '电话: 18242093583'
            }
        ],
        Email: '邮箱: <a href="mailto:leiwhasup@gmail.com" target="_blank">leiwhasup@gmail.com</a>',

        //教育经历
        educationExperience: '教育经历',
        educations: {
            One: {
               name: '华中科技大学 · 软件工程 · 研究生',
               time: '2019.9 - 现在',
               content: ''	,
            },
			Two: {
			   
				name: '大连民族大学 · 软件工程 · 本科',
				time: '2015.9 - 2019.6',
				content: ''	,
			},
        },

        // 实习经历
        // exercitationExperience: '实习经历',
        // exercitations: {
        //     One: {
        //         name: '贵阳朗玛信息技术股份有限公司',
        //         time: '2019.3 - 2019.5',
        //         content: '开发电视机顶盒相关 App。做了清明节等相关等活动页面，使用 Ajax 数据加载，用于抽奖的活动；使用 原生 js 做了电视机遥控器焦点的跟踪。相关技术：用 thinkPhP 框架，原生JS，Ajax。'
        //     },
        // },

        // 项目介绍
        projectExperience: '项目经历',
        projects: {
			five: {
			    name: '文本标签分类 Magpie',
			    contents: [
					'GitHub上的自然语言处理项目，来自欧洲高能物理研究所',
					'地址:Github: inspirehep/magpie',
					'底层使用卷积神经网络CNN和递归神经网络RNN',
					'利用jieba分词库使项目支持中文分类'
				]
			},
            One: {
                name: '猫的图片识别',
				contents: [
					'手写实现一个简单的神经网络',
					'使用逻辑回归算法和梯度下降算法进行训练优化',
					'最终对训练集的预测准确率为99.04%，对测试集的预测准确率为70.00%'
				]
            },
            Two: {
                name: '基于SpringBoot的短视频微信小程序',
				contents: [
					'使用 WXML、WXSS、JavaScript完成页面基本布局',
					'SpringBoot 框架、MySQL数据库、Tomcat服务器',
					'用FFmpeg工具做视音频合成处理，用Redis、ZooKeeper等中间件进行服务器间通信。'
				]
            },
            // Three: {
            //     name: '新闻管理系统',
            //     content: '负责编写详细需求分析和客户管理模块,使用 HTML、CSS 完成页面基本布局,使用 JSP 进行后端开发，实现了新闻添加、新闻修改、新闻删除等几大功能。'

            // },
            // four: {
            //     name: '学习笔记网站',
            //     content: '使用 Django 框架建立一个用户可以储存自己相关主题及其子条目的学习笔记网站。使用装饰器设置访问权限，并在Heroku服务器上完成部署。'
            // },
            
        },

        // 技能介绍
        skills: '技能',
        skillItems: [
			{
			    skill: 'Python、Java'
			},
            {
                skill: '较强的数学理解能力和扎实的计算机基础（数据结构、算法、数据库等）'
            },
		    {
			    skill: '了解TensorFlow、Keras等常用框架'
		    },  
            {
                skill: '熟悉Linux开发环境和常见的机器学习算法'
            },
            {
                skill: 'Markdown语法、Git版本控制、Google高级搜索'
            }
        ],

        // 自我评价
        selfEvaluation: '自我评价',
        selfItems: [
            {
                self: '时间观念较强，按时完成任务，不拖沓'
            },
            {
                self: '对人工智能相关技术有强烈兴趣，有优秀的学习能力和强烈的进取心。'
            },
            {
                self: '喜欢钻研各种新技术，经常到 Github、博客园、CSDN等网站学习代码。'
            },
            {
                self: '较强的责任心和良好的沟通能力。'
            }
        ],

        // resumeOnGithub: '<a class="footer-link" href="https://github.com/huleiya/resume">简历链接（Github）</a>'
    }
});
