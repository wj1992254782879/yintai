function shuang(obj){
		var imgs=$(".img",obj);
		var circles=$(".point",obj);
		var dr=$(".right",obj)[0];
		var dl=$(".left",obj)[0];
		var w=imgs[0].offsetWidth;
		var x=0;
		var y=0;
		var flag=true;
		var t=setInterval(dong,2000);
		function dong(){
			if(!flag){
				return;
			}
			flag=false;
			y=x+1;
			if(y>=imgs.length){
					y=0;
				}
			for(var i=0;i<imgs.length;i++){
				circles[i].style.background="#6E6E6E";
			}
			circles[y].style.background="#D90A51";
			imgs[y].style.left=w+"px";
			imgs[y].style.zIndex=1;
			animate(imgs[x],{left:-w},300);
			animate(imgs[y],{left:0},300,function(){flag=true});
			x=y;
		}
		function dong1(){
			if(!flag){
				return;
			}
			flag=false;
			y=x-1;
			if(y<0){
					y=imgs.length-1;
				}
			for(var i=0;i<imgs.length;i++){
				circles[i].style.background="#6E6E6E";
			}
			circles[y].style.background="#D90A51";
			imgs[y].style.left=-w+"px";
			imgs[y].style.zIndex=1;
			animate(imgs[x],{left:w},300);
			animate(imgs[y],{left:0},300,function(){flag=true});
			x=y;
		}
		obj.onmouseover=function(){
			clearInterval(t);
			 animate(dl,{width:30},100)
			  animate(dr,{width:30},100)
		}
		obj.onmouseout=function(){
			t=setInterval(dong,2000)
			 animate(dl,{width:0},10)
			  animate(dr,{width:0},10)
		}
		dr.onclick=function(){
			dong();
		}
		dl.onclick=function(){
			dong1();
		}
		for(var i=0;i<imgs.length;i++){
			circles[i].index=i;
			circles[i].onclick=function(){
				if(this.index>x){
					for(var j=0;j<imgs.length;j++){
						circles[j].style.background="#6E6E6E";
					}
					circles[this.index].style.background="#D90A51";
					imgs[this.index].style.left=w+"px";
					imgs[this.index].zIndex=1;
					animate(imgs[x],{left:-w},300);
					animate(imgs[this.index],{left:0},300);
					x=this.index;
				}else if(this.index<x){
					for(var j=0;j<imgs.length;j++){
						circles[j].style.background="#6E6E6E";
					}
					circles[this.index].style.background="#D90A51";
					imgs[this.index].style.left=-w+"px";
					imgs[this.index].zIndex=1;
					animate(imgs[x],{left:w},300);
					animate(imgs[this.index],{left:0},300);
					x=this.index;
				}else{
					return;
				}
			}
		}
	}

	function jiedian(obj){
		var box=$(".fodos-middle",obj)[0];
		var xr=$(".fodos-right",obj)[0]; 
		var xl=$(".fodos-left",obj)[0];
		var width=$(".pictures")[0].offsetWidth;
		var flag1=true;
		function move(){
			if(!flag1){
				return;
			}
			flag1=false;
			var first=getFirst(box);
			animate(box,{left:-width},500,function(){
				box.appendChild(first);
				box.style.left=0;
				flag1=true;
			})
		}
		function move1(){
			if(!flag1){
				return;
			}
			flag1=false;
			var first=getFirst(box);
			var last=getLast(box);
			insertBefore(last,first);
			box.style.left=-width+"px";
			animate(box,{left:0},500,function(){
				flag1=true;
			});
		}
		xr.onclick=function(){
			move();
		}
		xl.onclick=function(){
			move1();
		}
	}
