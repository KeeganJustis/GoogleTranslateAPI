#!/usr/local/bin/node
var googleTTS = require('google-tts-api');
const opn=require('opn');
var args = process.argv.slice(2);
var newstring= args.join(" ");  
    googleTTS(newstring, 'en', 1)   // speed normal = 1 (default), slow = 0.24
    .then(function (url) {
        opn(url);
    })
    .catch(function (err) {
        console.error(err.stack);
    });
  













