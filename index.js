// const axios = require('axios')


// const url = 'https://oapi.dingtalk.com/robot/send?access_token=e1218776ef269757b57cce0c3a0403d381df1f625a2c69b7848b4d1caf4d78fa'
const data = {
    "msgtype": "text", 
    "text": {
        "content": "我就是git, 是不一样的G~GG"
    }
}

// axios.post(url, data)

var http = require('http');
var querystring =require('querystring');
var post_data = querystring.stringify(data);
var options = {
                   hostname:'oapi.dingtalk.com',     //此处不能写协议，如 ： http://,https://  否则会报错
                   port:80,
                   path:'/robot/send?access_token=e1218776ef269757b57cce0c3a0403d381df1f625a2c69b7848b4d1caf4d78fa',
                   method:'POST',
                   headers: {
                        'Content-Type':'application/x-www-form-urlencoded',
                        'Content-Length': post_data.length
                   }
               };
var req = http.request(options,function(res){
                        console.log('STATUS:'+res.statusCode);
                        console.log('HEADERS:'+JSON.stringify(res.headers));
                        res.setEncoding('utf8');
                        res.on('data',function(chunk){
                                console.log('BODY:'+chunk);
                        });
           });
// write data to request body
req.write(post_data);
req.end();
