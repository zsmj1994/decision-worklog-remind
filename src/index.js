const request = require('request')
const schedule = require('node-schedule');

const configs = require('./config').configs


const sendMsg = (configs) => {

    console.log("current time", new Date())
    console.log("webhook:", configs.webhook)

    request({
        json: true,
        method: 'POST',
        url: configs.webhook,
        body: configs.msg
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