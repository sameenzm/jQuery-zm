/**
 * Created by Sameen
 */
define(function (require) {

    function Event(event){
        this.event = event || window.event;
    }

    Event.prototype = {
        getTarget: function(){
            return this.event.target || this.event.srcElement;
        },
        preventDefault: function(){
            if(this.event.preventDefault) {
                this.event.preventDefault();
            }else if(this.event.returnValue){
                this.event.returnValue = false;	// 该属性是设置或获取事件的返回值
            }
        },
        stopPropagation: function(){
            if(this.event.stopPropagtion){
                this.event.stopPropagtion();
            }else if(this.event.cancelBubble){
                this.event.cancelBubble = true;
            }
        }
    };

    return Event;
});