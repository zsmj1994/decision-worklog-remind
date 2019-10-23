const request = require('request')
const schedule = require('node-schedule');

const configs = require('./config').configs


const sendMsg = (configs) => {
    const data = {
        'msgtype': 'text',
        'text': {
            'content': configs.content,
            'mentioned_list': configs.mentioned_list
        }
    }
    console.log("current time", new Date())

    request({
        json: true,
        method: 'POST',
        url: configs.webhook,
        body: data
    }, (err, res, body) => {

    })
}


const scheduleObjectLiteralSyntax = (configs) => {

    console.log("start")

    configs.timers.forEach(timer => {
        schedule.scheduleJob(timer, () => sendMsg(configs))
    });
}



scheduleObjectLiteralSyntax(configs)