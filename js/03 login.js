//点击logo跳回首页
$("#box1>img").on("click",function(){
	location.href="01HomePage.html?pid=";
})
//跳转注册
$("#reg").on("click",function(){
	location.href="04Registered.html?";
})
//事件监听 判断用户名
var username=document.getElementById("username");
var usep=document.getElementsByClassName("use-p")[0];
 var arr=[]; brr=[];   // arr用来装属性(用户名)，brr用来装属性值（密码）
        //只遍历对象自身的属性，而不包含继承于原型链上的属性。  
  for(var k in localStorage){   
         if (localStorage.hasOwnProperty(k) === true){  
            arr.push(k);    
            brr.push(localStorage[k]);   
            }                 
        } 
        console.log(arr,brr)
     username.addEventListener('change',function(){  
        for(var i=0;i<arr.length;i++){
        	if(username.value==arr[i] ){i=arr.length;username.style="border:2px solid green;";usep.style="display:none;"} 
        	else{username.style="border:2px solid red;";usep.style="display:block;"}
        }     
     })

//点击登录
var btn=document.getElementById("btn")
var userpas=document.getElementById("userpas")
btn.onclick=function(){	
	 if(userpas.value!=localStorage.getItem(username.value)){alert("密码不正确"),userpas.value=""}
	 else{
 	Cookie.set("id",username.value,999)
	 	location.href="01HomePage.html?pid=";
	 }
}



