/**
 * Created by xiaojianli on 2017/1/11.
 */
/**
 * Created by 872458899@qq.com on 2017/1/7.
 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

const webpackDevOptions = {
    noInfo:true,
    historyApiFallback:true,
    publicPath:config.output.publicPath,
    headers:{
        'Access-Control-Allow-Origin':'*'
    }
};

app.use(require('webpack-dev-middleware')(compiler,webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(80,'localhost',function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:80');
});