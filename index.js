#!/usr/bin/env node
'use strict'
var request = require('request')

if(process.argv.lenth < 3){
    console.log('please input a url')
    return
}

request('http://url2markdown.herokuapp.com/?url='+process.argv[2], function(error, response, body) {
    if(error){
        console.log(error)
    }
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
})
