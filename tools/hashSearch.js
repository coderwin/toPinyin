/*hash 搜索*/
var hashSearch = function(str, objt){
	for (var key in objt) {
        if (objt[key].indexOf(str) != -1) {
        	return key
        }
    }
    return false;
};
module.exports = hashSearch;