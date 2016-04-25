/**
 * Created by Sameen
 */
define(function (require) {

    function isType(obj, type){
        return Object.prototype.toString.call(obj) === '[object '+ type +']';
    }
    function isFunction(test){
        return isType(test, 'Function');
    }
    function isArray(test){
        return Array.isArray ? Array.isArray(test) : isType(test, 'Array');
    }
    function isPlainObject(test){
        return isType(test, 'Object');
    }
    function extend(target, obj1, obj2) {
        var objList;
        var isDeep = target === true;
        if (typeof target === 'boolean') {
            target = obj1;
            objList = Array.prototype.slice.call(arguments, 0).slice(2);
        }
        else {
            objList = Array.prototype.slice.call(arguments, 0).slice(1);
        }
        objList.forEach(function (obj) {
            for (var i in obj) {
                if (isDeep && isPlainObject(target[i])) {
                    extend(isDeep, target[i], obj[i]);
                }
                else {
                    target[i] = obj[i];
                }
            }
        });
        return target;
    }

    return {
        extend: extend,
        isPlainObject: isPlainObject,
        isArray: isArray,
        isFunction: isFunction
    }

});