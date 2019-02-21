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
//空购物车点击返回
$(".buyli>p").on("click",function(){
	location.href="01HomePage.html?pid=";
})
//第一个li，没有商品时显示叫你去购物GO，有商品就隐藏
var buyli=document.getElementsByClassName("buyli")[0];

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
	                  
	 //载入页面就判断购物车是否有物品，条件就是除了id之外还有其他cookie        
	      if(document.cookie.split(";").length>1){
	      buyli.style="display:none;"      
	       //因为返回的cookie值是一个数组，这一步是把数组里排第一的叫id的（登录信息）过滤掉，这样剩下的就全部是商品
	    var crr=document.cookie.split(";").slice(1,9999)	

	   //如果购物车有商品，用for把商品遍历出来   
	   var buycarlist=document.getElementsByClassName("buycar-list")[0];
      for(var i=0;i<crr.length;i++){   
      	var li=document.createElement("li");
      	 var drr=crr[i].split("=");
      	 var pid=drr[0].trim()     
	     var a=data[pid]
//  console.log(a);
      	var d1=document.createElement("div");
      	var put1=document.createElement("input");
    	put1.type="checkbox";
    	
      	d1.appendChild(put1);
      	
      	var d2=document.createElement("div")
      	d2.style="background:"+ a.pic[0].midp+"no-repeat center;background-size: cover;"
      	      	
      	var d3=document.createElement("div")
      	var h3=document.createElement("h3")
      	h3.innerText=a.uname;
      	d3.appendChild(h3);
      	
      
         h3.onclick=function(){
         	var ind=$(this).parent().siblings().eq(6).children().attr("id");
    	   location.href="02DetailsPage.html?pid="+ind;
      	  }    	  
      	      	  
      	var d4=document.createElement("div");
         var span4=document.createElement("span");  
      	 span4.innerText="服务承诺：无";
      	d4.appendChild(span4);
      	         	       	   
      	var d5=document.createElement("div")
        var span5a=document.createElement("span");  
        var span5b=document.createElement("span");  
      	span5a.innerText="￥";
      	span5b.innerText=a.sell;
      	d5.appendChild(span5a);
      	d5.appendChild(span5b);
      	
      	var d6=document.createElement("div")
      	var put6a=document.createElement("input");
      	var span6=document.createElement("span"); 
      	var put6b=document.createElement("input");
      	
      	put6a.type="button";
      	put6a.value="-";
      	put6b.type="button";
      	put6b.value="+";
      	span6.innerText=drr[1];

        put6a.onclick=function(){
        	var ind=$(this).parent().siblings().eq(6).children().attr("id");
         	var z=Number($(this).siblings("span").text());
         	var m=$(this).parent().siblings().eq(5).children().eq(1);
         	var n=$(this).parent().siblings().eq(4).children().eq(1).text();
        	if(z<=1){$(this).attr("disabled","disabled");
        	$(this).css({"background":"darkgray","color":"white"})}
        	else{ 
        	        z=z-1;
        	       $(this).siblings("input").css({"background":"aliceblue","color":"black"});
        	       $(this).siblings("input").removeAttr("disabled")
       	           $(this).siblings("span").text(z);      	           
        	       m.text(n*z);
        	 
        	}
        	
        	Cookie.set(ind,z,999);
        	Totsello()
             }
         put6b.onclick=function(){
         var ind=$(this).parent().siblings().eq(6).children().attr("id");
          var z=Number($(this).siblings("span").text());
          var m=$(this).parent().siblings().eq(5).children().eq(1);
          var n=$(this).parent().siblings().eq(4).children().eq(1).text();
          	if(z>=9){$(this).attr("disabled","disabled");
        	$(this).css({"background":"darkgray","color":"white"})}
           	else{            		
        	       z=z+1;
        	       $(this).siblings("input").css({"background":"aliceblue","color":"black"});
        	       $(this).siblings("input").removeAttr("disabled")
       	           $(this).siblings("span").text(z);
           	       m.text(n*z); 	}
           	
           	Cookie.set(ind,z,999);
           	Totsello()
            }
  		d6.appendChild(put6a);
  		d6.appendChild(span6);
  		d6.appendChild(put6b);      	     	
      	var d7=document.createElement("div");
      	var span7a=document.createElement("span");  
        var span7b=document.createElement("span"); 
        span7a.innerText="￥";
        span7b.innerText=a.sell*drr[1];            
        d7.appendChild(span7a);
        d7.appendChild(span7b);
//   console.log(pid)
      	var d8=document.createElement("div")
      	var put8=document.createElement("input");
      	put8.type="button";
      	put8.value="删除";
      	put8.id=pid;
      	put8.onclick=function(){
      		var ask=confirm("确定要删除此商品吗？");
//    		console.log($(this).attr("id"))
      		if(ask){
      		Cookie.set($(this).attr("id"),000,-10);
      			$(this).parent().parent().remove();
      		if($("input[value='删除']").length==0){buyli.style="display:block;" }
//    		console.log( $("input[value='删除']"))
      		}
      		else{}
      	}
        d8.appendChild(put8);             
      	li.appendChild(d1);
      	li.appendChild(d2);
      	li.appendChild(d3);
      	li.appendChild(d4);
      	li.appendChild(d5);
      	li.appendChild(d6);
      	li.appendChild(d7);
      	li.appendChild(d8);
      	buycarlist.appendChild(li);     	
       }}
	     
