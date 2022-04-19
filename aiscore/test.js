
const request = require('request');
const n = require('./webpack_out');
const l = n(82);
const m = l.Root.fromJSON(n(97)).lookup("onescore.app.v1.Response");
const M = l.Root.fromJSON(n(97)).lookup("onescore.app.v1.PlayerStats");


request({uri: 'https://api.aiscore.com/v1/web/api/football/comp/stats?lang=3&season_id=5wv78xirr3fekrj&team_id=&type=3&n=2&kind=0', encoding:'binary'}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        let d = new Uint8Array(body.length);
        for (let i = 0; i < body.length; i++) {
            d[i] = body.charCodeAt(i)
        }
        let h = m.decode(d);
        let data = M.decode(h.data);
        console.log(JSON.stringify(data));
    }
});


