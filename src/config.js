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
    mentioned_list: ["@all"],
    content: '帆软平台开发部提醒您:任务千万个,日志第一位。日志不规范,工资两行泪'
} 