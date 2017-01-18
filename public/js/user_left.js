/**
 * Created by lenovo-pc on 2017/1/18.
 */
(function(){
    let userLeft=document.getElementById("user_left");
    let userMenu=[];
    for(let i=1;i<userLeft.childNodes.length;i++){
        userMenu[i-1]=userLeft.childNodes.item(i);
    }

    if(userMenu.length>0){
        console.log(userMenu);
        userMenu.forEach(function(icon){
            icon.addEventListener("mouseover",function(e){
                iconRemoveClass();
                console.log(e.target);
                iconAddClass(e.target);
            },false);
        });
    }

    function iconRemoveClass(){
        for(let i=0;i<userMenu.length;i++){
            removeClass(userMenu[i],"active");
        }
    }
    function iconAddClass(index){
        addClass(index,"active");
    }
})()