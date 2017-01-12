/**
 * Created by lenovo-pc on 2017/1/12.
 */
(function(){
    let header=document.getElementById("head");
    //鼠标滚动或者滑动条滑动时，标题改变背景
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',onScroll,false);
    }
    window.onmousewheel=document.onmousewheel=onScroll;
    function onScroll(e){
       e=e||window.event;
       let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
       if(scrollTop>0){
           console.log(scrollTop);
           header.style.opacity="0.5";
       }else{
           console.log(scrollTop);
           header.style.background="#1e3034";
       }
    }
})();