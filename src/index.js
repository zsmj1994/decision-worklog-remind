const request = require('request')
const schedule = require('node-schedule');

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

const requestConfig = () => {
    return new Promise((resolve, reject) => {
        request('https://raw.githubusercontent.com/zsmj1994/decision-worklog-remind/master/config.json', (error, response, body) => {
            if (error) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}


const scheduleObjectLiteralSyntax = (configs) => {
    console.log("start")
    configs.timers.forEach(timer => {
        schedule.scheduleJob(timer, () => requestConfig().then(configs => sendMsg(configs)))
    });
}


requestConfig().then(configs => {
    scheduleObjectLiteralSyntax(configs)
})