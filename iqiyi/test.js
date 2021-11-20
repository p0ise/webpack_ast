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


let dutO = t('295');
console.log(dutO.cmd5x('/dash?tvid=114869400&bid=300&vid=eac5b7e5c7d6c471a6635725f0173fdc&src=01010031010000000000&vt=0&rs=1&uid=1626142844&ori=pcw&ps=0&k_uid=49c360579e9a7cf874d599de913c6bff&pt=0&d=0&s=&lid=&cf=&ct=&authKey=b66ff0001e1568368db1f0827830ffeb&k_tag=1&ost=0&ppt=0&dfp=a11d64e2e196534268a0b9ab3908bffd86cec25e335c3269344667023b08b60afe&locale=zh_cn&prio=%7B%22ff%22%3A%22f4v%22%2C%22code%22%3A2%7D&pck=4aT95ShhWNgoEXxVzhFwU28qb6fXgiMIWS7d3DjB1t2KBKGj8m1Npt3LUz3KQauw35i99&k_err_retries=0&up=&qd_v=2&tm=1637337797663&qdy=a&qds=0&k_ft1=706436220846084&k_ft4=1162183859249156&k_ft5=262145&bop=%7B%22version%22%3A%2210.0%22%2C%22dfp%22%3A%22a11d64e2e196534268a0b9ab3908bffd86cec25e335c3269344667023b08b60afe%22%7D&ut=1'));


