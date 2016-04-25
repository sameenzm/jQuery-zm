/**
 * Created by Sameen
 */
define(function (require) {

    var Event = require('./event');

    function Element(doms) {
        if (!doms) {
            return;
        }
        this.dom = doms[0];
        this.length = 1;
    }

    Element.prototype = {
        attr: function (attribute, value){
            if(!attribute){
                console.log('must input attrbute!');
            }
            if(!value){
                return this.dom.getAttribute(attribute);
            }
            else{
                this.dom.setAttribute(attribute,value)
            }
        },
        on: function (types, selector, data, handler){
            // 参数修正
            if(data == null && handler == null){
                handler = selector;
                data = selector = undefined;
            }
            else if(handler == null){
                if(typeof selector === "string"){
                    handler = data;
                    data = undefined;
                }
                else{
                    handler = data;
                    data = selector;
                    selector = undefined;
                }
            }

            if(document.addEventListener){
                document.addEventListener(types, function (e) {
                    return handler(new Event(e));
                }, false);
            }else if(document.attachEvent){
                document.attachEvent('on' + types, function(e){
                    return handler(new Event(e));
                });
            }else{
                this['on' + types] = function(e){
                    return handler(new Event(e));
                };
            }
        }
    };

    return Element;

});