//跳转登录
$("#usernav-d").on("click",function(){
	if(Cookie.has('id')){location.href="07UserPage.html?";}
	else{location.href="03LoginPage.html?";}			
})
//跳转注册
$("#usernav-z").on("click",function(){
	location.href="04Registered.html?";
})
//跳转聚宝车
$("#buycar").on("click",function(){
	if(Cookie.has('id')){location.href="05BuyCarPage.html?";}
	else{location.href="03LoginPage.html?";}	
})
//点击logo跳回首页
$("#box1>img").on("click",function(){
	location.href="01HomePage.html?pid=";
})
//点击首页回到首页
$("#mestitle>span").eq(1).on("click",function(){
	location.href="01HomePage.html?pid=";
})

window.onload=function(){
	//	判断是否有cookie,有的话直接跳转登录
	if(Cookie.has('id')){		
		 var arr = document.cookie.split(";");		
	     $("#usernav-d>span").text("你好,"+arr[0].split("=")[1]);
	     $("#usernav-z>span").text("注销");
	     $("#usernav-z").on("click",function(){
	     	for(var j=0;j<arr.length;j++){
	     		var jrr=arr[j].split("=");
	     		console.log(jrr[0].trim())
      	 Cookie.set(jrr[0].trim(),0,-10);
	     	}	     	
       location.href="01HomePage.html?";
          })
	          }else{Cookie.set('id',0,-10);}

//获取日历信息
var d=new Date;
var dat=d.getDate();
var dayy=d.getDay();
var yearr=d.getFullYear();
var mon=d.getMonth()+1;


var data=document.getElementById("date");
var days=document.getElementById("days");
var year=document.getElementById("year");

data.innerText=dat;
year.innerText=yearr+"-"+mon
 
if(dayy==1){days.innerText="星期一";}
else if(dayy==2){days.innerText="星期二";}
else if(dayy==3){days.innerText="星期三";}
else if(dayy==4){days.innerText="星期四";}
else if(dayy==5){days.innerText="星期五";}
else if(dayy==6){days.innerText="星期六";}
else {days.innerText="星期日";}
  
  $("#mycon>strong").text(arr[0].split("=")[1])
}



