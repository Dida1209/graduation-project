/**
 * Created by lenovo-pc on 2017/2/4.
 */
(function(){
    var btn=document.querySelectorAll('.btn-group');
    //var dropmenu=document.quer
    var res=document.getElementById('resourceForm');
    var video=document.getElementById('videoForm');
    var test=document.getElementById('testForm');
    var doc=document.getElementById('docForm');
    var ul2=document.querySelectorAll('.ul2');
    var ul3=document.querySelectorAll('.ul3');

    var sub='';
    var digit,flag=false;

    //digit
    var num2=[
        ['顺序表','链表'],//0
        ['栈','队列'],//1
        ['树','二叉树','森林','赫尔曼树'],//2
        ['遍历图','图的连通性','最短路径'],//3
        ['静态查找表','动态查找表','哈希表'],//4
        ['插入排序','快速排序','选择排序']//5
             ];
    var num3=[
        ['线性链表','循环链表','双向链表'],//0
        ['循环队列','链队列'],//1
        ['遍历二叉树','线索二叉树'],//2
        [],//3
        [['顺序表查找','有序表查找','索引顺序表查找'],['二叉排序树','平衡二叉树']],//4
        ['简单排序','堆排序']//5
    ];
    if(btn.length>0){
        forEach(btn, function(btn,item) {
            btn.addEventListener("click", function(e) {
                if(item%3==0){
                    removeActive([item+1,item+2]);
                }
                if(item%3==1){
                    removeActive([item+1]);
                }
                console.log('click');
                checkIndex(this,e.target,item);
            }, false);
        });
    }

    //删除Active属性
    function removeActive(index){
        for(var a=0;a<index.length;a++){
            var ind=index[a];
            //console.log('removeBtn'+btn[ind]);
            removeClass(btn[ind],'active');
        }
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
                //console.log(array[index1][i],template);

            }
        }
        for(var j=0;j<ul.length;j++){
            ul[j].innerHTML=template;
            //console.log(ul[j].innerHTML,template);
        }

    }

    function createValue(but,subjection){
        var parent;
        console.log(but);
        if(but.className.indexOf('isResource')>0){
            parent=res;
        }
        if(but.className.indexOf('isVideo')>0){
            parent=video;
        }
        if(but.className.indexOf('isDoc')>0){
            parent=doc;
        }
        if(but.className.indexOf('isTest')>0){
            parent=test;
            console.log('but'+but,parent);
        }
        parent.elements[0].value=subjection;
    }

    //检查sub
    function checkSub(number,subject){
        if(number==0){
                subject='';
                console.log('subject'+subject);
                return subject;
        }
        if(number==1){
                subject=subject.substring(0,1);
                console.log('subject'+subject);
                return subject;
        }
        if(number==2){
                subject=subject.substring(0,3);
                console.log('subject'+subject);
                return subject;
        }
    }
    //检查index
    function checkIndex(thisBtn,obj,num){
        let index=obj.getAttribute('index');
        if(index>=0){
            console.log(flag);
            if(num%3==0) {
                //console.log('sub'+sub);
                sub=checkSub(0,sub);
                sub=''+index;
                digit=index;
                thisBtn.childNodes[1].innerHTML=obj.innerHTML;
                //console.log('number=0,sub='+sub);
                createLi(ul2,num2[digit]);
            }
            if(num%3==1){
               // console.log('sub'+sub);
                sub=checkSub(1,sub);
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
                thisBtn.childNodes[1].innerHTML=obj.innerHTML;
                if(!flag&&digit==4){
                    createLi(ul3,num3[digit],index);
                }
                if(!flag&&digit!=4){
                    createLi(ul3,num3[digit]);
                }
            }
            if(num%3==2){
                //console.log('sub'+sub);
                sub=checkSub(2,sub);
                sub+='-'+index;
                thisBtn.childNodes[1].innerHTML=obj.innerHTML;
                flag=true;
            }
            if(flag){
                flag=false;
                createValue(thisBtn,sub);
            }else{
                //console.log('btn[]:'+btn[num+1]);
                if(num<btn.length-1){
                    btn[num+1].childNodes[1].innerHTML='请选择'+'<span class="caret"></span>';
                    addClass(btn[num+1],'active');
                }
            }
        }

    }

})()

