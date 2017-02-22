/**
 * Created by lenovo-pc on 2017/1/12.
 */
(function(){
    let header=document.getElementById("head");
    let logo=document.getElementById("logo");

    let resources=header.children.item(1).children;
    console.log(resources);

    let alist=document.querySelectorAll(".item-list");
    forEach(alist,function(a){
        a.addEventListener("click",function(e){
            let target=e.target;
            forEach(resources,function(resource){
                let resChild=resource.lastChild;
                let href=resChild.href;
                resource.lastChild.href=href.substring(0,href.lastIndexOf('/')+1)+target.getAttribute('index');
                console.log(resource.lastChild);
            })
            //console.log(this,target.getAttribute('index'));
        })
    })
    //let resource=document.getElement

    //鼠标滚动或者滑动条滑动时，标题改变背景
    // if(document.addEventListener){
    //     document.addEventListener('DOMMouseScroll',onScroll,false);
    // }
    // window.onmousewheel=document.onmousewheel=onScroll;
    //
    // function onScroll(){
    //    //let e=e||window.event;
    //    let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    //    if(scrollTop>0){
    //        console.log(scrollTop);
    //        addClass(header,"is-active");
    //        addClass(logo,"is-active");
    //    }else{
    //        removeClass(header,"is-active");
    //        removeClass(logo,"is-active");
    //    }
    // }
    // //logo变色
    // logo.addEventListener('mouseover',function(){
    //     addClass(logo,"active");
    // },false);
    // logo.addEventListener('mouseout',function(){
    //     removeClass(logo,"active");
    // },false)

})()