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
//$(".sidenav").slideUp(500, function() {})
//$(".navlist>li").eq(0).on("mouseenter", function City() {
//	$(".sidenav").slideDown(500, function() {})
//})
//$(".navlist>li").eq(0).on("mouseleave", function City() {
//	$(".sidenav").slideUp(500, function() {})
//})
//轮播图---------------------------------------------------
var scrlist=document.getElementsByClassName("scrolist")[0];
var scrli=scrlist.children;
//console.log(scrli)
var scrcir=document.getElementsByClassName("cirbox")[0];
var cirs=scrcir.children;
var ind=0; timer = null;
timer = setInterval(Mtplay, 2000);

function Mtplay() {
ind++;
ind >= scrli.length ? ind = 0 : ind;
for(var n = 0; n < scrli.length; n++) {
cirs[n].style = '';
scrli[n].style = '';
}
scrli[ind].style = 'opacity: 1;';
cirs[ind].style = 'background-color: red;color:white;';
scrlist.style.transform = "translate(" + -1450 * ind + "px)";

}
//给轮播图增加商品点击跳转
scrli[0].onclick=function(){ if(Cookie.has('id')){ location.href="02DetailsPage.html?pid="+2001;}else{location.href="03LoginPage.html?";}}
scrli[1].onclick=function(){if(Cookie.has('id')){ location.href="02DetailsPage.html?pid="+1003;}else{location.href="03LoginPage.html?";}}
scrli[2].onclick=function(){if(Cookie.has('id')){ location.href="02DetailsPage.html?pid="+3001;}else{location.href="03LoginPage.html?";}}
	
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
//-------滚动栏------------------------------------------------	         
var timer2=null;ddg=0;
var boxgo=document.getElementById("boxex");
timer2 = setInterval(Gorun, 5000);

function Gorun(){	
	if(ddg>=360){ddg=-90;ddg+=90;}
	ddg+=90;
	boxgo.style="transform:rotatex("+ddg+"deg);";	
}
	         	         
//--------数据渲染-------------------------------------------
var  newlist1=document.getElementsByClassName("newcon-list1")[0];
var  newlist2=document.getElementsByClassName("newcon-list2")[0];
var  newlist3=document.getElementsByClassName("newcon-list3")[0];
var  newlist4=document.getElementsByClassName("newcon-list4")[0];


putdata1(data1);
function putdata1(x){
	for(var i=0;i<x.length;i++){
		var li=document.createElement("li");
		var img=document.createElement("img");
		var h2=document.createElement("h2")
		var span=document.createElement("span")
		li.setAttribute("pid",x[i].id);
		li.onclick=function(){
			var s = this.getAttribute("pid")
		location.href="02DetailsPage.html?pid="+s;
		};
		img.src=x[i].upic;
		h2.innerText=x[i].uname;
		span.innerText=x[i].usell;
		li.appendChild(img);
		li.appendChild(h2);
		li.appendChild(span);
		newlist1.appendChild(li);		
	}
}	         

putdata2(data2);
function putdata2(x){
	for(var i=0;i<x.length;i++){
		var li=document.createElement("li");
		var img=document.createElement("img");
		var h2=document.createElement("h2")
		var span=document.createElement("span")
		li.setAttribute("pid",x[i].id);
		li.onclick=function(){
			var s = this.getAttribute("pid")
		location.href="02DetailsPage.html?pid="+s;
		};
		img.src=x[i].upic;
		h2.innerText=x[i].uname;
		span.innerText=x[i].usell;
		li.appendChild(img);
		li.appendChild(h2);
		li.appendChild(span);
		newlist2.appendChild(li);		
	}
}	

putdata3(data3);
function putdata3(x){
	for(var i=0;i<x.length;i++){
		var li=document.createElement("li");
		var img=document.createElement("img");
		var h2=document.createElement("h2")
		var span=document.createElement("span")
		li.setAttribute("pid",x[i].id);
		li.onclick=function(){
			var s = this.getAttribute("pid")
		location.href="02DetailsPage.html?pid="+s;
		};
		img.src=x[i].upic;
		h2.innerText=x[i].uname;
		span.innerText=x[i].usell;
		li.appendChild(img);
		li.appendChild(h2);
		li.appendChild(span);
		newlist3.appendChild(li);		
	}
}	

putdata4(data4);
function putdata4(x){
	for(var i=0;i<x.length;i++){
		var li=document.createElement("li");
		var img=document.createElement("img");
		var h2=document.createElement("h2")
		var span=document.createElement("span")
		li.setAttribute("pid",x[i].id);
		li.onclick=function(){
			var s = this.getAttribute("pid")
		location.href="02DetailsPage.html?pid="+s;
		};
		img.src=x[i].upic;
		h2.innerText=x[i].uname;
		span.innerText=x[i].usell;
		li.appendChild(img);
		li.appendChild(h2);
		li.appendChild(span);
		newlist4.appendChild(li);		
	}
}	
	    }
	
