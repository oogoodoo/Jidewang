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
//-商品渲染-------------------------------------------------
//从地址拿到商品id，拿到这个商品的所有信息
var pid = location.search.split(/\?pid=/g)[1].split(/num/g)[0];
var hnum = location.search.split(/num=/g)[1];
var list=document.getElementsByClassName("meslist")[0];


var a=data[pid]
// console.log(hnum)
 
var li=document.createElement("li");
var span1=document.createElement("span");
var span2=document.createElement("span");
var span3=document.createElement("span");
var span4=document.createElement("span");

span1.innerText=a.uname;
span2.innerText=a.sell;
span3.innerText=hnum;
span4.innerText=a.sell*hnum;

li.appendChild(span1);
li.appendChild(span2);
li.appendChild(span3);
li.appendChild(span4);

list.appendChild(li);
//console.log(a)
$("#totbuy").text(a.sell*hnum)
//点击增加收货地址---------------------------------------------------
$("#adre").on("click",function(){
	$("#addres").css({"display":"block"})
})
$("#yesadr").on("click",function(){
	$("#getdes>p").text($("#useadr").val());
	$("#addres").css({"display":"none"})
})
//页面载入订单编号随机，创建当前时间--------------------------------------------
var ordernum=document.getElementById("ordernum");
var tday=document.getElementById("tday");
window.onload=function(){
	var a=Math.random()*9999999999;
	ordernum.innerText="#"+ parseInt(a);
	var d=new Date();
	var year=d.getFullYear();
	var month=d.getMonth()+1;
	var day=d.getDate();
	var hours=d.getHours();
	var mins=d.getMinutes()
	tday.innerText=year+"-"+month+"-"+day+" & "+hours+":"+ mins;
	
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
}
//支付方式---------------------------------
var inputrad=document.getElementsByTagName("input")
$(document).ready(function(){
        var old = null; //用来保存原来的对象
        $("#gobuy>input").eq(0).each(function(){
            if(this.checked){old = this; }
            this.onclick = function(){
                if(this == old){this.checked = false;old = null; } 
                else{old = this;
                  inputrad[5].checked = false;
                  inputrad[6].checked = false;}
             }
        });
           $("#gobuy>input").eq(1).each(function(){
            if(this.checked){old = this;}
            this.onclick = function(){
                if(this == old){this.checked = false;old = null; } 
                else{old = this;
                	inputrad[4].checked = false;
                    inputrad[6].checked = false; }
            }
        });
           $("#gobuy>input").eq(2).each(function(){
            if(this.checked){old = this;}
            this.onclick = function(){
                if(this == old){this.checked = false;old = null; } 
                else{old = this;
                  inputrad[5].checked = false;
                  inputrad[4].checked = false;}
            }
        });
    });
//点击结算判断
   inputrad[7].onclick=function(){
   	if( inputrad[4].checked==true){alert("正在跳转支付页面，请勿关闭");alert("￥"+span4.innerText+"元支付成功！点击去查看");location.href="07UserPage.html?pid=";}
   	else if(inputrad[5].checked==true){alert("正在跳转支付页面，请勿关闭");alert("￥"+span4.innerText+"元支付成功！点击去查看");location.href="07UserPage.html?pid=";}
   	else if(inputrad[6].checked==true){alert("正在跳转支付页面，请勿关闭");alert("￥"+span4.innerText+"元支付成功！点击去查看");location.href="07UserPage.html?pid=";}
   	else{alert("请选择付款方式");}
   }


