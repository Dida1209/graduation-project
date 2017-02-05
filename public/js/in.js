/**
 * Created by lenovo-pc on 2017/2/4.
 */
(function(){
    var btn=document.querySelectorAll('.btn-group');
    //var dropmenu=document.quer
    var video=document.getElementById('videoForm');
    var test=document.getElementById('testForm');
    var doc=document.getElementById('docForm');

    var sub,flag=false;
    // if(btn.length>0){
    //     console.log('111'+btn[1]);
    // }

    function createValue(substring){
        if(btn[0].className.indexOf('isVideo')){
            parent=video;
        }
        if(btn[0].className.indexOf('isDoc')){
            parent=doc;
        }
        if(btn[0].className.indexOf('isTest')){
            parent=test;
        }
        parent.elements[0].value=substring;
        console.log(parent.elements[0],parent.elements[0].value)
    }

    function checkIndex(obj,num){
        console.log(obj);
        let index=obj.getAttribute('index');
        if(index>=0){
            if(num==0) {
                sub=''+index;
                console.log(flag,sub);
            }
            if(num==1){
                switch(sub){
                    case '0':
                        if(index<1){
                            sub+='-'+index;
                            flag=true;
                            console.log(flag,sub);
                        };
                        break;
                    case '1':
                        if(index<1){
                            sub='-'+index;
                            flag=true;
                            console.log(flag,sub);
                        };
                        break;
                    case '2':
                        if(index!=1){
                            sub='-'+index;
                            flag=true;
                            console.log(flag,sub);
                        };
                        break;
                    case '3':
                        sub='-'+index;
                        flag=true;
                        console.log(flag);
                        break;
                    case '4':
                        if(index==2){
                            sub='-'+index;
                            flag=true;
                            console.log(flag);
                        };
                        break;
                    case '5':
                        if(index<2){
                            sub='-'+index;
                            flag=true;
                            console.log(flag);
                        };
                        break;
                    default:
                        console.log('switch error');
                }
            }
            if(num==2){
                sub='-'+index;
            }
            if(flag){
                createValue(sub);
            }else{
                addClass(btn[num+1],'active');
            }
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

