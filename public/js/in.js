/**
 * Created by lenovo-pc on 2017/2/4.
 */
(function(){
    var btn=document.querySelectorAll('.btn-group');
    //var dropmenu=document.quer
    var video=document.getElementById('videoForm');
    var test=document.getElementById('testForm');
    var doc=document.getElementById('docForm');
    var ul2=document.querySelectorAll('ul2');
    var ul3=document.querySelectorAll('ul3');

    var sub,digit,flag=false;

    //digit
    var num2=[
        ['顺序表','链表'],//0
        ['栈','队列'],//1
        ['树','二叉树','森林','赫尔曼树'],//2
        ['遍历图','图的连通性','最短路径'],//3
        ['静态查找表','动态查找表','哈希表'],//4
        ['插入排序','快速排序','选择排序']//5
             ]
    var num3=[
        ['线性链表','循环链表','双向链表'],//0
        ['循环队列','链队列'],//1
        ['遍历二叉树','线索二叉树'],//2
        [],//3
        [['顺序表查找','有序表查找','索引顺序表查找'],['二叉排序树','平衡二叉树']],//4
        ['简单排序','堆排序']//5
    ]
    if(btn.length>0){
        console.log('111'+btn);
        forEach(btn, function(btn,item) {
            btn.addEventListener("click", function(e) {
                checkIndex(this,e.target,item);
            }, false);
        });
    }

    //创建下拉菜单
    function createLi(ul,array,index1){
        var template='';
        if(!index1){
            for(var i=0;i<array.length;i++){
                template+='<li><a index="'+i+'">'+array[i]+'</a></li>'
            }
        }else{
            console.log('array[index1]'+array[index1]);
            for(var i=0;i<array[index1].length;i++){
                template+='<li><a index="'+i+'">'+array[index1][i]+'</a></li>';
                console.log(array[index1][i],template);

            }
        }
        for(var j=0;j<ul.length;j++){
            ul[j].innerHTML=template;
        }
        // ul.innerHTML=template;
        console.log(ul[j].innerHTML,template);
    }

    function createValue(btn,substring){
        var parent;
        console.log(btn);
        if(btn.className.indexOf('isVideo')>0){
            parent=video;
            //console.log(Boolean(btn[0].className.indexOf('isVideo')),parent);
        }
        if(btn.className.indexOf('isDoc')>0){
            parent=doc;
            //console.log(btn[0].className.indexOf('isDoc'),parent);
        }
        if(btn.className.indexOf('isTest')>0){
            parent=test;
        }
        //console.log('parent'+btn[0].className.indexOf('isVideo'),parent.childNodes[0],parent.elements[0].value);
        parent.elements[0].value=substring;
    }

    function checkIndex(btn,obj,num){
        console.log(btn,obj,num);
        let index=obj.getAttribute('index');
        if(index>=0){
            if(num%3==0) {
                sub=''+index;
                digit=index;
                btn.childNodes[1].innerHTML=obj.innerHTML;
                //console.log(btn[0].childNodes[1],obj.innerHTML);
                createLi(ul2,num2[digit]);
            }
            if(num%3==1){
                switch(sub){
                    case '0':
                        if(index<1){
                            sub+='-'+index;
                            flag=true;
                            console.log(flag,sub);
                        }else{
                            sub+='-'+index;
                        }
                        break;
                    case '1':
                        if(index<1){
                            sub+='-'+index;
                            flag=true;
                            console.log(flag,sub);
                        }else{
                            sub+='-'+index;
                        }
                        break;
                    case '2':
                        if(index!=1){
                            sub+='-'+index;
                            flag=true;
                            console.log(flag,sub);
                        }else{
                            sub+='-'+index;
                        }
                        break;
                    case '3':
                        sub+='-'+index;
                        flag=true;
                        console.log(flag);
                        break;
                    case '4':
                        if(index==2){
                            sub+='-'+index;
                            flag=true;
                            console.log(flag);
                        }else{
                            sub+='-'+index;
                        }
                        break;
                    case '5':
                        if(index<2){
                            sub+='-'+index;
                            flag=true;
                            console.log(flag);
                        }else{
                            sub+='-'+index;
                        }
                        break;
                    default:
                        console.log('switch error');
                }
                btn.childNodes[1].innerHTML=obj.innerHTML;
                if(!flag&&digit==4){
                    createLi(ul3,num3[digit],index);
                }
                if(!flag&&digit!=4){
                    createLi(ul3,num3[digit]);
                }
            }
            if(num==2){
                sub+='-'+index;
                btn.childNodes[1].innerHTML=obj.innerHTML;
                flag=true;
            }
            if(flag){
                createValue(btn,sub);
            }else{
                console.log('btn[]:'+btn[num+1]);
                addClass(btn[num+1],'active');
            }
        }

    }

    function removeActive(obj,array){
        for(var a=0;a<array.length;a++){
            removeClass(array[a],'active');
        }
    }


    //     }
    //     if(k%3==1){
    //         btn[k].addEventListener('click',function(e){
    //             removeActive.apply(null,k+1);
    //             checkIndex(e,e.target,1);
    //         })
    //     }
    //     if(k%3==2){
    //         btn[2].addEventListener('click',function(e){
    //             checkIndex(e,e.target,2);
    //         })
    //     }
    // }

})()

