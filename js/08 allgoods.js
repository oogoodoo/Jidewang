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
//点击跳去所有商品
$(".gg").on("click",function(){
	location.href="08AllGoods.html?pid=";
})
//导航栏---------------------------------------------------
$(".sidenav").slideUp(1, function() {})
$(".navlist>li").eq(0).on("mouseenter", function City() {	
	 	$(".sidenav").slideDown(500, function() {})
})
$(".navlist>li").eq(0).on("mouseleave", function City() {
	$(".sidenav").slideUp(500, function() {})
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
	          	  
//商品渲染	          	  
var  newlist=document.getElementsByClassName("all-list")[0];      

putdata(data);
function putdata(x){
	for(var i=0;i<x.length;i++){
		var li=document.createElement("li");
		var img=document.createElement("img");
		var h4=document.createElement("h4");
		var span=document.createElement("span");
		li.setAttribute("pid",x[i].id);
		li.style="position: relative;"
		li.onclick=function(){			
			var s = this.getAttribute("pid")
		location.href="02DetailsPage.html?pid="+s;};
		
		img.src=x[i].upic;
		h4.innerText=x[i].uname;
		span.innerText=x[i].usell;
		li.appendChild(img);
		li.appendChild(h4);
		li.appendChild(span);
		newlist.appendChild(li);
				
//----------------------------------------滑入li 创建购物车红色框	
		li.onmouseenter=function(){
		var dav=document.createElement("div");
		var dcir1=document.createElement("div");
		var dcir2=document.createElement("div");
		var dcir3=document.createElement("div");
//	    dav.style="position: absolute;left: 0;right: 0;bottom: 0;text-align: center;background: #E60111;color: white;display:none"
	    dav.innerText="加入聚宝车";
	    dav.id="dav";
	    dcir1.id="dcir1"
	    dcir2.id="dcir2"
	    dcir3.id="dcir3"
	    dav.appendChild(dcir1);
	    dav.appendChild(dcir2);
	    dav.appendChild(dcir3);
	    this.appendChild(dav);	
       dav.style="position: absolute;left: 0;right: 0;bottom: 90px;text-align: center;background: #E60111;color: white;z-index:88;width: 210px;height: 30px;"					
	 //--------给红色框添加点击事件-----------
	 dav.onclick=function(e){
	   	   e.stopPropagation();//阻止冒泡
	   	   var pipd=this.parentNode.getAttribute("pid")
//	   	   console.log(this.parentNode.getAttribute("pid"))
	   	   	if(Cookie.has('id')){ 
		if(Cookie.has(pipd)){ 
		if(confirm('商品已经加入聚宝车了哦！立即去聚宝车看看？')){
		 location.href="05BuyCarPage.html?";
		Cookie.set(pipd,1,999);}else{Cookie.set(pipd,1,999);}}
	else{
		 dcir3.style="animation: bobo 1s cubic-bezier(0.0, 0.0, 0.0, 0.0) 1 forwards;"
		Cookie.set(pipd,1,999);}
	}
	else{ location.href="03LoginPage.html?";}
	   	      	      	
	                  }
		         }	
//----------------------------------------滑出li 删除购物车红色框			         
		li.onmouseleave=function(){dav.remove()}				
	       }
       }

 //-----------------------点击排序--------------------------------
							$("#sort1").on("click",function(){					
							var  newlist=document.getElementsByClassName("all-list")[0];     
								var srr=[];							
								for(var i = 0; i < data.length; i++) {srr[i]=data[i]}
								srr.sort(function(a,b){
									var s1=Number(a.usell.split("￥")[1]) 
									var s2=Number(b.usell.split("￥")[1]) 									
								  return s2	-s1})
						   newlist.innerHTML="";
                           putdata(srr)
					})             
     
                       	$("#sort2").on("click",function(){					
							var  newlist=document.getElementsByClassName("all-list")[0];     
								var srr=[];							
								for(var i = 0; i < data.length; i++) {srr[i]=data[i]}
								srr.sort(function(a,b){
									var s1=Number(a.usell.split("￥")[1]) 
									var s2=Number(b.usell.split("￥")[1]) 									
								  return s1	-s2})
						   newlist.innerHTML="";
                           putdata(srr)
					})  
  }
	
	

