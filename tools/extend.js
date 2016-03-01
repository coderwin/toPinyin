/*属性mix*/
var extend = function(dst, src){
    for(var property in src){
        dst[property] = src[property];
    }
    return dst;
};
module.exports = extend;