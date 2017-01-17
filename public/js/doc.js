/**
 * Created by lenovo-pc on 2017/1/17.
 */
(function(){
    let asideIcon=document.getElementById("aside-icon");
    let icons=[];
    console.log(asideIcon);
    for(let i=0;i<asideIcon.childNodes.length;i++){
        icons[i]=asideIcon.childNodes.item(i);
    }
    console.log(icons);
    if(icons.length>0){
        forEach(icons,function(icon,index){
            icon.addEventListener("mouseover",function(){
                // /console.log("mouseover");
                throttle(mouseIn,null,index,300,500);
            },false);
            icon.addEventListener("mouseout",function(){
                throttle(mouseOut,null,index,300,500);
            },false);
            icon.addEventListener("click",function(){
                if(!hasClass(this,"active")) {
                    addClass(this,"active");
                }else{
                    removeClass(this,"active");
                }
            },false);
        });
    }
    function mouseIn(index){
        // let _top=0;
        // if(index=="0"){
        //     _top=50;
        // }else if(index=="1"){
        //     _top=100;
        // }else{
        //     _top=150;
        // }
        //console.log("1  "+index,_top);
        $(icons[index]).animate({
            opacity:"1"
        },500);
    }
    function mouseOut(index){
        $(icons[index]).animate({
            opacity:"0.5"
        },500);
    }
})()