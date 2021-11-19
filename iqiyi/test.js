const { JSDOM } = require("jsdom");
const dom = new JSDOM("<html><head></head><body><p>hello word</p></body></html>", {
    url: "http://www.iqiyi.com/",
    referrer: "http://www.iqiyi.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 1000000
});
global.window = dom.window;
global.document = window.document;
global.self = window;
document.domain = "iqiyi.com";


const t = require('./webpack_out');

delete process;
delete require;
// delete global;
module = undefined;

let dutO = t('295');
console.log(dutO.cmd5x("/dash/asd"));


