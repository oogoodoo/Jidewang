//点击logo跳回首页
$("#box1>img").on("click",function(){
	location.href="01HomePage.html?pid=";
})

//跳转登录
$("#gohome>span").on("click",function(){
	location.href="03LoginPage.html?";
})


var regbtn=document.getElementById("regbtn");  //拿到注册按钮
var u1=document.getElementById("u1");
var u2=document.getElementById("u2");
var u3=document.getElementById("u3");
// 监听判断11位---------------------------------------------
var usetel=document.getElementById("usetel");
var q1=0;
        
 var arr=[];  
     //只遍历对象自身的属性，而不包含继承于原型链上的属性。  
  for(var k in localStorage){   
         if (localStorage.hasOwnProperty(k) === true){  
            arr.push(k);               
            }                 
        }      
      usetel.addEventListener('change',function(){
    	     if(usetel.value.trim().length!=11) {alert("格式错误请重新输入!");u1.style="border:2px solid red;";q1=0;}
             else {  
             	for(var i=-1;i<arr.length;i++){
             		console.log("111")
           	if(usetel.value==arr[i] ){i=arr.length;u1.style="border:2px solid red;";alert("用户已存在");q1=0;} 
        	else{u1.style="border:2px solid green;";q1=1;}
        	}
             }                     
    	})
             
          
// 监听判断密码格式---------------------------------------------
var pwd=document.getElementById("usepas");	  //拿到密码框
var b=/^(?!\d*$)(?![a-zA-Z]*$)([0-9]|[a-zA-Z]){6,12}$/g   //匹配密码正则
var q2=0;
     pwd.addEventListener('change',function(){   
     	      if(pwd.value.trim().match(b)==null){alert("格式错误请重新输入!");u2.style="border:2px solid red;";q2=0;pwd.value="";q3=0;}               
              else {u2.style="border:2px solid green;";q2=1; }
         })
// 监听判断二次输入密码---------------------------------------------
var pwd2=document.getElementById("usepas2");	
var q3=0;
     pwd2.addEventListener('change',function(){      	   
     	      if(pwd2.value.trim()!=pwd.value.trim()){alert("确认密码不正确!请重新输入");u3.style="border:2px solid red;";q3=0;pwd2.value="";}               
              else {u3.style="border:2px solid green;" ;q3=1;}
         })


// 监听判断验证码---------------------------------------------
var codetex=document.getElementById("codetex");	
var code=document.getElementById("code");	
var q4=0;
  code.onclick=function(){
  	     var m=Math.random()*99999
  	     var r = Math.floor(Math.random()*255);
         var g = Math.floor(Math.random()*255);
         var b = Math.floor(Math.random()*255);
  	     code.style= 'background-color:rgba('+r+','+g+','+b +',0.9)'
  	     code.innerText=parseInt(m)
  }
 codetex.addEventListener('change',function(){   
            if(codetex.value!=code.innerText){alert("验证码不正确!");codetex.style="border:2px solid red;";q4=0;}
            else{codetex.style="border:2px solid green;" ;q4=1;}
 })
    
//点击注册
regbtn.onclick=function(){
	if(q1==1&&q2==1&&q3==1&&q4==1){
		localStorage.setItem(usetel.value.trim(),pwd.value.trim())
		console.log(localStorage)
		alert("注册成功，点击确认返回登录");		
	location.href="03LoginPage.html?";
	}
	else{alert("信息不正确！")}	
}

		
		
		

  

