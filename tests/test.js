var toPinyin = require("../toPinyin.js");
var testVal = "浅析console和浏览器命令行API";
console.log(toPinyin.toPinyinCamel(testVal))


var _toPinyin = require("../jsToPinyin.js");
var testVal = "浅析console和浏览器命令行API";
console.log(_toPinyin.toPinyinCamel(testVal))


var __toPinyin = require("../build/jsToPinyin.min.js");
var testVal = "浅析console和浏览器命令行API";
console.log(__toPinyin.toPinyinCamel(testVal))