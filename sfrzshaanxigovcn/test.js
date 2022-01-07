
let n = require('./webpack_out');
let DCSAPPClientAPI = require('./DCSAPPClientAPI-0.0.0.7');

let password_enc = n('56f2');
let u = "kcn071805buj05k313ql" , c = "4sig52dR0Xxw2raF0v37dngO3DiiR1PaITXS4ddJiRb1xfjSjAUQ6P9VuyxfaiZ8gElGKMcSskm70yGY0ZrQEQ==";

let data = {
    "txnCommCom":{"txnIttChnlId":"C0081234567890987654321","txnIttChnlCgyCode":"BC01C101"},
    "txnBodyCom":{
        "loginType":"AU01","loginNo":"13088888888",
        "loginPassword":password_enc.a("a123456"),
        "acctType":"10","vcodeId":"1641482664426","vcode":"y9sb",
        "sessionId":"fe823fd1-cb32-453f-a037-b4800037767d","clientId":"000000000"
    }
};
let t = DCSAPPClientAPI.parseUtf8StringToArray(JSON.stringify(data));
let n2 = DCSAPPClientAPI.workKey_nego_and_data_encrypt_cpa(false, u, c, t, false);
let paypload = n2.keySM2Cipher;

console.log(paypload);