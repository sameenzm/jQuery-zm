/**
 * Created by Sameen
 */
define(function (require) {

    var Element = require('./element');

    function ContainerElement(doms) {
        Element.call(this, doms);
    }

    ContainerElement.prototype = new Element();

    ContainerElement.prototype.html = function(html){
        if(!html){
            return this.dom.innerHTML;
        }
        else{
            this.dom.innerHTML = html;
        }
    };
    ContainerElement.prototype.text = function(text){
        if(!value){
            return this.dom.innerText || this.dom.textContent;
        }
        else{
            this.dom.innerText ? this.dom.innerText = text : this.dom.textContent = text;
        }
    };

    return ContainerElement;

});