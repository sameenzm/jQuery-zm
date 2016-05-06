/**
 * Created by Sameen
 */
define(function (require) {
    var InputElement = require('./inputElement'),
    ContainerElement = require('./containerElement'),
    ElementList = require('./elementList');
    staticFuc = require('./static'),
    $ = require('./base');

    function jQuery(selector, context){ 
        if(document.querySelectorAll){
            // TODO
            var context = context ? document.querySelector(context) : document;
            var doms = context.querySelectorAll(selector);
            if(doms.length === 1){
                if(doms[0].value){
                    return new InputElement(doms);
                }
                else{
                    return new ContainerElement(doms);
                }
            }
            return new ElementList(doms);
        }
        else {
            // TODO
        }
    }
    
    $.extend(jQuery, $, staticFuc);
    return jQuery;
});