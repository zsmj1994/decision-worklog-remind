const request = require('request')
const schedule = require('node-schedule');

const configs = require('./config').configs


const sendMsg = () => {
    const data = {
        'msgtype': 'text',
        'text': {
            'content': '杜易娜喊你记日志啦',
            'mentioned_list': ['Abby']
        }
    }
    console.log("send")

    request({
        json: true,
        method: 'POST',
        url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e5931160-875b-45e0-82af-348d9d41d359',
        body: data
    }, (err, res, body) => {

    })
}


const scheduleObjectLiteralSyntax = (configs) => {
    console.log("start")
    configs.timers.forEach(timer => {
        schedule.scheduleJob(timer, sendMsg)
    });
}



scheduleObjectLiteralSyntax(configs)