const request = require("request");
const schedule = require("node-schedule");
const configs = require("../config.json");

const sendMsg = (config) => {
  request(
    {
      json: true,
      method: "POST",
      url: config.webhook,
      body: config.msg,
    },
    (err, res, body) => {
      if (err) {
        console.error(err);
      } else {
        console.log("message sent", new Date().toLocaleTimeString());
        console.log("message content", JSON.stringify(config.msg));
      }
    }
  );
};

const scheduleObjectLiteralSyntax = () => {
  console.log("job start, current time", new Date().toLocaleTimeString());
  configs.forEach((config) => {
    config.timers.forEach((timer) => {
      schedule.scheduleJob(timer, () => sendMsg(config));
    });
    config.leading && sendMsg(config);
  });
};

scheduleObjectLiteralSyntax();
