/**
 * Created by lenovo-pc on 2016/12/28.
 */
(function(){
    let canvas=document.getElementById("canvas");
    console.log(canvas);
    canvas.width=840;
    canvas.height=430;

    let context=canvas.getContext("2d");

    //重绘数组
    let reDrawArray=[];
    //每个查找对象的索引表
    let index=[{start:"0",end:"4"},{start:"5",end:"9"},{start:"10",end:"15"},{start:"16",end:"22"},{start:"23",end:"29"},{start:"30",end:"34"},{start:"35",end:"35"}];
    //每个单元格对象
    let rects=[{id:"0",x: "0",y:"0",text:"循环链表",href:""},{id:"1",x: "0",y:"50",text:"双向链表",href:""},{id:"2",x: "0",y:"100",text:"插入排序",href:""},{id:"3",x: "0",y:"150",text:"快速排序",href:""},{id:"4",x: "0",y:"250",text:"堆排序",href:""},
        {id:"5",x: "125",y:"50",text:"链表",href:""},{id:"6",x: "125",y:"100",text:"顺序表",href:""},{id:"7",x: "125",y:"150",text:"排序",href:""},{id:"8",x: "125",y:"200",text:"选择排序",href:""},{id:"9",x: "125",y:"250",text:"简单排序",href:""},
        {id:"10",x:"250",y:"0",text:"线性链表",href:""},{id:"11",x:"250",y:"50",text:"栈",href:""},{id:"12",x:"250",y:"100",text:"线性表",href:""},{id:"13",x:"250",y:"200",text:"哈希表",href:""},{id:"14",x:"250",y:"250",text:"有序表查找",href:""},{id:"15",x:"250",y:"300",text:"顺序表查找",href:""},
        {id:"16",x:"375",y:"0",text:"链队列",href:""},{id:"17",x:"375",y:"50",text:"队列",href:""},{id:"18",x:"375",y:"100",text:"栈和队列",href:""},{id:"19",x:"375",y:"150",text:"DateBase",href:""},{id:"20",x:"375",y:"200",text:"查找",href:""},{id:"21",x:"375",y:"250",text:"静态查找表",href:""},{id:"22",x:"375",y:"300",text:"索引顺序表查找",href:""},
        {id:"23",x:"500",y:"0",text:"循环队列",href:""},{id:"24",x:"500",y:"50",text:"树",href:""},{id:"25",x:"500",y:"100",text:"树和二叉树",href:""},{id:"26",x:"500",y:"150",text:"最短路径",href:""},{id:"27",x:"500",y:"200",text:"图",href:""},{id:"28",x:"500",y:"250",text:"动态查找表",href:""},{id:"29",x:"500",y:"300",text:"平衡二叉树",href:""},
        {id:"30",x:"625",y:"50",text:"遍历二叉树",href:""},{id:"31",x:"625",y:"100",text:"二叉树",href:""},{id:"32",x:"625",y:"175",text:"遍历图",href:""},{id:"33",x:"625",y:"250",text:"图的连通性",href:""},{id:"34",x:"625",y:"300",text:"二叉排序树",href:""},
        {id:"35",x:"750",y:"100",text:"线索二叉树",href:""}];
    //drawTable();
    drawRect(rects,"rgba(42,123,204,0.3)","12px",0);
   // drawArray();
    //字符串转数字
    function stringToNum(string){
        return parseInt(string);
    }
    //画矩形
    function drawRect(array,color,fontS,flag){
        let arr=array;
        let col=color;
        let size=fontS;
        if(flag==1){
            //重绘，先清空矩形
          context.clearRect(arr[0].x,arr[0].y,90,25);
        }
        for(let item in arr){
            let x = stringToNum(arr[item].x);
            let y = stringToNum(arr[item].y);
            //console.log('draw',x,y);

            context.fillStyle=col;
            context.fillRect(x,y,90,25);
            context.fill();
            context.fillStyle="#333";
            context.fillText(arr[item].text,x+4,y+14);
            context.fill();
            if(flag==2){
                arr.pop();
            }
        }
    }
    //画箭头
    function drawArray() {
        let arrays = [{x0: "125", y0: "50", x1: "90", y1: "25"}, {x0: "125", y0: "60", x1: "90", y1: "60"}, {x0: "125",y0: "150",x1: "80",y1: "125"}, {x0: "125", y0: "160", x1: "80", y1: "160"}, {x0: "125", y0: "225", x1: "80", y1: "250"}]
        for(var item in arrays){
            let x0=parseInt(arrays[item].x0);
            let y0=parseInt(arrays[item].y0);
            let x1=parseInt(arrays[item].x1);
            let y1=parseInt(arrays[item].y1);
            let angle=Math.atan2((y1-y0),(x1-x0));
            //console.log(x0,y0,x1,y1);
            console.log(angle);
            context.beginPath();
            context.strokeStyle="rgba(255,255,255,0.9)";
            context.lineWidth="2";
            context.moveTo(x0,y0);
            context.lineTo(x1,y1);
            context.lineTo(x1-Math.cos(angle)*15,y1-Math.cos(angle)*15);
            //console.log(x1+Math.cos(Math.PI/4)*15,y1-Math.cos((Math.PI/4)+angle)*15);
            //context.moveTo(x1,y1);
            //context.lineTo(x1+Math.cos(angle)*15,y1+Math.cos(angle)*15);
            //console.log(x1+Math.cos(Math.PI/4)*15,y1+Math.cos(Math.PI/4)*15);
            context.stroke();
        }
    }

    //鼠标移动
    canvas.addEventListener("mousemove",function(event){
        //函数节流
        throttle(reDraw,100,getPosition(event));
        //成功后调用
    },false);

    //函数节流代码
    function throttle(fn,delay,text){
        clearTimeout(fn.timeoutId);
        //把暂存的高亮数组给复原，重绘
        drawRect(reDrawArray,"rgba(42,123,204,0.3)","12px",2);
        fn.timeoutId=setTimeout(function(){
                fn(text);
            },delay);
    }
    //鼠标坐标
    function getPosition(event){
        let x,y;
        if(event.layerX||event.layerX==0){
            x=event.layerX;
            y=event.layerY;
        }else if(event.offsetX||event.offsetX==0){
            x=event.offsetX;
            y=event.offsetY;
        }
        return {x:x,y:y};
    }
    //找到目标矩形，重绘
    function reDraw(obj){
        //console.log(obj);
        //if()
        let xi=stringToNum(obj.x/125);

        let start=stringToNum(index[xi].start);
        let end=stringToNum(index[xi].end);
        //console.log(start,end);
        for(let i=start;i<=end;i++){
            if(obj.y>=stringToNum(rects[i].y)&&obj.y<=(stringToNum(rects[i].y)+25)){
                reDrawArray.push(rects[i]);
                console.log(reDrawArray.length);
                drawRect(reDrawArray,"#eee","12px",1);
                break;
            }
        }
    }

    //context.addEventListener("click",function(){
    //点击跳转

    //})

   // let k=0;
    // for(let item=0;item<index.length-1;item++){
    //     let value=stringToNum(index[item].x)+90;
    //
    //     if(obj.x<value){
    //         console.log(value);
    //         console.log(index[item+1]);
    //
    //         let i=stringToNum(index[item].start);
    //             console.log(stringToNum(index[item+1].start)-1);
    //             while(i<=(stringToNum(index[item+1].start)-1)) {
    //                 itemY=stringToNum(rects[i].y);
    //                 console.log(itemY);
    //                 if (obj.y>itemY&&obj.y<itemY+25){
    //                     console.log(rects[i].text);
    //                     reDrawArray.push(rects[i]);
    //                     drawRect(reDrawArray,"rgba(42,123,204,1)","12px",1);
    //                     k=1;
    //                     break;
    //                 }
    //                 i++;
    //             }
    //             if(!k){
    //
    //             }
    //     }
    // }
    //画表格
    function drawTable(){
        let x=[0,90,125,215,250,340,375,465,500,590,625,715,750,840];
        let y=[0,25,50,75,100,125,150,175,200,225,250,275,300,325];

        for(let i=0;i<x.length;i++){
            //console.log(context);
            context.beginPath();
            context.strokeStyle="rgba(0,0,0,0.9)";
            context.lineWidth="2";
            context.moveTo(x[i],0);
            context.lineTo(x[i],325);
            context.stroke();
        }
        for(let i=0;i<y.length;i++){
            //console.log(context);
            context.beginPath();
            context.strokeStyle="rgba(0,0,0,0.9)";
            context.lineWidth="2";
            context.moveTo(0,y[i]);
            context.lineTo(830,y[i]);
            context.stroke();
        }
    }
})()