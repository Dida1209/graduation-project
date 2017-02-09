/**
 * Created by lenovo-pc on 2017/1/13.
 */
function hasClass(obj,cls){
    return obj.className.match(new RegExp('(^|\\s)'+cls+'(\\s|$)'));
}
function addClass(obj,cls){
    if(!hasClass(obj,cls)) obj.className+=" "+cls;
}
function removeClass(obj,cls){
    if(hasClass(obj,cls)){
        let reg=new RegExp('(^|\\s)'+cls+'(\\s|$)');
        obj.className=obj.className.replace(reg,'');
    }
}

//追加元素
function insertAfter(newElement,position,parent){
    if(parent.lastChild==position){
        parent.appendChild(newElement);
    }else{
        console.log('child');
        parent.insertBefore(newElement,position);
    }

}

//函数节流
function throttle(fn,context,text,delay,mustApplyTime){
    //fn调用的函数，context改变函数内的this对象，text处理的数据，delay延迟时间，最大延迟时间
    clearTimeout(fn.timer);
    fn._cur=Date.now();
    if(!fn._start){
        fn._start=fn._cur;
    }
    if(fn._cur-fn._start>mustApplyTime){
        fn.call(context,text);
        fn._start=fn._cur;
    }else{
        fn.timer=setTimeout(function(){
            fn.call(context,text);
        },delay);
    }

}
//forEach 修给版
var forEach=function(t,o,r){
    if("[object Object]"===Object.prototype.toString.call(t))
        for(var c in t)
            Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);
    else
        for(var e=0,l=t.length;l>e;e++)
            o.call(r,t[e],e,t)
};
