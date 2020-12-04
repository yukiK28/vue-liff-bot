// vue.config.js
// import path from "path";
const fs = require('fs')
module.exports = {
    publicPath: './',
    devServer: {
        // https: {
        //     key: fs.readFileSync('./localhost+1-key.pem'),
        //     cert: fs.readFileSync('./localhost+1.pem')
        // },
        // public: 'https://192.168.142.33:8080'
        // public: 'https://172.20.10.4:8080/'
    }
}