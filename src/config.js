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
                    "picurl": "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=d484b58ceb1190ef01fb95d9f61a9df7/6d81800a19d8bc3ee08463ab8e8ba61ea9d345c6.jpg"
                }
            ]
        }
    }
} 
