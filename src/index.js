const fs = require('fs')
const path = require('path')
const request = require('request')
const schedule = require('node-schedule')
const configs = require('../config.json')

const sendMsg = () => {
    fs.readFile(path.resolve(__dirname, '../config.json'), function (err, data) {
        if (err) {
            return console.error(err)
        }
        const configs = JSON.parse(data)
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

    })
}

const scheduleObjectLiteralSyntax = () => {
    console.log("job start, current time", (new Date()).toLocaleTimeString())
    configs.timers.forEach(timer => {
        schedule.scheduleJob(timer, () => sendMsg())
    });
}


scheduleObjectLiteralSyntax()