
"use strict";

/*汉字和拼音的映射资源*/
var source = require("./source/source.js");

/*tools*/
/*mixin*/
var extend = require("./tools/extend.js");
/*首字母大写*/
var ucfirst = require("./tools/ucfirst.js");
/*搜索*/
var hashSearch = require("./tools/hashSearch.js");

/*constructor*/
var ToPinyin = function(config){
	this.default = {
		singleLine: true,/*多个横线显示一个*/
		spaceToLine: true,/*空格转换成横线*/
		inline: true/*转成拼音后用横线连接*/
	};
	this.config = extend(this.default, config)
};

/*prototype*/
ToPinyin.prototype = {

	constructor: ToPinyin,

	/*设置转换的配置*/
	setConfig: function(config){
		this.config = extend(this.config, config);
		return this;
	},

	/*驼峰式拼音*/
	toPinyinCamel: function(str){
		return this.toPinyin(str, true);
	},

	/*全拼*/
	toPinyinFull: function(str){
		return this.toPinyin(str, false);
	},

	/*转换方法*/
	toPinyin: function(str,camel){
		var length = str.length, pinyinCamel = "", curVal = "",
			curPinyinVal = null, reg = new RegExp('[a-zA-Z0-9\- ]');
        for (var i = 0; i < length; i++) {
            curVal = str.substr(i, 1);
            curPinyinVal = hashSearch(curVal, source);
            /*是否需要驼峰式*/
            if(camel&&camel==true&&curPinyinVal!==false) {
            	curPinyinVal = ucfirst(curPinyinVal);
            }
            if (reg.test(curVal)) {
                pinyinCamel += curVal;
            } else if (curPinyinVal !== false) {
            	if (this.config.inline&&pinyinCamel!="") {
            		pinyinCamel = pinyinCamel+"-"+curPinyinVal;
            	}else{
            		pinyinCamel += curPinyinVal;	
            	}
            }
        }
        /*空格转横线*/
        if (this.config.spaceToLine) {
        	pinyinCamel = pinyinCamel.replace(/ /g, '-');
        }
        if (this.config.singleLine) {
	        while (pinyinCamel.indexOf('--') > 0) {
	            pinyinCamel = pinyinCamel.replace('--', '-');
	        }
        }
        return pinyinCamel;
	}
};

module.exports = new ToPinyin();;
