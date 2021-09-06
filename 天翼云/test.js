
window = {
    location: {
        origin: 'https://m.ctyun.cn'
    },
    navigator: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
    }
};

let t = require('./webpack_out');
console.log(t('7f6d').k());
