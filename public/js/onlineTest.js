/**
 * Created by lenovo-pc on 2016/12/31.
 */
(function(){
    let form=document.getElementsByTagName("form");
    let ans=document.querySelectorAll(".ans");
    let com=document.querySelectorAll(".com");
    let btn=document.querySelectorAll(".sure");

    function makeSure(e){
       e.target.parentNode.nextSibling.style.height="55px";
       return false;
    }

    if(com.length>0){
        forEach(com,function(com){
            com.addEventListener("click",function(e){
                console.log("com",this.parentNode);
                this.parentNode.childNodes.item(3).classList.toggle("is-active");
                addClass(this.parentNode,"is-active");
                e.stopPropagation();
            })
        })
    }
    if(ans.length>0){
        forEach(ans,function(ans){
            ans.addEventListener("click",function(e){
                console.log("ans",this.parentNode);
                this.parentNode.childNodes.item(2).classList.toggle("is-active");
                //console.log(!hasClass(this.parentNode,"is-active"));
                addClass(this.parentNode,"is-active");
                e.stopPropagation();
            })
        })
    }

})()