$("input[type=checkbox]").addClass("cekput");
var cekput=document.getElementsByClassName("cekput");
//渲染的同时，给全选框添加事件
  for(var t=0;t<cekput.length;t++){
  	if(t==0){
  		cekput[0].onclick=function(){
   					if($("#allchose>input").is(':checked')==true){
						for(var i=0;i<cekput.length;i++){
							cekput[i].checked=true;					
						}
						 }
				else{
					for(var i=0;i<cekput.length;i++){
							cekput[i].checked=false;						
						} }
				Totsello()
  	}}
  	else{
  		cekput[t].onclick=function(){
  			var k=1;
  			for(var i=1;i<cekput.length;i++){
  				if(cekput[i].checked==true){k++;}
  				else{ cekput[0].checked=false;}
  			}
  			Totsello();
  	//把每一个勾选的商品当是k，当k等于checked的长度时，意思就是全部都勾选了，就让全选框打勾。
  			if(k==cekput.length){cekput[0].checked=true;}
  	}}
  	
  	
  }
  

//这是一个计算总价与总数量的方法
function Totsello(){
  var ts=document.getElementsByClassName("totsell")[0];
  var tn=document.getElementsByClassName("totnum")[0];
	 var grr=[];hrr=[];
	for(var s=1;s<cekput.length;s++){
		if(cekput[s].checked==true){ 
		  var p=Number($("input[type=checkbox]").eq(s).parent().siblings().eq(5).children().eq(1).text());		  
		  var u=Number($("input[type=checkbox]").eq(s).parent().siblings().eq(4).children().eq(1).text());
		  grr.push(p);
		  hrr.push(u);
		}else{p=0;u=0;}		
	}	
	var tot=0;hoh=0;
	for(var g=0;g<grr.length;g++){ tot=grr[g]+tot;}
	for(var h=0;h<hrr.length;h++){ hoh=hrr[h]+hoh;}
	ts.innerText=tot;
	tn.innerText=hoh;
}

//跳转结算页
$("#gobuy").on("click",function(){
	if(cekput.length==1){
		var a=confirm("你没有购买商品，是否去首页逛逛？")
		if(a){location.href="01HomePage.html?";}
	}else{
			for(var i=1;i<cekput.length;i++){
	 if(cekput[i].checked==false){
	  var ind=$(cekput[i]).parent().siblings().eq(6).children().attr("id")
	  var a=confirm("点击确认去结算并自动删除未被勾选商品"+data[ind].uname+"?"+"(点击否定将为你自动加入结算)");	
	 	if(a){     
	 	  console.log(ind)
	 	Cookie.set(ind,0,-10);
	 	location.href="06Settlement2.html?";	
	 	}else{console.log(cekput.length)}	 		 	
	 }
	else{i=i;location.href="06Settlement2.html?";}		  
	}
}
			   	
})  
      
}



