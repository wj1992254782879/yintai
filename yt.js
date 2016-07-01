$(function(){
	// 头部菜单
	var my=$(".head-right")[4];
	var myyt=$(".myyt")[0];
	my.onmouseover=function(){
		animate(myyt,{height:214},100);
		// myyt.style.display="block";
	}
	myyt.onmouseover=function(){
		animate(myyt,{height:214},100);
		// myyt.style.display="block";
	}
	myyt.onmouseout=function(){
		animate(myyt,{height:0},10)
	}

	var left1=$(".head-left")[2];
	var wei=$(".weichat")[0];
	left1.onmouseover=function(){
		animate(wei,{height:155},50);
	}
	wei.onmouseover=function(){
		animate(wei,{height:155},50);
	}
	wei.onmouseout=function(){
		animate(wei,{height:0},10);
	}

	var left2=$(".head-left")[4];
	var pnoneyt=$(".phoneyt")[0];
	left2.onmouseover=function(){
		animate(pnoneyt,{height:195},50);
	}
	pnoneyt.onmouseover=function(){
		animate(pnoneyt,{height:195},50);
	}
	pnoneyt.onmouseout=function(){
		animate(pnoneyt,{height:0},10);
	}


	var bl=$(".bl-one");
		var foreAfter=$(".fore-after");
		var menuPage=$(".menu-page");
		for(var i=0;i<bl.length;i++){
			bl[i].index=i;
			bl[i].onmouseover=function(){
				bl[this.index].style.background="#E5004F";
				foreAfter[this.index].style.display="block"
				menuPage[this.index].style.display="block"
			}
			bl[i].onmouseout=function(){
				bl[this.index].style.background="#333";
				foreAfter[this.index].style.display="none"
				menuPage[this.index].style.display="none"
			}
		}
		for(var i=0;i<menuPage.length;i++){
			menuPage[i].index=i;
			menuPage[i].onmouseover=function(){
				bl[this.index].style.background="#E5004F";
				foreAfter[this.index].style.display="block"
				menuPage[this.index].style.display="block"
			}
			menuPage[i].onmouseout=function(){
				bl[this.index].style.background="#333";
				foreAfter[this.index].style.display="none"
				menuPage[this.index].style.display="none"
			}
		}
	// banner轮播
	var box=$(".b-banner")[0];
	var imgs=$(".ban-con");
	var point=$(".circle");
	var lt=$(".lt")[0];
	var rt=$(".rt")[0];
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(){
		if(!flag){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		for(var i=0;i<imgs.length;i++){
			point[i].style.background="#333";
		}
		imgs[n].style.opacity=1;
		imgs[next].style.opacity=0;
	    point[next].style.background="#E5004F";
	    imgs[next].style.zIndex=1;
	    animate(imgs[n],{opacity:0},500);
	    animate(imgs[next],{opacity:1},function(){
	    	flag=true;
	    })
	    n=next;

	}
	box.onmouseover=function(){
		clearInterval(t);
		rt.style.display="block";
		lt.style.display="block";
	}
	box.onmouseout=function(){
			t=setInterval(move,3000);
			rt.style.display="none";
			lt.style.display="none";
	}
	rt.onclick=function(){
			move();
	}
	lt.onclick=function(){
			move1();
	}
	for(var i=0;i<imgs.length;i++){
		point[i].index=i;
		point[i].onclick=function(){
			for(var j=0;j<point.length;j++){
				point[j].style.background="#333";
				imgs[n].style.opacity=1;
			    imgs[this.index].style.opacity=0;
			}
				point[this.index].style.background="#E5004F";
				imgs[this.index].style.zIndex=1;
				animate(imgs[n],{opacity:0},500);
				animate(imgs[this.index],{opacity:1},500);
				n=this.index;
	    }
	}
	function move1(){
		if(!flag){
			return;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			point[i].style.background="#211616";
			imgs[n].style.opacity=1;
			imgs[next].style.opacity=0;
		}
			point[next].style.background="#E5004F";
			imgs[next].style.zIndex=1;
			animate(imgs[n],{opacity:0},500);
			animate(imgs[next],{opacity:1},500,function(){flag=true});
			n=next;
	}

	// 选项卡
	var su=$(".super-one");
	// var su1=$(".super-two");
	var details=$(".details");
	for(var i=0;i<su.length;i++){
		su[i].style.borderColor="#323333";
		details[i].style.zIndex=0;
		su[i].index=i;
		su[i].onmouseover=function(){
			su[this.index].style.borderColor="#E5004F";
			// su1[this.index].style.display="block";
			details[this.index].style.zIndex=1;
		}
		su[i].onmouseout=function(){
			su[this.index].style.borderColor="#323333";
			// su1[this.index].style.display="none";
			details[this.index].style.zIndex=0;
		}
	}
	for(var i=0;i<details.length;i++){
		su[i].style.borderColor="#323333";
		details[i].style.zIndex=0;
		details[i].index=i;
		details[i].onmouseover=function(){
			su[this.index].style.borderColor="#E5004F";
			// su1[this.index].style.display="block";
			details[this.index].style.zIndex=1;
		}
		details[i].onmouseout=function(){
			su[this.index].style.borderColor="#323333";
			// su1[this.index].style.display="none";
			details[this.index].style.zIndex=0;
		}
	}


	var lb=$(".lb");
	for(var i=0;i<lb.length;i++){
		shuang(lb[i]);
	}
	var fodos=$(".fodos");
	for(var i=0;i<fodos.length;i++){
		jiedian(fodos[i]);
	}

     // 楼层跳转
    var floor = $(".floor");
	var lis = $(".fl");
	var fudong = $(".float")[0];
	var cw = document.documentElement.clientWidth;
	var ch = document.documentElement.clientHeight;
	var bh = fudong.offsetHeight;
	fudong.style.top = (ch - bh) / 2 + "px";
	var flag=true;
	var flag1=true;
	var sign=true;
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			sign=false;
			// var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
			var top = floor[this.index].offsetTop;
			// 将当前点击的楼层距离屏幕的高度赋给滚动距离
			animate(document.documentElement,{scrollTop:top},300,function () {
			    sign=true;
			})
			animate(document.body,{scrollTop:top},300,function () {
			    sign=true;
			})
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.background = "none"
				lis[this.index].innerHTML="";
			}
			lis[this.index].style.color = "#fff" 
			lis[this.index].style.background = "#C81623"
			// lis[this.index].style.fontSize = 12+"px";
			var aa = lis[this.index].getAttribute("aa");
			lis[this.index].innerHTML=aa;
			// 获取自定义属性，并将该属性赋值给当前所在框
		}
	}
     

     //滚动条事件
	window.onscroll=function(){
		if(!sign){
			return;
		}
		var obj=document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i=0; i<floor.length; i++) {
			if (obj.scrollTop>=(floor[i].offsetTop-ch)+300) {
				for (var j=0;j<lis.length;j++) {
					lis[j].style.background="none"
					lis[j].innerHTML="";
				}
				
				var aa=lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				lis[i].style.color="#fff"
				lis[i].style.background="#c81623"
			}
		}
		if (obj.scrollTop>=(floor[0].offsetTop-ch)) {//开关控制
			if(flag){
				flag=false;
				animate(fudong,{opacity:1},300,function(){flag1=true;})
			} 
		}else{
			if(flag1){
			flag1=false;
			animate(fudong,{opacity:0},300,function(){flag=true;})

			} 
		}
	}

})
	