// 每日推荐的4个
 	var data1=[
		{
			"id":"8001",
			"uname":"儿童毛线帽子保暖针织帽",
			"usell":"￥98.00",
			"upic":"img/02salegoods/8001/O1CN01Tftc4K1NJ1aMBSsKC_!!704311548.jpg_430x430q90.jpg"
		},
		{
			"id":"3001",
			"uname":"装饰画现代简约背景墙",
			"usell":"￥420.00",
			"upic":"img/02salegoods/3001/O1CN01ZzE7H925LAXjNcEPa_!!0-item_pic.jpg_430x430q90.jpg"
		},
		{
			"id":"9003",
			"uname":"新鲜知了200只活体速冻金蝉蛹",
			"usell":"￥158.00",
			"upic":"img/02salegoods/9003/TB2C1GahwZC2uNjSZFnXXaxZpXa_!!1756499933.jpg_430x430q90.jpg"
		},
		{
			"id":"6002",
			"uname":"韩版潮流鞋男黑色炫酷",
			"usell":"￥244.00",
			"upic":"img/02salegoods/6002/O1CN01P6qZFz240GqiDkcvy_!!3423947328.jpg_430x430q90.jpg"
		},								
		]	

 	var data2=[
		{
			"id":"2001",
			"uname":"翠佛堂玉石挂件玉吊坠",
			"usell":"￥5400.00",
			"upic":"img/02salegoods/2001/O1CN011zfQLbDTQhlL94y_!!0-item_pic.jpg_430x430q90.jpg"
		},
		{
			"id":"3001",
			"uname":"装饰画现代简约背景墙",
			"usell":"￥420.00",
			"upic":"img/02salegoods/3001/O1CN01ZzE7H925LAXjNcEPa_!!0-item_pic.jpg_430x430q90.jpg"
		},
		{
			"id":"1003",
			"uname":"贵州茅台白酒",
			"usell":"￥1888.00",
			"upic":"img/02salegoods/1003/TB2BGELA5CYBuNkHFCcXXcHtVXa_!!2983865159.jpg_430x430q90.jpg"
		},
		{
			"id":"1008",
			"uname":"王丙乾（王氏茅酒）贵州白酒",
			"usell":"￥668.00",
			"upic":"img/02salegoods/1008/O1CN01oOFeh92EBr1qYOF5T_!!0-item_pic.jpg_430x430q90.jpg"
		},								
		]	
		
 	var data3=[
		{
			"id":"8008",
			"uname":"潮男秋冬新款刺绣图案针织帽",
			"usell":"￥38.00",
			"upic":"img/02salegoods/8008/O1CN011Indxmz9YVXq1PF_!!4075260938.jpg_430x430q90.jpg"
		},
		{
			"id":"8004",
			"uname":"帽子女冬天加绒毛线帽",
			"usell":"￥29.00",
			"upic":"img/02salegoods/8004/TB2SHPekamWQ1JjSZPhXXXCJFXa_!!1738616887.jpg_430x430q90.jpg"
		},
		{
			"id":"6008",
			"uname":"2018男童冬季鞋保暖鞋",
			"usell":"￥39.00",
			"upic":"img/02salegoods/6008/TB1dsMKaBfM8KJjSZFOXXXr5XXa_!!0-item_pic.jpg_430x430q90.jpg"
		},
		{
			"id":"6005",
			"uname":"香阁儿粗跟短筒靴新款",
			"usell":"￥333.00",
			"upic":"img/02salegoods/6005/O1CN01aty6Ls1Ly7uMxguPA_!!0-item_pic.jpg_430x430q90.jpg"
		},								
		]	
		
 	var data4=[
		{
			"id":"9004",
			"uname":"儿童恐龙玩具套装仿真动物大号",
			"usell":"￥116.00",
			"upic":"img/02salegoods/9004/TB2g7CetTXYBeNkHFrdXXciuVXa_!!2453562187.jpg_430x430q90.jpg"
		},
		{
			"id":"5004",
			"uname":"狗狗玩具球耐咬发声宠物用品",
			"usell":"￥35.00",
			"upic":"img/02salegoods/5004/O1CN01dhRhLs1WliwzsXmto_!!0-item_pic.jpg_430x430q90.jpg"
		},
		{
			"id":"5006",
			"uname":"猫玩具猫薄荷仿真鲤鱼毛绒抱枕",
			"usell":"￥40.00",
			"upic":"img/02salegoods/5006/O1CN0124Nd2bYTacRzdsq_!!0-item_pic.jpg_430x430q90.jpg"
		},
		{
			"id":"5001",
			"uname":"买一送一散养农家母鸡",
			"usell":"￥98.00",
			"upic":"img/02salegoods/5001/O1CN01r0WLPl1zLjKc569h5_!!1733566698.jpg_430x430q90.jpg"
		},								
		]	