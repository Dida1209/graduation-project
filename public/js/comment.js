/**
 * Created by lenovo-pc on 2017/2/2.
 */
(function(){
   var replys = document.getElementById("reply");
   var comment = document.getElementById("comment");
   var commentForm=document.getElementById("commentForm");

   function commentBorder(){
       comment.addClass(comment,active);
   }

   function orderData(obj){
        var toId=obj.getAttribute("data-toId");
        var fromId=obj.getAttribute("data-fromId");

        function createInput(name,value) {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", name);
            input.setAttribute("value", value);
            console.log(input);
            commentForm.appendChild(input);
        }

        createInput("comment[replyTo]",toId);
        createInput("comment[replyFrom]",fromId);

   }

   if(reply.length>0){
       forEach(replys,function(reply){
           reply.addEventListener("click",function(e){
               commentBorder();
               console.log(e.target);
               orderData(e.target);
           })
       })
   }
})()