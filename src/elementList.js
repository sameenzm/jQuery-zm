/**
 * Created by Sameen
 */
define(function (require) {

    function ElementList(doms) {
        if (!doms) {
            return;
        }
        this.doms = doms;
        this.length = this.doms.length;
    }

    ElementList.prototype = {
        each: function (fn) {
            for (var i in this.doms) {
                if (isNaN(i)) {     //isNaN: 是否不是数值
                    continue;
                }
                fn(this.doms[i], i);
            }
        },
        addClass: function (cls) {
            if (!cls) {
                return this;
            }
            if (!/^[\w-\s]+$/.test(cls)) {
                $.error(cls + ' is not valid');
                return this;
            }
            this.each(function (dom) {
                cls.split(/\s+/).forEach(function (cls) {
                    // TODO
                    dom.classList.add(cls); //classList 属性返回元素的类名，支持add()、remove()、contains()等
                });
            });
			return this;
        }
    };
    return ElementList;
});