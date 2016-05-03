/**
 * Created by Sameen
 */
define(function (require) {

    var Element = require('./element');

    function InputElement(doms) {
        Element.call(this, doms);
    }

    InputElement.prototype = new Element();

    InputElement.prototype.val = function (text){
        if (!text) {
            return this.dom.value;
        }
        else {
            this.dom.value = text;
        }
    };
    return InputElement;
});