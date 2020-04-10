const axios = require('axios')


const url = 'https://oapi.dingtalk.com/robot/send?access_token=e1218776ef269757b57cce0c3a0403d381df1f625a2c69b7848b4d1caf4d78fa'
const data = {
    "msgtype": "text", 
    "text": {
        "content": "我就是git, 是不一样的G~"
    }
}

axios.post(url, data)