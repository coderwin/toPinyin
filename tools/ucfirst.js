/*首字母大写*/
var ucfirst = function(pinyin) {

    if (pinyin.length == 0) return "";

    var first = pinyin.substr(0, 1).toUpperCase();
    var spare = pinyin.substr(1, pinyin.length);
   	return first + spare;
};
module.exports = ucfirst;