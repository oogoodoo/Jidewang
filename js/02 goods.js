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
//点击跳转购买结算
$("#gotobuy").on("click",function(){
	if(Cookie.has('id')){
	location.href="06Settlement1.html?pid="+pid+"num="+$("#sellnum").text();}
	else{location.href="03LoginPage.html?";}
})
//点击跳去所有商品
$(".gg").on("click",function(){
	location.href="08AllGoods.html?pid=";
})

//导航栏---------------------------------------------------
$(".sidenav").slideUp(500, function() {})
$(".navlist>li").eq(0).on("mouseenter", function City() {
	$(".sidenav").slideDown(500, function() {})
})
$(".navlist>li").eq(0).on("mouseleave", function City() {
	$(".sidenav").slideUp(500, function() {})
})

//-商品数量--------------------------------------------------
var z=1;
$("#sub").on("click",function(){
	if(z<=1){$("#sub").attr("disabled","disabled")
	$("#sub").css({"background":"darkgray","color":"white"})}
	else{
		z--;
		$("#add").css({"background":"white","color":"red"})
		$("#add").removeAttr("disabled")}
	    $("#sellnum").text(z);
	    $(".totnum").text(z*data[pid].sell)
	   
})

$("#add").on("click",function(){
	if(z>=9){$("#add").attr("disabled","disabled")
	$("#add").css({"background":"gray","color":"white"})}
	else{
	z++;
	$("#sub").css({"background":"white","color":"red"})
	$("#sub").removeAttr("disabled")}
	$("#sellnum").text(z);
	 $(".totnum").text(z*data[pid].sell)
		
})

//-商品详情与评论区--------------------------------------------------
$(".mclist>li").on("click",function(){
	$(this).siblings().attr("style","");
	$(this).css({"background": "#E60111","color": "white"})
    console.log(this.id)
	if(this.id=="li2"){
		console.log(111)
		$(".goods-pic").css({"display":"none"});
		$("#gcomm").css({"display": "block"})
		}
	else{console.log(222)
	$(".goods-pic").css({"display":"block"});
	$("#gcomm").css({"display": "none"})
	}
})

//-商品渲染-------------------------------------------------
//从地址拿到商品id，拿到这个商品的所有信息
var pid = location.search.split("=")[1];
 var a=data[pid]
// console.log( a.pic[0].smp)
  
//更改商品名字
var h1=document.getElementsByTagName("h1")[0];
h1.innerText=data[pid].uname;
//更改价格
var  pri=document.getElementsByClassName("pri")[0];
pri.innerText=data[pid].sell;
//更改总价
var totnum=document.getElementsByClassName("totnum")[0]
totnum.innerText=data[pid].sell;
//拿到放小图的ul
 var smul=document.getElementsByClassName("smpic")[0];

//渲染小图
    for(var i=0;i<a.pic.length;i++){
	var li=document.createElement("li")
     li.style="background:"+ a.pic[i].smp+"no-repeat center;background-size: contian;"
     smul.appendChild(li);
}

//小图样式
$(".smpic>li").on("mouseenter",function(){
	$(this).siblings().css({"border": "none"});
	$(this).css({"border": "1px solid darkred"})
$("#midview").css({"background":a.pic[$(this).index()].midp+"no-repeat center","background-size": "contain"})
})
 //初始化一个中图
$("#midview").css({"background":a.pic[0].midp+"no-repeat center","background-size": "contain"})

//渲染商品详情大样图
//获取商品详情的ul
var goodslist=document.getElementsByClassName("goods-pic")[0];
//创建li，li里面装img
var goodspic1=document.createElement("li");
var gimg1=document.createElement("img");
    gimg1.src=a.recom1
    goodspic1.appendChild(gimg1);
    goodslist.appendChild(goodspic1);
    
var goodspic2=document.createElement("li");
var gimg2=document.createElement("img");
    gimg2.src=a.recom2
    goodspic2.appendChild(gimg2);
    goodslist.appendChild(goodspic2);
    
var goodspic3=document.createElement("li");
var gimg3=document.createElement("img");
    gimg3.src=a.recom3
    goodspic3.appendChild(gimg3);
    goodslist.appendChild(goodspic3);
    
var goodspic4=document.createElement("li");
var gimg4=document.createElement("img");
    gimg4.src=a.recom4
    goodspic4.appendChild(gimg4);
    goodslist.appendChild(goodspic4);
    
var goodspic5=document.createElement("li");
var gimg5=document.createElement("img");
    gimg5.src=a.recom5
    goodspic5.appendChild(gimg5);
    goodslist.appendChild(goodspic5);
    
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
	          
//点击购物车
var addbuycar=document.getElementById("addbuycar");
var cir=document.getElementById("cir");
addbuycar.onclick=function(){
	if(Cookie.has('id')){ 
		if(Cookie.has(pid)){ 
		if(confirm('商品已经加入聚宝车了哦！立即去聚宝车看看？')){
		 location.href="05BuyCarPage.html?";
		Cookie.set(pid,z,999);}else{Cookie.set(pid,z,999);}}
	else{
		cir.style="animation: wowo 1.5s cubic-bezier(0.0, 0.0, 0.0, 0.0) 1 forwards;";
		Cookie.set(pid,z,999);}
	}
	else{ location.href="03LoginPage.html?";}
	
}	          
	          
	          	                    
	                  
}

