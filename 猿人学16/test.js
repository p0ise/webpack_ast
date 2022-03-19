
$ = require('jquery')((new (require("jsdom").JSDOM)("<html><head></head><body><p>hello word</p></body></html>", {url: 'https://match.yuanrenxue.com/'})).window.document.defaultView);
let _ajax = $.ajax;

$.ajax = function (a) {
    a.success = function(t){
        t = t["data"];
        console.log(t);
    };
    _ajax(a);
};


let n = require('./webpack_out');

n(127); // 初始化 md5
try{
    n(732)  // 初始化 btoa
}catch (e) {}

n(58); // 初始化 request

for (page = 1; page < 4; page++) {
    request();
}



