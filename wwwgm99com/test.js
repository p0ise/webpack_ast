const {JSDOM} = require('jsdom');
window = (new JSDOM('<!doctype html><html><body></body></html>')).window;
document = window.document;
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
};
window.navigator = navigator;




let i = require('./webpack_out');
let a = i(3);
console.log((new a).encode("a123456", 1641473447987));

