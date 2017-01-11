/**
 * Created by lenovo-pc on 2016/12/31.
 */
(function(){
    let form=document.getElementsByTagName("form");
   // let answers=document.querySelectorAll(".answer");
    let ans=document.querySelectorAll(".ans");
    let com=document.querySelectorAll(".com");
    let btn=document.querySelectorAll(".sure");

    // if(answers.length>0){
    //     forEach(answers,function(answers){
    //         answers.addEventListener("click",function(){
    //             console.log("111",this.childNodes.item(2));
    //             //this.childNodes(0).classList.toggle("is-active");
    //             this.classList.toggle("is-active");
    //             // this.childNodes.item(2).classList.toggle("is-active");
    //         })
    //     })
    // }

    function makeSure(e){
       e.target.parentNode.nextSibling.style.height="55px";
       return false;
    }

    function hasClass(obj,cls){
        return obj.className.match(new RegExp('(^|\\s)'+cls+'(\\s|$)'));
    }

    if(com.length>0){
        forEach(com,function(com){
            com.addEventListener("click",function(e){
                console.log("com",this.parentNode);
                this.parentNode.childNodes.item(3).classList.toggle("is-active");
                if(!hasClass(this.parentNode,"is-active")){
                    this.parentNode.className+=" "+"is-active";
                }
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
                if(!hasClass(this.parentNode,"is-active")){
                    this.parentNode.className+=" "+"is-active";
                }
                e.stopPropagation();
            })
        })
    }
    // if(btn.length>0){
    //     forEach(btn,function(btn){
    //         btn.addEventListener("click",function(e){
    //             this.parentNode.nextSibling.style.display="none";
    //             e.stopPropagation();
    //             return false;
    //         })
    //     })
    // }
})()