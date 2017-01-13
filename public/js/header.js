/**
 * Created by lenovo-pc on 2017/1/12.
 */
(function(){
    let header=document.getElementById("head");
    let logo=document.getElementById("logo");


    //鼠标滚动或者滑动条滑动时，标题改变背景
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',onScroll,false);
    }
    window.onmousewheel=document.onmousewheel=onScroll;
    let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    function onScroll(e){
       //let e=e||window.event;
       if(scrollTop>0){
           console.log(scrollTop);
           header.style.background="#ecf0f1";
           header.style.color="#bdc3c7";
           logo.classList
       }else{
           console.log(scrollTop);
           header.style.background="#1e3034";
       }
    }
    //logo变色
    logo.addEventListener('mouseover',function(){
        logo.classList.toggle("active");
    },false);
    logo.addEventListener('mouseout',function(){
        logo.classList.toggle("active");
    },false)

})()