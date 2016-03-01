# toPinyin
## 功能概述
将汉字转换成汉语拼音
Get Chinese pinyin from Chinese.
## 问题来源
director前端路由不支持汉字出现在URL中，所以这里需要将URL中的汉字转换一下
## API(how to use)
### 1、toPinyinCamel获取驼峰式

```javascript
var toPinyin = require("toPinyin");
var testVal = "浅析console和浏览器命令行API";
console.log(toPinyin.toPinyinCamel(testVal))
```

### 2、toPinyinFull获取全拼

```javascript
var toPinyin = require("toPinyin");
var testVal = "浅析console和浏览器命令行API";
console.log(toPinyin.toPinyinFull(testVal))
```
### 3、toPinyin参数控制全拼和驼峰式

toPinyin.toPinyin(testVal, true) == toPinyinCamel获取驼峰式
toPinyin.toPinyin(testVal, false) == toPinyinFull获取全拼

## UMD封装后
压缩后的build/jsToPinyin.min.js
压缩前的jsToPinyin.js