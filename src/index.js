const request = require('request')
const schedule = require('node-schedule');
const configs = require('../config.json')

const sendMsg = (configs) => {

    request({
        json: true,
        method: 'POST',
        url: configs.webhook,
        body: configs.msg
    }, (err, res, body) => {
        if (err) {
            console.error(err)
        } else {
            console.log("message sent", (new Date()).toLocaleTimeString())
            console.log("message content", JSON.stringify(configs.msg))
        }
    })
}


const scheduleObjectLiteralSyntax = (configs) => {
    console.log("job start, current time", (new Date()).toLocaleTimeString())
    configs.timers.forEach(timer => {
        schedule.scheduleJob(timer, () => sendMsg(configs))
    });
}


scheduleObjectLiteralSyntax(configs)