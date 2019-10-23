exports.configs = {
    webhook: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e5931160-875b-45e0-82af-348d9d41d359',
    timers: [
        {
            "hour": [
                10,
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
    mentioned_list: ["@all"],
    content: '帆软平台开发部提醒您:任务千万个,日志第一位。日志不规范,工资两行泪'
} 