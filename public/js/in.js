/**
 * Created by lenovo-pc on 2017/2/4.
 */
(function(){
    var btn=document.querySelectorAll('.btn-group');
    //var dropmenu=document.quer
    var flag=0;
    if(btn.length>0){
        console.log('111'+btn[1]);
    }
    function checkIndex(obj,num){
        console.log(obj);
        let index=obj.getAttribute('index');
        if(index>=0){
            flag=index;
            console.log(flag);
        }
        if(num<2){
            addClass(btn[num+1],'active');
        }else{
            concatSub();
        }
    }
    btn[0].addEventListener('click',function(e){
        removeClass(btn[1],'active');
        removeClass(btn[2],'active');
        checkIndex(e.target,0);
    })
    btn[1].addEventListener('click',function(e){
        removeClass(btn[2],'active');
        checkIndex(e.target,1);
    })
    btn[2].addEventListener('click',function(e){
        checkIndex(e.target,2);
    })
})()

