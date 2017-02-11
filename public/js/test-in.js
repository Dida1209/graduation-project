/**
 * Created by lenovo-pc on 2017/2/10.
 */
(function(){
    var addBtn=document.getElementById('addTest');
    var testDel=document.getElementById('testDel');
    var testSubmit=document.getElementById('testSubmit');
    var testBlock=document.getElementById('testContent');
    var concatContent=document.getElementById('concatContent');


    //form的值
    function formContent(){
        var testName=document.getElementById('testName');
        var testAnsA=document.getElementById('testAnsA');
        var testAnsB=document.getElementById('testAnsB');
        var testAnsC=document.getElementById('testAnsC');
        var testAnsD=document.getElementById('testAnsD');
        var correctAns=document.getElementById('correctAns');
        var why=document.getElementById('why');
    }

    //把隐藏的试题block展示
    function showTestBlock(){
        console.log('showTestBlock'+testBlock);
        addClass(testBlock,'active');
    }
    // //在inputContent的div板块里添加测试题的模板
    // function addTestBlock(){
    //     var template='<div class="form-group">'+
    //         '<label class="col-sm-2" for="testName">题目:</label>'+
    //         '<input class="col-sm-8" id="testName" class="form-control" type="text" />'+
    //         '<label class="col-sm-2" for="textAnsA">A:</label>'+
    //         '<input class="col-sm-8" id="textAnsA" class="form-control" type="text" />'+
    //         '<label class="col-sm-2" for="textAnsB">B:</label>'+
    //         '<input class="col-sm-8" id="textAnsB" class="form-control" type="text" />'+
    //         '<label class="col-sm-2" for="textAnsC">C:</label>'+
    //         '<input class="col-sm-8" id="textAnsC" class="form-control" type="text" />'+
    //         '<label class="col-sm-2" for="textAnsD">D:</label>'+
    //         '<input class="col-sm-8" id="textAnsD" class="form-control" type="text" />'+
    //         '<label class="col-sm-2" for="correctAns">正解:</label>'+
    //         '<input class="col-sm-8" id="correctAns" class="form-control" type="text" />'+
    //         '<label class="col-sm-2" for="testWhy">详解:</label>'+
    //         '<input class="col-sm-8" id="testWhy" class="form-control" type="text" />'+
    //         '</div>';
    //     contentBlock.innerHTML=template;
    // }


    //隐藏testBlock
    function displayTestBlock(){
        removeClass(testBlock,'active');
    }
    //生成试题
    function concatTest(){
        displayTestBlock();
        formContent();
        var template='<div class="col-sm-10"><div><span class="concatDel">删除</span><span class="concatModify">修改</span></div>' +
            '<p>题目:'+testName.value+'<br/>'+
            'A:'+testAnsA.value+'<br/>'+
            'B:'+testAnsB.value+'<br/>'+
            'C:'+testAnsC.value+'<br/>'+
            'D:'+testAnsD.value+'<br/>'+
            '正解:'+correctAns.value+'<br/>'+
            '详解:'+why.value+'<br/>'+
            '</p></div>';
        concatContent.innerHTML += template;
    }


    addBtn.addEventListener("click",showTestBlock,false);
    testDel.addEventListener("click",displayTestBlock,false);
    testSubmit.addEventListener("click",concatTest,false);
})()