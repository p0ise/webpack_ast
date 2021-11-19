window = this;
navigator = {
    appName: 'Netscape'
};
localStorage = {
    getItem: function () {
        return null;
    }
};
sessionStorage = {
    getItem: function () {
        return null;
    }
};

document = {
    cookie: ""
};

const t = require('./webpack_out');
const request = require('request');

let dutO = t('dutO').a;
// console.log(dutO);
let aaa = dutO.prototype.post('https://tianaw.95505.cn/tacpc/tiananapp/customer_login/taPcLogin', {loginMethod: "1", name: "13800000000", password: "a123456789"});
console.log(aaa);

request({
    url: aaa[1],
    method: "POST",
    json: true,
    headers: {
        "key": aaa[0],
        "content-type": "application/json",
    },
    body: JSON.stringify({
        jsonKey: aaa[1].split('=')[1]
    })
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // 请求成功的处理逻辑
    }
});



