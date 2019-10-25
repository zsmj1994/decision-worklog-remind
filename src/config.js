exports.configs = {
    webhook: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=0ea0fa1c-4870-44a1-b3aa-9baf64696fa8',
    timers: [
        {
            "hour": [
                10,
                11,
                12,
                14,
                16,
                20,
                22
            ],
            "minute": 0,
            "dayOfWeek": [
                1,
                2,
                3,
                4,
                5
            ]
        },
        {
            "hour": 17,
            "minute": 30,
            "dayOfWeek": [
                1,
                2,
                3,
                4,
                5
            ]
        }
    ],
    msg: {
        "msgtype": "news",
        "news": {
            "articles": [
                {
                    "title": "又到了记日志的时候啦",
                    "description": "任务千万个 日志第一位 日志不规范 工资两行泪",
                    "url": "about:blank",
                    "picurl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572000832962&di=449fa2809c4db41a89e467c2b2027cc1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F25%2F20180525233420_2aCmc.jpeg"
                }
            ]
        }
    }
} 
