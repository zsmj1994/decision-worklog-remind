const request = require('request')
const schedule = require('node-schedule');

const sendMsg = (configs) => {
    let cfg
    configs && (cfg = configs)
    console.log("current time", (new Date()).toLocaleTimeString())
    console.log("webhook:", cfg.webhook)

    request({
        json: true,
        method: 'POST',
        url: cfg.webhook,
        body: cfg.msg
    }, (err, res, body) => {

    })
}

const requestConfig = () => {
    return new Promise((resolve, reject) => {
        request('https://raw.githubusercontent.com/zsmj1994/decision-worklog-remind/master/config.json', (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}


const scheduleObjectLiteralSyntax = (configs) => {
    console.log("start")
    configs.timers.forEach(timer => {
        schedule.scheduleJob(timer, () => requestConfig().then(configs => sendMsg(configs)), error => sendMsg())
    });
}


requestConfig().then(configs => {
    scheduleObjectLiteralSyntax(configs)
})
